const passport = require('passport');

module.exports = (app) => {

    // note that the 'google' is a special name for the GoogleStrategy. Inside of the GoogleStrategy there,
    // is code that says, "Hey, I am a google strategy and I am known as 'google'". Same for both routes.
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'] // Tells google what information we want from users accout. we want their profile and email.
    }));

    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    // logout the user
    app.get('/api/logout', (req, res ) => {
        req.logout(); // logout the user
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};