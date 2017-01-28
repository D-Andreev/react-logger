import React from 'react';
import {ReactLoggerComponent} from '../../index';
import Counter from './components/Counter';
import Time from './components/Time';


export default class App extends ReactLoggerComponent {

    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {counter: 0};
    }

    componentWillUpdate(nextProps, nextState) {
        super.componentWillUpdate(nextProps, nextState);
    }

    render() {
        return <div className="app mdl-layout__container">
            <Counter counter={this.state.counter} />
            <button
                className="waves-effect waves-light btn"
                onClick={this._onClick.bind(this)}
            >Click</button>
            <Time />
        </div>
    }

    _onClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}
