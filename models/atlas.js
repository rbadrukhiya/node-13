const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var my = new Schema({
    name:({
        type:String
    })
})
const MyModel = mongoose.model('atlas', my);
module.exports = MyModel