export default {
    componentWillMount: {
        level: 'info',
        props: ['props', 'state'],
        disabled: false
    },
    componentDidMount: {
        level: 'info',
        props: ['props', 'state'],
        disabled: false
    },
    componentWillReceiveProps: {
        level: 'warn',
        props: ['props', 'state', 'nextProps'],
        disabled: false
    },
    shouldComponentUpdate: {
        level: 'warn',
        props: ['props', 'state', 'nextProps', 'nextState'],
        disabled: false
    },
    componentWillUpdate: {
        level: 'danger',
        props: ['props', 'state', 'nextProps', 'nextState'],
        disabled: false
    },
    componentDidUpdate: {
        level: 'danger',
        props: ['props', 'state', 'prevProps', 'prevState'],
        disabled: false
    },
    componentWillUnmount: {
        level: 'info',
        props: ['props', 'state'],
        disabled: false
    },
    setState: {
        level: 'danger',
        props: ['props', 'state', 'nextState'],
        disabled: false
    }
}
