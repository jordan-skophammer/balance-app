const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expensesSchema = new Schema(
    {
        label:{
            type: String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        }
    }    
,{collection: "Expenses"});

module.exports = mongoose.model("Data", expensesSchema);