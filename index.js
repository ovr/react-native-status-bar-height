// @flow

import { Platform, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export function getStatusBarHeight(skipAndroid: boolean = false) {
    if (Platform.OS === 'ios') {
        return ifIphoneX(44, 20);
    }

    if (skipAndroid) {
        return 0;
    }

    return StatusBar.currentHeight;
}
