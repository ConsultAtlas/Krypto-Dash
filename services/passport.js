const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); // user.id is the id of the user in our mongo model instance (database).
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        }); 
});

// initiates a new instance of GoogleStratey. Tells passport we want to authenticate with google.
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, 
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });
            
            if (existingUser) {
                // We already have a given record with the user ID
                return done(null, existingUser); // tells passport that we are done, that we have no error msg and then had off the existingUser.
            } 
            // we do not have a user record with this ID, make a new record
            const user = await new User({ googleId: profile.id }).save(); // creates a mongo model instance and then persists it to the database.
            done(null, user);
        }
    )
);