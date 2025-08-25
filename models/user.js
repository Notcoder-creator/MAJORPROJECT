const mongoose = require("mongoose");
const passport = require("passport");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
userSchema.plugin(passportLocalMongoose);

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true
    // }
});


module.exports = mongoose.model('User', userSchema);




