const mongoose = require('mongoose');
const express = require('express');
const Data = require('./data');
var cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
// const proxy = require('http-proxy-middleware')

require('dotenv').config()



const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())
const router = express.Router();


// app.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === 'production') {
    // app.use(express.static('client/build'));
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname + '/client/build/index.html'))
    // })
    app.use('/', express.static(path.join(__dirname, 'client/build')))
}

var MONGODB_URI = process.env.ATLAS_DB_CONN;
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
// mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true });

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"))

mongoose.set('useFindAndModify', false)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/getData", (req, res) => {

    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: data})
    });
    
});

router.post("/updateData", (req, res) => {
    const _id = req.body.id
    const update = req.body.update
    Data.findByIdAndUpdate(_id, update, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete("/deleteData", (req, res) => {
    const _id = req.body.id;

    Data.findByIdAndDelete(_id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

router.post("/putData", (req, res) => {
    let data = new Data();
    const {label, amount, color} = req.body;

    data.label = label;
    data.amount = amount
    data.color = color
    data.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// var apiProxy = proxy('/api', {
//     target: 'https://whispering-shelf-92626.herokuapp.com/'
// })
app.use("/api/", router);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));