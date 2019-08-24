const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// User Model
const User = require('../models/user')

module.exports = function(passport) {
    passport.use(
        new localStrategy({usernameField: 'email'}, (email, password, done) => {
            User.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    // loginStatus.push({success: false, msg: 'No User Found. Please Try Again.'})
                    return done(false, false, {message: 'User not found.'})
                }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err

                    if (isMatch) {
                        // loginStatus.push({success: true, msg:'Login Successful'})
                        console.log('userFound')
                        // return loginStatus
                        return done(null, user)
                    }else {
                        // loginStatus.push({success: false, msg:'Password Does Not Match.'})
                        // console.log(isMatch)
                        // return loginStatus
                        return done(false, false, {message: 'Password incorrect.'})
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