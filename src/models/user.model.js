const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String, 
    hash: String, 
    salt: String,
})


module.exports = mongoose.model("User", userSchema);