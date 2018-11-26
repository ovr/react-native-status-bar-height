// @flow
import { Dimensions, Platform, StatusBar } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    isIPhoneX = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT;
}

function getIPhoneStatusBarHeight() {
    return isIPhoneX ? 44 : 20;
}

function getAndroidStatusBarHeight(skip: boolean) {
    if (skip) {
        return 0;
    }

    return StatusBar.currentHeight;
}

export function getStatusBarHeight(skipAndroid: boolean = false) {
    return Platform.select({
        ios: getIPhoneStatusBarHeight(),
        android: getAndroidStatusBarHeight(skipAndroid),
        default: 0
    })
}
