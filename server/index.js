const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());
app.use(cors());
//Middleware
app.use(express.urlencoded({ extended: true }));

// To connect with your mongoDB database
// const dbURI = 'mongodb+srv://admin:1234eight@beautybubble.5t61dmy.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(dbURI)
// .then((result) =>  app.listen(3000))
// .catch((err) => console.log(err))

    
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});