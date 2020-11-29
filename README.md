# Unlimited Sockets

### How to
----
1. `npm install unlimited-sockets`
2. inlcude the file to your project as `import UnlimitedSockets from 'unlimited-sockets'` or `const UnlimitedSockets = require('unlimited-sockets')`
3. initalize the package as `UnlimitedSockets.create(<connectior>, <handshake>)`

#### `<connector>`
----
The node js server instance
```
const server = http.createServer(app)
const socket = require('socket.io')(server, {
    transports: ['websocket',  'polling']
});
UnlimitedSockets.create(socket)
```

#### `<handshake>`
----
The callback function for the hanshake
```
const handshake = (socket, next) => { /* ... */ }
const server = http.createServer(app)
const socket = require('socket.io')(server, {
    transports: ['websocket',  'polling']
});
UnlimitedSockets.create(socket, server)
```