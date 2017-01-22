import Logger from './logger/Logger';
import React from 'react';


export let LoggerHOC = ComposedComponent => class extends React.Component {

    static displayName = 'LoggerHOC';
    static logger = new Logger();

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name);
    }

    componentWillReceiveProps(nextProps) {
        let args = [this.props, this.state, nextProps];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
    }

    shouldComponentUpdate(nextProps, nextState) {
        let args = [this.props, this.state, nextProps, nextState];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
    }

    componentDidUpdate(prevProps, prevState) {
        let args = [this.props, this.state, prevProps, prevState];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
    }

    setState(nextState) {
        let args = [this.props, this.state, nextState];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
    }

    forceUpdate() {
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name);
    }

    render() {
        let args = [this.props, this.state];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
        return <ComposedComponent {...this.props} {...this.state} />;
    }

    componentDidMount() {
        let args = [this.props, this.state];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
    }

    componentWillUnmount() {
        let args = [this.props, this.state];
        LoggerHOC.logger.log(LoggerHOC.displayName, arguments.callee.name, args);
    }
};
