const mongoose = require('mongoose');

//Schema
//Basic build right now, will add more later.
const Schema = mongoose.Schema;
const ProductSchema = new Schema ({
    brand: String,
    name: String,
    price: Number,
    description : String,
    madein : String,
    ingredients : String,
    directions : String
    
})

//Model
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;