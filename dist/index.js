"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var X_WIDTH = 375;
var X_HEIGHT = 812;
var XSMAX_WIDTH = 414;
var XSMAX_HEIGHT = 896;
var _a = react_native_1.Dimensions.get('window'), W_HEIGHT = _a.height, W_WIDTH = _a.width;
var isIPhoneX = false;
if (react_native_1.Platform.OS === 'ios' && !react_native_1.Platform.isPad && !react_native_1.Platform.isTVOS) {
    isIPhoneX = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT;
}
var getExpoRoot = function () { return global.Expo || global.__expo || global.__exponent; };
exports.isExpo = function () { return getExpoRoot() !== undefined; };
function getStatusBarHeight(skipAndroid) {
    if (skipAndroid === void 0) { skipAndroid = false; }
    return react_native_1.Platform.select({
        ios: isIPhoneX ? 44 : 20,
        android: skipAndroid ? 0 : react_native_1.StatusBar.currentHeight,
        "default": 0
    });
}
exports.getStatusBarHeight = getStatusBarHeight;
//# sourceMappingURL=index.js.map