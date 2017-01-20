class Console {
    static log() {
        // eslint-disable-next-line no-console
        console.log.apply(this, arguments);
    }
}

export default Console;
