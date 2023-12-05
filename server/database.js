require('dotenv').config();
const mongoose = require('mongoose');

//Tries to connect to the database using the values set in the environment file
const connectToMongoDB = async () => {
    try {
        mongoose.connect(process.env.db_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Notice -- Mongoose connection was made')
    } catch (error) {
        console.log('MongoDB connection error')
        process.exit(1)
    }
}

module.exports = connectToMongoDB;