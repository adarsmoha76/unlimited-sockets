# Unlimited Sockets

### How to
----
```
npm i unlimited-sockets -S
import UnlimitedSockets from 'unlimited-sockets' // can also use `const UnlimitedSockets = require('unlimited-sockets')`
UnlimitedSockets.sockets.create(<connectior>, <handshake>)
```

#### `<connector>`
----
The node js server instance
```
const server = http.createServer(app)
const socket = require('socket.io')(server, {
    transports: ['websocket',  'polling']
});
UnlimitedSockets.sockets.create(socket)
```

#### `<handshake>` Optional
----
The callback function for the hanshake.
More details about the handshake function is available from the [socket.io](https://socket.io/docs/v3/server-api/index.html#namespace-use-fn)
```
const handshake = (socket, next) => { /* ... */ }
const server = http.createServer(app)
const socket = require('socket.io')(server, {
    transports: ['websocket',  'polling']
});
UnlimitedSockets.sockets.create(socket, server)
```


### `<emit data>`
----
To emit the data thorough the channels
```
UnlimitedSockets.sockets.emit(namespace: string, channel: string, data: any)
```
