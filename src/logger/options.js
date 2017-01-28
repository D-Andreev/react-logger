export default {
    componentWillMount: {
        level: 'info',
        props: [],
        disabled: false
    },
    componentDidMount: {
        level: 'info',
        props: [],
        disabled: false
    },
    componentWillReceiveProps: {
        level: 'warn',
        props: ['nextProps'],
        disabled: false
    },
    shouldComponentUpdate: {
        level: 'warn',
        props: ['nextProps', 'nextState'],
        disabled: false
    },
    componentWillUpdate: {
        level: 'danger',
        props: ['nextProps', 'nextState'],
        disabled: false
    },
    componentDidUpdate: {
        level: 'info',
        props: ['prevProps', 'prevState'],
        disabled: false
    },
    componentWillUnmount: {
        level: 'info',
        props: [],
        disabled: false
    }
};
