const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


// google Client ID: 743189046153-sotf6ppbpok13saqco16ep8b9douncte.apps.googleusercontent.com
// client secret: R_GLtTayv1ZZAKGOD0rjnsFx
// initiates a new instance of GoogleStratey. Tells passport we want to authenticate with google.
passport.deserializeUser(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);