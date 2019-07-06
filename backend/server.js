const mongoose = require('mongoose');
const express = require('express');
const Data = require('./data');
var cors = require('cors');
const bodyParser = require('body-parser');



const API_PORT = 3001;
const app = express();
app.use(cors())
const router = express.Router();

const dbRoute = 'mongodb://localhost/BalanceDB';
mongoose.connect(dbRoute,{ useNewUrlParser: true });
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
    console.log(req.body)
    const _id = req.body.id
    const update = req.body.update
    // const { id, update } = req.body;
    Data.findByIdAndUpdate(_id, update, err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete("/deleteData", (req, res) => {
    const { username } = req.body;
    Data.findOneAndDelete(username, err => {
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

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));