import Console from './Console';
import options from './options';

const LOG_LEVELS = {
    info: 'background: #039be5; color: white;',
    warn: 'background: #ff8a65; color: black;',
    danger: 'background: #e53935; color: white;'
};
const MEMORY_USAGE_STYLES = 'background: #43a047; color: white;';


export default class Logger {

    static _convertBToMB(bytes) {
        return bytes / 1000000;
    }

    static _showMemoryUsage() {
        Console.log(`%c Memory Usage:`, MEMORY_USAGE_STYLES);
        Console.log({
            jsHeapSizeLimit: Logger._convertBToMB(window.performance.memory.jsHeapSizeLimit) + ' MB',
            totalJSHeapSize: Logger._convertBToMB(window.performance.memory.totalJSHeapSize) + ' MB',
            usedJSHeapSize: Logger._convertBToMB(window.performance.memory.usedJSHeapSize) + ' MB'
        });
    }

    constructor() {
        this.options = options;
    }

    log(componentName = 'Component', methodName = 'method', args = {}) {
        let {level} = options[methodName];
        let styles = LOG_LEVELS[level];
        Console.log(`%c ${componentName}:${methodName}`, styles);
        if (Object.keys(args).length) Console.log(args);
        if (methodName === 'componentDidUpdate') Logger._showMemoryUsage();
    }
}
