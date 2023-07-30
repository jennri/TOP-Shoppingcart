const express = require('express');
const router = express.Router();

router.get('/message', (req, res) => {
    res.json({ message: "Hello from the backend" });
});

router.post('/save', (req, res) => {
    console.log('Name: ', req.name)
    res.json({
        msg: 'Received product data'
    })
})

module.exports = router;