'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LocalStorage = require('./LocalStorage');

var _LocalStorage2 = _interopRequireDefault(_LocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = Symbol('singleton');
var singletonEnforcer = Symbol('singletonEnforcer');

var Utils = function () {
    function Utils(enforcer) {
        _classCallCheck(this, Utils);

        if (enforcer != singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }
    }

    _createClass(Utils, null, [{
        key: '_s4',
        value: function _s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
    }, {
        key: 'generateUniqueId',
        value: function generateUniqueId() {
            var id = Utils._s4() + Utils._s4() + '-' + Utils._s4() + '-' + Utils._s4() + '-' + Utils._s4() + '-' + Utils._s4() + Utils._s4() + Utils._s4();
            _LocalStorage2.default.instance.setUniqueId(id);
        }
    }, {
        key: 'instance',
        get: function get() {
            if (!this[singleton]) {
                this[singleton] = new _LocalStorage2.default(singletonEnforcer);
            }
            return this[singleton];
        }
    }]);

    return Utils;
}();

exports.default = Utils;