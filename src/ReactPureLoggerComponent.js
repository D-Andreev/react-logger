import React from 'react';
import Logger from './logger/Logger';


export default class ReactPureLoggerComponent extends React.PureComponent {

    constructor(props, options) {
        super(props);
        this.logger = new Logger(options);
        this.displayName = props.displayName;
    }

    componentWillMount() {
        this.logger.log(this.displayName, 'componentWillMount');
    }

    componentDidMount() {
        this.logger.log(this.displayName, 'componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        this.logger.log(this.displayName, 'componentWillReceiveProps', {nextProps});
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.logger.log(this.displayName, 'shouldComponentUpdate', {nextProps, nextState});
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        this.logger.log(this.displayName, 'componentWillUpdate', {nextProps, nextState});
    }

    componentDidUpdate(prevProps, prevState) {
        this.logger.log(this.displayName, 'componentDidUpdate', {prevProps, prevState});

    }

    componentWillUnmount() {
        this.logger.log(this.displayName, 'componentWillUnmount');
    }
}
