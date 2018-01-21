// Keys.js - decid if your in a production or dev environment.
if (process.env.NODE_ENV === 'production') {
    // we are in production - return the production set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the development keys
    module.exports = require('./dev');  // pull in the dev keys and immediately pass to whoever is asking for them (module.export).
}