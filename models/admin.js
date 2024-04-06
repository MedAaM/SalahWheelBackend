const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    }
});

const admin = mongoose.model('admin', adminSchema);
module.exports = admin;