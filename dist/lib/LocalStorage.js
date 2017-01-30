'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = Symbol('singleton');
var singletonEnforcer = Symbol('singletonEnforcer');

var LocalStorage = function () {
    function LocalStorage(enforcer) {
        _classCallCheck(this, LocalStorage);

        if (enforcer != singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        this.key = 'react-logger-unique-id';
    }

    _createClass(LocalStorage, [{
        key: 'setUniqueId',
        value: function setUniqueId(id) {
            localStorage.setItem(this.key, id);
            localStorage.setItem(this.key, id);
        }
    }, {
        key: 'getUniqueId',
        value: function getUniqueId() {
            return localStorage.getItem(this.key);
        }
    }, {
        key: 'removeUniqueId',
        value: function removeUniqueId() {
            localStorage.removeItem(this.key);
        }
    }], [{
        key: 'instance',
        get: function get() {
            if (!this[singleton]) {
                this[singleton] = new LocalStorage(singletonEnforcer);
            }
            return this[singleton];
        }
    }]);

    return LocalStorage;
}();

exports.default = LocalStorage;