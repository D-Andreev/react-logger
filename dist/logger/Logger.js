'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Console = require('./Console');

var _Console2 = _interopRequireDefault(_Console);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOG_LEVELS = {
    info: 'background: #039be5; color: white;',
    warn: 'background: #ff8a65; color: black;',
    danger: 'background: #e53935; color: white;'
};
var MEMORY_USAGE_STYLES = 'background: #43a047; color: white;';

var Logger = function () {
    _createClass(Logger, null, [{
        key: '_formatBytes',
        value: function _formatBytes(bytes) {
            var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            if (bytes == 0) return '0 Bytes';

            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var k = 1000;
            var i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
        }
    }, {
        key: '_showMemoryUsage',
        value: function _showMemoryUsage() {
            _Console2.default.log('%c Memory Usage:', MEMORY_USAGE_STYLES);
            _Console2.default.log({
                jsHeapSizeLimit: Logger._formatBytes(window.performance.memory.jsHeapSizeLimit),
                totalJSHeapSize: Logger._formatBytes(window.performance.memory.totalJSHeapSize),
                usedJSHeapSize: Logger._formatBytes(window.performance.memory.usedJSHeapSize)
            });
        }
    }]);

    function Logger() {
        _classCallCheck(this, Logger);

        this.options = _options2.default;
        this.isChrome = !!window.chrome && !!window.chrome.webstore;
        this.isIE = /*@cc_on!@*/false || !!document.documentMode;
        this.isEdge = !this.isIE && !!window.StyleMedia;
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log() {
            var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Component';
            var methodName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'method';
            var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var level = _options2.default[methodName].level;

            var styles = LOG_LEVELS[level];
            if (this.isIE || this.isEdge) {
                _Console2.default.log(componentName + ':' + methodName);
            } else {
                _Console2.default.log('%c ' + componentName + ':' + methodName, styles);
            }
            if (Object.keys(args).length) _Console2.default.log(args);
            if (methodName === 'componentDidUpdate' && this.isChrome) Logger._showMemoryUsage();
        }
    }]);

    return Logger;
}();

exports.default = Logger;