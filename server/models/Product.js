const mongoose = require('mongoose');

//Schema
//Basic build right now, will add more later.
const Schema = mongoose.Schema;
const ProductSchema = new Schema ({
    name: String,
    description : String,
    price: Number
})

//Model
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;