// @flow
import { Dimensions, Platform, StatusBar } from 'react-native';

const d = Dimensions.get('window');
const isIPhoneX = Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (d.height === 812 || d.width === 812);

export function getStatusBarHeight(skipAndroid: boolean = false) {
    if (Platform.OS === 'ios') {
        return isIPhoneX ? 44 : 20;
    }

    if (skipAndroid) {
        return 0;
    }

    return StatusBar.currentHeight;
}
