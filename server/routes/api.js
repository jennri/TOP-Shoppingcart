const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const dbo = require("../database");

router.get('/message', (req, res) => {
    res.json({ message: "Hello from the backend" });
});

// This section will help you get a list of all the products.
router.route("/testt").get(function (req, res) {
    let db_connect = dbo.getDb("test");
    db_connect
      .collection("products")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

router.post('/save', (req, res) => {
    console.log('Name: ', req.body)

    //Place data into schema/model
    const data = req.body;
    const newProduct = new Product(data);

    //Saves the data into mongodb and logs a sucessful save
    newProduct.save()
    .then((result)=> {
        console.log("Data has been saved to database")
    })
    .catch((err)=> {
        console.log(err, "Data not able to be saved to database")
    })

})

module.exports = router;