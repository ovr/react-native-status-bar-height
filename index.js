/*
 * react-native-status-bar-height
 */

import { Dimensions, Platform, StatusBar } from "react-native";

// Differ between iPhone and iPhone with notch
let _isIPhoneWithNotch = false;

//Check if iPhone with notch
if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
  if (Dimensions.get("window").height >= 812) {
    _isIPhoneWithNotch = true;
  }
}

/*
 * public isIPhoneWithNotch()
 */
export const isIPhoneWithNotch = () => isIPhoneWithNotch_v;

/*
 * public isExpo()
 */
const getExpoRoot = () => global.Expo || global.__expo || global.__exponent;
export const isExpo = () => getExpoRoot() !== undefined;

/*
 * public getStatusBarHeight()
 */
export function getStatusBarHeight(skipAndroid) {
  return Platform.select({
    ios: _isIPhoneWithNotch ? 44 : 20,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}
