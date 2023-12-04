const mongoose = require('mongoose');
const dmSchema = new mongoose.Schema({
    image: String,
    title: String,
    desc: String,
    price: String
});

module.exports = mongoose.model('Drink', dmSchema);