const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        username:{
            type: String,
            min: 6,
            max: 12,
            required: true
        },
        password:{
            type: String,
            min: 6,
            max: 12,
            required: true
        },
        expenses: {
            type: String,
            data: {}
        },
        debt: {
            type: String,
            data: {}
        },
        savings: {
            type: String,
            data: {}
        }
    },
    {
        timestamps: true
    }
  );

module.exports = mongoose.model("Data", DataSchema);