# React Logger

Logger for react lifecycle methods.

# Installation

``npm i react-logger``

# Examples
To run the example app:
   - Clone the repo.
   - npm install
   - open `example/index.html`

React Logger exports two abstractions for `React.Component` and `React.PureComponent`.
```js
import React from 'react';
import {ReactLoggerComponent} from 'react-logger';


export default class App extends ReactLoggerComponent {

    constructor(props) {
        super(props);
        this.displayName = 'MyApp';
    }

    render() {
        return <div>MyApp</div>
    }
}
```

When you need to have a lifecycle method in a component **you must call the parent function in order to see the log for it**.
All other lifecycle methods which are not defined in the `App` component will be logged.
```js
import React from 'react';
import {ReactLoggerComponent} from 'react-logger';


export default class App extends ReactLoggerComponent {

    constructor(props) {
        super(props);
        this.displayName = 'MyApp';
    }
    
    componentWillUpdate(nextProps, nextState) {
        super.componentWillUpdate(nextProps, nextState);
    }

    render() {
        return <div>MyApp</div>
    }
}
```

Pure components can also be inherited.
```js
import React from 'react';
import {ReactPureLoggerComponent} from 'react-logger';


export default class App extends ReactPureLoggerComponent {

    constructor(props) {
        super(props);
        this.displayName = 'MyApp';
    }

    render() {
        return <div>MyApp</div>
    }
}
```
