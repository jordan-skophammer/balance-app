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

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));