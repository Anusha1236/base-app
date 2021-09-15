const mongoose = require("mongoose");
const student = mongoose.model(
    "Student",
    new mongoose.Schema({
        name : String,
        class:String,
        subjects:Number,
       created_on:{
           type:Date,
           default:Date.now()
       }
    })
    );

    module.exports = student;