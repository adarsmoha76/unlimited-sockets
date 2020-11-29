/**
 * Create socket listener and connections
 */
class UnlimitedSockets {

    constructor () {
        
        // the io connector
        this._connector = null

        // the connection variable that holds all the namespaces
        this._connection = null
        
        // the prefix for namespaces
        this._prefix = 'usoc'

        // the prefix for channels
        this._suffix = 'sock'

    }

    /**
     * To create an instance of the UnlimitedSockets
     * @param {*} io The socket io connection
     * @param {function} use Function to perform the handshakes
     * @returns UnlimitedSockets
     */
    create (io, use) {
        
        this._connector = io
        this._connection = io.of(new RegExp(`^/${this._prefix}-`))
        if (use) this._connection.use(use)
        this._connection.on('connect', socket => {
            socket.nsp.emit('welcome', 'Welcome to socket connection')
        })
        this._connection.on('error', socket => {
            socket.emit('error', 'something bad happened')
        })
        return this

    }
    
    /**
     * To emit the data to specific namespace and channel
     * @param {string} namespace The namespace to use
     * @param {string} channel The channel within the namespace
     * @param {*} data any data that needs to be emitted
     */
    emitter (namespace, channel, data) {
        
        return this._connector.of(`${this._prefix}-${this._suffix}:${namespace}`)
            .emit(channel, data)

    }

}

module.exports = UnlimitedSockets