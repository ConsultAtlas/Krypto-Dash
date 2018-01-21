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
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            // Search for a user in the database so we do not create multiple users that are the same.
            // This is a mongo query. It is an asynchronys prosess and so we use a promise to handel it.
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if(existingUser) {
                        // we already have a record with the given googleId.
                        done(null, existingUser);
                    } else {
                        // We do not have a record of the user in the database so make a new one.
                        // create a new user in our database. .save() persists the data to the database.
                        new User({ googleId: profile.id }).save()
                            .then(user => done(null, user));
                    }
                });
        }
    )
);