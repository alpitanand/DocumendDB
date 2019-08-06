var mongoose = require('mongoose');

var UserSchema =  new mongoose.Schema({
    name:String,
    age:Number
})

var Data = new mongoose.model('Data',UserSchema);

module.exports={
    Data
}