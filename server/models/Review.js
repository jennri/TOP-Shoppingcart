const mongoose = require('mongoose');

//Schema for product reviews
const Schema = mongoose.Schema;
const ReviewSchema = new Schema ({
    productId: { type: mongoose.Schema.Types.ObjectId},
    name: String,
    email: String,
    rating : String,
    title : String,
    description : String,
    skinType: {
        type: String,
        enum: ['Dry', 'Oily', 'Combination', 'Normal'], 
      },
    recommend : Boolean

})

//Model
const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;