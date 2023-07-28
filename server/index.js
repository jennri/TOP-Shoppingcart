const cors = require('cors');
const express = require('express');
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose');
const ProductPost = require('./models/productPost')
const routes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 8000; 

// HTTP request logger
app.use(morgan('tiny'));

app.use(express.json());
app.use(cors());
app.use('/', routes)

//Middleware
app.use(express.urlencoded({ extended: true }));



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


// //Saving data to mongo
// const data = {
//     product_name: 'product test 2',
//     product_description: 'This is a test',
//     product_price: 14.9
// }

// const newProductPost = new ProductPost(data);
// newProductPost.save()
//     .then((result)=> {
//         console.log("Data has been saved")
//     })
//     .catch((err)=> {
//         console.log(err)
//     })

