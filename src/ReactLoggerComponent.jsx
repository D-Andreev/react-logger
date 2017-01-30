import React from 'react';
import Logger from './logger/Logger';
import Utils from './lib/Utils';


export default class ReactLoggerComponent extends React.Component {

    constructor(props, options) {
        super(props);
        console.log('props', props, options);
        this.logger = new Logger(options);
        this.displayName = props.displayName;
        Utils.generateUniqueId();
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
