import { Dimensions } from "react-native";

export const mockPlatform = (
  OS: "ios" | "android",
  isPad: boolean,
  isTVOS: boolean
) => {
  jest.doMock("react-native/Libraries/Utilities/Platform", () => {
    const Platform = jest.requireActual(
      "react-native/Libraries/Utilities/Platform"
    );
    return {
      ...Platform,
      isPad,
      isTVOS,
      OS,
      select: (plataformas: { [x: string]: string }) => plataformas[OS],
    };
  });
};

jest.mock("react-native/Libraries/Utilities/Dimensions", () => {
  let dimensionsMock = jest.fn();
  const Dimensions = jest.requireActual(
    "react-native/Libraries/Utilities/Dimensions"
  );
  Dimensions.get = dimensionsMock;
  return Dimensions;
});

export const mockCanvasSize = (width: number, height: number) => {
  Dimensions.get.mockClear();
  Dimensions.get.mockReturnValue({
    width,
    height,
  });
};

describe("getStatusBarHeight", () => {
  describe("iOS", () => {
    let getStatusBarHeight: (skipAndroid?: boolean) => number;
    beforeEach(() => {
      jest.resetModules();
      mockPlatform("ios", false, false);
    });

    test("Should return 20 when device is iOS and is iPad", () => {
      jest.resetModules();
      mockPlatform("ios", true, false);
      mockCanvasSize(375, 812);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 20;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });

    test("Should return 20 when device is iOS and is tvOS", () => {
      jest.resetModules();
      mockPlatform("ios", false, true);
      mockCanvasSize(375, 812);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 20;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 20 when device is iOS and have less width than iPhone X", () => {
      mockCanvasSize(374, 812);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 20;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 20 when device is iOS and have less height than iPhone X", () => {
      mockCanvasSize(375, 811);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 20;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 44 when device is iOS and have iPhone X width and height", () => {
      mockCanvasSize(375, 812);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 44;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 44 when device is iOS and have iPhone XS Max width and height", () => {
      mockCanvasSize(414, 896);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 44;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 44 when device is iOS and have iPhone 12 width and height", () => {
      mockCanvasSize(390, 844);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 47;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 44 when device is iOS and have iPhone 12 Max width and height", () => {
      mockCanvasSize(428, 926);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 47;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 49 when device is iOS and have iPhone 14 Max width and height", () => {
      mockCanvasSize(393, 852);

      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 49;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 49 when device is iOS and have iPhone 14 Pro Max width and height", () => {
      mockCanvasSize(430, 932);

      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 49;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
  });
  describe("Android", () => {
    let getStatusBarHeight: (skipAndroid?: boolean) => number;
    beforeEach(() => {
      jest.resetModules();
      mockPlatform("android", false, false);
      jest.mock("react-native/Libraries/Components/StatusBar/StatusBar", () => {
        return {
          currentHeight: 50,
        };
      });
    });
    test("Should return 50 from status bar size when device is Android and skipAndroid flag is false", () => {
      mockCanvasSize(428, 926);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 50;
      expect(getStatusBarHeight()).toBe(expectedSize);
    });
    test("Should return 0 from status bar size when device is Android and skipAndroid flag is true", () => {
      mockCanvasSize(428, 926);
      getStatusBarHeight = require("./").getStatusBarHeight;
      const expectedSize = 0;
      expect(getStatusBarHeight(true)).toBe(expectedSize);
    });
  });
});
