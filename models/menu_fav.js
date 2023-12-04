const mongoose = require('mongoose');
const mfSchema = new mongoose.Schema({
    image: String,
    title: String,
    desc: String,
    price: String
});

module.exports = mongoose.model('Favorite', mfSchema);