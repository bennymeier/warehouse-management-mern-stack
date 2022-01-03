const mongoose = require('mongoose');
const dbConfig = require('./db.config');
const { initial } = require('./initial.data');

mongoose
  .connect(
    `mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}${dbConfig.HOST}/${dbConfig.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

const db = mongoose.connection;

module.exports = db;
