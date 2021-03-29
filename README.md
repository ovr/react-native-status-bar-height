# react-native-status-bar-height

> Small library that helps you to get status bar height

P.S: Monobrow iPhone devices supported :heart: 📱

## Install

```bash
$ npm install --save-exact react-native-status-bar-height
# OR
$ yarn add react-native-status-bar-height
```

## Usage getStatusBarHeight(skip: boolean = false)

```js
import { getStatusBarHeight } from 'react-native-status-bar-height';

// X - on iOS Monobrow devices (runtime value)
// 30 - if skipped SafeArea on iOS Monobrow device
// 20 - default iOS Value (Non-Monobrow devices)
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)
console.log(getStatusBarHeight());

// will be 0 on Android, because You pass true to skip
// will skip SafeAreaView on iOS, because You pass true to skip
console.log(getStatusBarHeight(true));
```

## License

This project is open-sourced software licensed under the MIT License.

See the [LICENSE](LICENSE) file for more information.
