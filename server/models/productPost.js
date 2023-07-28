const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ProductPostSchema = new Schema ({
    product_name: String,
    product_description: String,
    product_price: Number
})

//Model
const ProductPost = mongoose.model('ProductPost', ProductPostSchema);

module.exports = ProductPost;