const mongoose = require('mongoose')
const passport = require('passport')
const express = require('express')
const Data = require('./models/data')
const User = require('./models/user')
var cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const bcrypt = require('bcryptjs')
require('dotenv').config()
require('./config/passport')(passport)

const PORT = process.env.PORT || 3001
const app = express()
const router = express.Router()

app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client/build')))
}

var MONGODB_URI = process.env.MONGODB_URI || process.env.MLAB_CONN;
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

let db = mongoose.connection
db.once("open", () => console.log("connected to the database"))
db.on("error", console.error.bind(console, "MongoDB connection error:"))

mongoose.set('useFindAndModify', false)

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: data})
    })
})

router.post("/updateData", (req, res) => {
    const _id = req.body.id
    const update = req.body.update
    Data.findByIdAndUpdate(_id, update, err => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true })
    })
});

router.delete("/deleteData", (req, res) => {
    const _id = req.body.id

    Data.findByIdAndDelete(_id, err => {
        if (err) return res.send(err)
        return res.json({ success: true })
    })
})

router.post('/putData', (req, res) => {
    let data = new Data()
    const {label, amount, color} = req.body

    data.label = label
    data.amount = amount
    data.color = color
    data.save(err => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true })
    })
})

router.post('/newUser', (req, res) => {
    let user = new User()
    const {name, email, password, password2} = req.body
    let errors = []

    user.name = name
    user.email = email
    user.password = password

    if (!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill required fields'})
        return res.json({success: false, error: errors})
    }

    if (password !== password2) {
        errors.push({msg: 'Passwords do not match! Please try again.'})
        return res.json({success: false, error: errors})
    }

    User.findOne({email: email}).then(user => {
        if (user) {
            errors.push({msg: 'User already exists. Please create new account or login.'})
            return res.json({success: false, error: errors})
        }else {
            saveUser()
        }
    })

    function saveUser () {
// Encrypt Password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err

                user.password = hash
// Save New User
                user.save(err => {
                    if(err) return req.json({success: false, error: err})
                    return res.json({ success: true})
                })
            })  
        })
    }
})

// Login
router.post('/login', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    })(req, res, next)
  })
  
// Logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
})
 
app.use('/api/', router)

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))