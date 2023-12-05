require('dotenv').config();
const morgan = require('morgan')
const routes = require('./routes/api')
const cors = require("cors");

const express = require('express');
const app = express();

// To connect with your mongoDB database
const connectToMongoDB = require("./database");
const port = process.env.PORT || 8000;

connectToMongoDB()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Middleware
//These two converts the form text from json to be stored in mongodb
//Has to be placed after connecting to mongodb
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('tiny'));

//Routes
app.use('/', routes)

