import superagent from 'superagent';


export default class HttpClient {

    constructor(options = {url: ''}) {
        this.options = options;
    }

    get(action, options) {
        let request = superagent.get(`${this.options.url}${options.url}`);
        if (options.query) {
            request = request.query(options.query);
        }

        return this._execute(action, request);
    }

    post(action, options) {
        let request = superagent.post(`${this.options.url}${options.url}`);
        if (options.data) {
            request = request.send(options.data);
        }

        return this._execute(action, request);
    }

    _execute(action, request) {
        return new Promise((resolve, reject) => {
            request.end((err, res) => {
                if (err) return reject(err);
                return resolve(res);
            });
        });
    }
}
