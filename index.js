// @flow

import { Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ifIphoneX(44, 20) : 0;

export function getStatusBarHeight() {
    return STATUSBAR_HEIGHT;
}
