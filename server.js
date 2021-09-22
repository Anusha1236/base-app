const express = require("express");
const mongoose = require("mongoose");
const db = require("./app/config/db.config");
const PORT=3000;
const app =express();
 app.use(express.json());


 mongoose.connect(`mongodb://${db.HOST}:${db.PORT}/${db.DB}`).then(()=>{
     console.log("mongodb connected");
 }).catch((err)=>{
     console.log(err);
 });

//to avoid console logs

// console.log = function() {}

 app.listen(PORT,()=>{
     console.log(`server running on port ${PORT}`);
 })

 require('./app/routes/student.route')(app)
