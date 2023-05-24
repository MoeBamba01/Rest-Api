const mongoose = require('mongoose')

//Creating User Schema
var userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

//Export Schema
const User = mongoose.model('User', userSchema);
module.exports = User