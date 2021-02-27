const UnlimitedSockets = require('../src/unlimited-sockets.min');

exports.sockets = (function () {
    return new UnlimitedSockets()
})()