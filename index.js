// @flow

import { Platform, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ifIphoneX(44, 20) : StatusBar.currentHeight;

export function getStatusBarHeight() {
    return STATUSBAR_HEIGHT;
}
