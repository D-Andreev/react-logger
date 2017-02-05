import React from 'react';
import {ReactLoggerComponent} from '../../../index';
import options from '../options';


export default class Counter extends ReactLoggerComponent {

    constructor(props) {
        super(props, options);
        this.displayName = 'Counter';
    }
    componentWillUpdate(nextProps, nextState) {
        super.componentWillUpdate(nextProps, nextState);
    }

    render() {
        return <div className="counter">{this.props.counter}</div>
    }
}
