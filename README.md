# react-native-status-bar-height

> Small library that helps you to get status bar height

P.S :iphone:X supported :heart:

## Install

```bash
$ npm install --save react-native-status-bar-height
# OR
$ yarn add react-native-status-bar-height
```

## Usage of withStatusBarHeight HoC

If you application support both orientations (portrait and landscape), it's heightly recommend to use
HoC to detect orientation;

```typescript
import { Text } from 'react-native';
import { withStatusBarHeight } from 'react-native-status-bar-height';

type Props = WithStatusBarProps & {};

export class MySuperScreenComponent extends React.PureComponent {
    render() {
        return (
            <Text>{this.props.statusBarHeight}</Text>
        )
    }
}

export const MySuperScreen = withStatusBarHeight(MySuperScreenComponent, false);
```

## Direct usage getStatusBarHeight(skipAndroid: boolean = false)

```typescript
import { getStatusBarHeight } from 'react-native-status-bar-height';

// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)
console.log(getStatusBarHeight());

// will be 0 on Android, because You pass true to skipAndroid
console.log(getStatusBarHeight(true));
```

## License

This project is open-sourced software licensed under the MIT License.

See the [LICENSE](LICENSE) file for more information.
