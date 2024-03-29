const passport = require('passport')
const BearerStrategy = require('passport-http-bearer').Strategy
const jwt = require('jsonwebtoken');
const Auth = require('../models/auth')

passport.use(new BearerStrategy(
    (token, done) => {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        Auth.findById(decodedData.userId, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));