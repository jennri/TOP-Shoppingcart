const express = require('express');
const router = express.Router();
const ProductPost = require('../models/productPost')

router.get('/message', (req, res) => {
    res.json({ message: "Hello from the backend" });
});

router.post('/save', (req, res) => {
    console.log('Name: ', req.body)

    //Place data into schema/model
    const data = req.body;
    const newProductPost = new ProductPost(data);

    newProductPost.save()
    .then((result)=> {
        console.log("Data has been saved")
    })
    .catch((err)=> {
        console.log(err)
    })

    res.json({
        msg: 'Received product data'
    })
})

module.exports = router;