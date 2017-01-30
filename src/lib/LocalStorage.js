let singleton = Symbol('singleton');
let singletonEnforcer = Symbol('singletonEnforcer');


export default class LocalStorage {

    constructor(enforcer) {
        if(enforcer != singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }

        this.key = 'react-logger-unique-id';
    }

    static get instance() {
        if(!this[singleton]) {
            this[singleton] = new LocalStorage(singletonEnforcer);
        }
        return this[singleton];
    }

    setUniqueId(id) {
        localStorage.setItem(this.key, id);
        localStorage.setItem(this.key, id);
    }

    getUniqueId() {
        return localStorage.getItem(this.key);
    }

    removeUniqueId() {
        localStorage.removeItem(this.key);
    }
}
