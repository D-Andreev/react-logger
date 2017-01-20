import * as merge from 'lodash.merge';
import * as DEFAULT_OPTIONS from './options';
import Console from './Console';

const METHOD_SEPARATOR = '=';
const ROW_SEPARATOR = '-';
const ROW_LENGTH = 20;
// TODO: Rewrite this
const LOG_LEVELS = {
    info: {textColor: 'cyan', backgroundColor: 'bgWhite', styles: 'italic'},
    warn: {textColor: 'green', backgroundColor: 'bgWhite', styles: 'underline'},
    danger: {textColor: 'red', backgroundColor: 'bgWhite', styles: 'bold'}
};


class Logger {

    static _setColors(str, {textColor, backgroundColor, styles}) {
        // TODO: Rewrite this
        return str[textColor][backgroundColor][styles];
    }

    static _showMemoryUsage() {
        // TODO: Implement
    }

    constructor(options = {}) {
        this.options = merge(options, DEFAULT_OPTIONS);
        this.methodSeparator = METHOD_SEPARATOR.repeat(ROW_LENGTH);
        this.rowSeparator = ROW_SEPARATOR.repeat(ROW_LENGTH);
    }

    log(componentName = 'Component', methodName = 'method', args = []) {
        const opts = this.options[methodName];
        if (!opts || opts.disabled) return;

        Console.log(`${this.methodSeparator}`);
        Console.log(`${componentName}:${methodName}`);
        for (let i = 0; i < opts.props.length; i++) {
            Console.log(`${currentProp}`, args[i]);
            Console.log(`${this.rowSeparator}`);
        }
        Logger._showMemoryUsage();
        Console.log(`${this.methodSeparator}`);
    }
}

export default Logger;
