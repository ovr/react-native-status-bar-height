"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var index_1 = require("./index");
function withStatusBarHeight(WrappedComponent, skipAndroid) {
    if (skipAndroid === void 0) { skipAndroid = false; }
    return /** @class */ (function (_super) {
        __extends(WithStatusBarHoC, _super);
        function WithStatusBarHoC() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                statusBarHeight: index_1.getStatusBarHeight(skipAndroid)
            };
            _this.orientationDidChange = function (_a) {
                var window = _a.window, screen = _a.screen;
                _this.setState({
                    statusBarHeight: index_1.getStatusBarHeight(skipAndroid)
                });
            };
            return _this;
        }
        WithStatusBarHoC.prototype.componentDidMount = function () {
            react_native_1.Dimensions.addEventListener('change', this.orientationDidChange.bind);
        };
        WithStatusBarHoC.prototype.componentWillUnmount = function () {
            react_native_1.Dimensions.removeEventListener('change', this.orientationDidChange);
        };
        WithStatusBarHoC.prototype.render = function () {
            return (<WrappedComponent statusBarHeight={this.state.statusBarHeight} {...this.props}/>);
        };
        return WithStatusBarHoC;
    }(react_1["default"].PureComponent));
}
exports.withStatusBarHeight = withStatusBarHeight;
//# sourceMappingURL=withStatusBar.js.map