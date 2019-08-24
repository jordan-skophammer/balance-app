const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// User Model
const user = require('../models/user')

module.exports = function(passport) {
    passport.use(
        new localStrategy({usernameField: 'email'}, (email, password, done) => {
            user.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, {message: 'User not found.'})
                }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err

                    if (isMatch) {
                        return done(null, user)
                    }else {
                        return done(null, false, {message: 'Password incorrect.'})
                    }
                })
            })
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
    
    passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) =>{
        done(err, user);
    });
    });
}