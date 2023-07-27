const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8000; 

// HTTP request logger
app.use(morgan('tiny'));

app.use(express.json());
app.use(cors());

//Middleware
app.use(express.urlencoded({ extended: true }));

// To connect with your mongoDB database
const dbURI = 'mongodb+srv://admin:1234eight@beautybubble.5t61dmy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) =>  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
}))
.catch((err) => console.log(err))


app.get('/message', (req, res) => {
    res.json({ message: "Hello from the backend" });
});


