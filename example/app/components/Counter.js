import React from 'react';
import {ReactLoggerComponent} from '../../../index';


export default class Counter extends ReactLoggerComponent {

    constructor(props) {
        super(props);
        this.displayName = 'Counter';
    }
    componentWillUpdate(nextProps, nextState) {
        super.componentWillUpdate(nextProps, nextState);
    }

    render() {
        return <div className="counter">{this.props.counter}</div>
    }
}
