
const express = require('express');
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose');
const routes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 8000; 


// To connect with your mongoDB database
const dbURI = 'mongodb+srv://admin:1234eight@beautybubble.5t61dmy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) =>  app.listen(PORT, () => {
    console.log(`Notice -- Server is listening on port ${PORT}`)
}))
.catch((err) => console.log(err))

mongoose.connection.on('connected', ()=> {
    console.log("Notice -- Mongoose connection was made")
})

//Middleware
//These two converts the form text from json to be stored in mongodb
//Has to be placed after connecting to mongodb
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('tiny'));

app.use('/', routes)

