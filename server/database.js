require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.db_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Notice -- Mongoose connection was made');
});

module.exports = db;