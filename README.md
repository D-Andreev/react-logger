# React Logger

Logger for react lifecycle methods.

# Installation

``npm install react-logger``

# Examples
<img width="944" alt="untitled" src="https://cloud.githubusercontent.com/assets/4354425/22400523/4b2090d4-e5c0-11e6-94e1-3d513420e764.png">

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
        // your code
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

To run the example app:
   - Clone the repo.
   - npm install
   - npm run build:example
   - Open `example/index.html`.
