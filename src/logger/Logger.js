import Console from './Console';
import options from './options';

const LOG_LEVELS = {
    info: 'background: #039be5; color: white;',
    warn: 'background: #ff8a65; color: black;',
    danger: 'background: #e53935; color: white;'
};
const MEMORY_USAGE_STYLES = 'background: #43a047; color: white;';


export default class Logger {

    static _formatBytes(bytes, decimals = 2) {
        if(bytes == 0) return '0 Bytes';

        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let k = 1000;
        let i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
    }

    static _showMemoryUsage() {
        Console.log(`%c Memory Usage:`, MEMORY_USAGE_STYLES);
        Console.log({
            jsHeapSizeLimit: Logger._formatBytes(window.performance.memory.jsHeapSizeLimit),
            totalJSHeapSize: Logger._formatBytes(window.performance.memory.totalJSHeapSize),
            usedJSHeapSize: Logger._formatBytes(window.performance.memory.usedJSHeapSize)
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
