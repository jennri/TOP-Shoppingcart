const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const Review = require('../models/Review')
const controller = require("../controller")

router.get('/message', (req, res) => {
    res.json({ message: "Hello from the backend" });
});

// This section will help you get a list of all the products.
router.get('/productList', controller.getAllProducts);
router.get('/reviewList', controller.getAllReviews);

router.post('/product/save', (req, res) => {
    console.log('Name: ', req.body)

    //Place data into schema/model
    const data = req.body;
    const newProduct = new Product(data);

    //Saves the data into mongodb and logs a sucessful save
    newProduct.save()
    .then((result)=> {
        console.log("Product Data has been saved to database")
    })
    .catch((err)=> {
        console.log(err, "Product Data not able to be saved to database")
    })

})

router.post('/product/review/save', (req, res) => {
    console.log('Review Data: ', req.body)

    const data = req.body;

    if (!data.productId) {
        return res.status(400).json({ success: false, error: 'productId is missing' });
    }
    
    const newReview = new Review(data);

    newReview.save()
    .then((result)=> {
        console.log("Review Data has been saved to database")
    })
    .catch((err)=> {
        console.log(err, "Review Data not able to be saved to database")
    })

})

module.exports = router;