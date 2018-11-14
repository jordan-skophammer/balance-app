'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var centerItem = {
    textAlign: 'center'
};

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Grid2.default,
                { container: true, style: centerItem, direction: 'row', justify: 'space-between', alignItems: 'center', spacing: 16 },
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 2 },
                    _react2.default.createElement(
                        _Icon2.default,
                        null,
                        'home'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 6 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Balance'
                        )
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 2 },
                    _react2.default.createElement(
                        _Icon2.default,
                        null,
                        'perm_identity'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 12 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        'Chart'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 12 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        'Expenses'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 12 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        'Budget'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 12 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        'Savings'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 12 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        'Debt'
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, xs: 12 },
                    _react2.default.createElement(
                        _Paper2.default,
                        null,
                        'Assets'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;