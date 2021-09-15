const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.student = require('./student.model');

module.exports = db;