import LocalStorage from './LocalStorage';
let singleton = Symbol('singleton');
let singletonEnforcer = Symbol('singletonEnforcer');


export default class Utils {

    constructor(enforcer) {
        if(enforcer != singletonEnforcer) {
            throw new Error('Cannot construct singleton');
        }
    }

    static get instance() {
        if(!this[singleton]) {
            this[singleton] = new LocalStorage(singletonEnforcer);
        }
        return this[singleton];
    }

    static _s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    static generateUniqueId() {
        let id = Utils._s4() + Utils._s4() + '-' + Utils._s4() + '-' + Utils._s4() + '-' +
            Utils._s4() + '-' + Utils._s4() + Utils._s4() + Utils._s4();
        LocalStorage.instance.setUniqueId(id);
    }
}

