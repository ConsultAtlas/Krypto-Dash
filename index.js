const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// Connect MongoDB database to our app.
mongoose.connect(keys.mongoURI);

const app = express();

// Create our cookie session.
app.use(cookieSession( {
    maxAge: 30 * 24 * 60 * 60 * 1000, // we want this cookie to last for 30 days but it has to be in milliseconds.
    keys: [keys.cookieKey] // key to encrypt our cookie so someone else cant insert their own mallicous info.
    })
);

// Tells passport to use cookies to manage our authentication.
app.use(passport.initialize());
app.use(passport.session());

// requires a function in authRoutes and immediatly calls that function with the app object.
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);