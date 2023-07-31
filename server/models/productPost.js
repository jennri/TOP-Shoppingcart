const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ProductPostSchema = new Schema ({
    name: String,
    description : String,
    price: Number
})

//Model
const ProductPost = mongoose.model('ProductPost', ProductPostSchema);

module.exports = ProductPost;