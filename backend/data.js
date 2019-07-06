const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expensesSchema = new Schema(
    {   
        id: {
            type:String
        },
        label:{
            type: String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }    
,{collection: "Expenses"});

module.exports = mongoose.model("Data", expensesSchema);