const mongoose = require('mongoose');
const fmSchema = new mongoose.Schema({
    image: String,
    title: String,
    desc: String,
    price: String
});

module.exports = mongoose.model('Food', fmSchema);