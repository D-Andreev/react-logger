import React from 'react';
import {ReactLoggerComponent} from '../../../index';
import options from '../options';


export default class Time extends ReactLoggerComponent {

    constructor(props) {
        super(props, options);
        this.displayName = 'Time';
        this.state = {currentCount: 0};
    }

    componentDidMount() {
        super.componentDidMount();
        let intervalId = setInterval(this.timer.bind(this), 10000);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        clearInterval(this.state.intervalId);
    }

    timer() {
        this.setState({ currentCount: this.state.currentCount + 10});
    }

    render() {
        return (
            <div className="time">{this.state.currentCount}</div>
        );
    }
}
