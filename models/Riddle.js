const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Created Schema
const RiddleSchema = new Schema({
    a:{
        type:String,

    },
    b:{
        type:String,

    },
    c:{
        type:String,
    }
});

module.exports = Riddle = mongoose.model('riddles', RiddleSchema);