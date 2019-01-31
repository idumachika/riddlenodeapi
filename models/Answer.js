const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Created Answer Schema
const AnswerSchema = new Schema({
    answer:{
        type:String,

    },
    
});

module.exports = Answer = mongoose.model('answer', AnswerSchema);