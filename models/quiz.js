var mongoose = require("mongoose");
var QuizSchema = new mongoose.Schema({
    date:String,
    username:String,
    q1: Number,
    q2_1: Number,
    q2_2: Number,
    q3_yes: String,
    q3_no: String,
    q4_yes: String,
    q4_no: String,
    q5_yes: String,
    q5_no: String,
    q6_yes: String,
    q6_no: String,
    q7_yes: String,
    q7_no: String,
    q8_yes: String,
    q8_no: String,
    q9_yes: String,
    q9_no: String,
    q10_yes: String,
    q10_no: String,
    q11_yes: String,
    q11_no: String,
    q12_yes: String,
    q12_no: String,
    q13_yes: String,
    q13_no: String,
});
module.exports = mongoose.model('assessment', QuizSchema);