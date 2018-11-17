const mongoose = require('mongoose');
const express = require('express');
const Data = require('./schema');


const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = 'mongodb://heroku_td1l549h:tjd4tonermg60sp19ci8uuoajf@ds163156.mlab.com:63156/heroku_td1l549h';
let db = mongoose.connection;

mongoose.connect(dbRoute,{ useNewUrlParser: true });
db.once("open", () => console.log("connected to the database"));

router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post("/updateData", (req, res) => {
    const { username, update } = req.body;
    Data.findOneAndUpdate(username, update, err => {
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

// router.post("/putData", (req, res) => {
//     let data = new Data();

//     const { username, message } = req.body;

//     if ((!username && username !== 0) || !message) {
//         return res.json({
//         success: false,
//         error: "INVALID INPUTS"
//         });
//     }
//     data.message = message;
//     data.id = username;
//     data.save(err => {
//         if (err) return res.json({ success: false, error: err });
//         return res.json({ success: true });
//     });
// });

app.use("/api", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));