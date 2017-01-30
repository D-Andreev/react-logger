'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logger = require('./logger/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _Utils = require('./lib/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactLoggerComponent = function (_React$Component) {
    _inherits(ReactLoggerComponent, _React$Component);

    function ReactLoggerComponent(props, options) {
        _classCallCheck(this, ReactLoggerComponent);

        var _this = _possibleConstructorReturn(this, (ReactLoggerComponent.__proto__ || Object.getPrototypeOf(ReactLoggerComponent)).call(this, props));

        console.log('props', props, options);
        _this.logger = new _Logger2.default(options);
        _this.displayName = props.displayName;
        _Utils2.default.generateUniqueId();
        return _this;
    }

    _createClass(ReactLoggerComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.logger.log(this.displayName, 'componentWillMount');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.logger.log(this.displayName, 'componentDidMount');
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.logger.log(this.displayName, 'componentWillReceiveProps', { nextProps: nextProps });
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            this.logger.log(this.displayName, 'shouldComponentUpdate', { nextProps: nextProps, nextState: nextState });
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.logger.log(this.displayName, 'componentWillUpdate', { nextProps: nextProps, nextState: nextState });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.logger.log(this.displayName, 'componentDidUpdate', { prevProps: prevProps, prevState: prevState });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.logger.log(this.displayName, 'componentWillUnmount');
        }
    }]);

    return ReactLoggerComponent;
}(_react2.default.Component);

exports.default = ReactLoggerComponent;