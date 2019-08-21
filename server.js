const mongoose = require('mongoose')
const express = require('express')
const Data = require('./models/data')
const User = require('./models/user')
var cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
// const herokuProxy = require('heroku-proxy')
require('dotenv').config()

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
    const {name, email, password} = req.body
    let errors = []

    user.name = name
    user.email = email
    user.password = password

    User.findOne({email: email}).then(user => {
        if (user) {
            errors.push({msg: 'User already exists. Please create new account or login.'})
            return res.json({success: false, error: errors})
        } else {
            user.save(err => {
                if(err) return req.json({success: false, error: err})
                return res.json({ success: true})
            })
        }
    })
})
 
app.use('/api/', router)
// app.use(herokuProxy())

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))