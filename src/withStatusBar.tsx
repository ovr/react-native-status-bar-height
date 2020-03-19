import React from "react";
import {Dimensions, ScaledSize, StatusBar} from 'react-native';
import {getStatusBarHeight} from "./index";

type State = {
    statusBarHeight: number,
};

export type WithStatusBarProps = {
    statusBarHeight: number,
};

export function withStatusBarHeight<T extends object>(
    WrappedComponent: React.ComponentType<T & WithStatusBarProps>,
    skipAndroid: boolean = false
) {
    return class WithStatusBarHoC extends React.PureComponent<T, State> {
        public readonly state: State = {
            statusBarHeight: getStatusBarHeight(skipAndroid),
        };

        componentDidMount()
        {
            Dimensions.addEventListener('change', this.orientationDidChange.bind);
        }

        componentWillUnmount(): void {
            Dimensions.removeEventListener('change', this.orientationDidChange);
        }

        orientationDidChange = ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
            this.setState({
                statusBarHeight: getStatusBarHeight(skipAndroid)
            })
        };

        render() {
            return (
                <WrappedComponent statusBarHeight={this.state.statusBarHeight} {...this.props} />
            )
        }
    }
}
