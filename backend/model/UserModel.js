const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
});
module.exports = mongoose.model("Users", UserSchema);