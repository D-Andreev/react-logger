'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpClient = function () {
    function HttpClient(options) {
        _classCallCheck(this, HttpClient);

        this.options = options;
    }

    _createClass(HttpClient, [{
        key: 'get',
        value: function get(action, options) {
            var request = _superagent2.default.get('' + this.options.url + options.url);
            if (options.query) {
                request = request.query(options.query);
            }

            return this._execute(action, request);
        }
    }, {
        key: 'post',
        value: function post(action, options) {
            var request = _superagent2.default.post('' + this.options.url + options.url);
            if (options.data) {
                request = request.send(options.data);
            }

            return this._execute(action, request);
        }
    }, {
        key: '_execute',
        value: function _execute(action, request) {
            return new Promise(function (resolve, reject) {
                request.end(function (err, res) {
                    if (err) return reject(err);
                    return resolve(res);
                });
            });
        }
    }]);

    return HttpClient;
}();

exports.default = HttpClient;