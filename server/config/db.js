const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://benny:p6HPJMGJ2g2S5rxT@cluster0.chzbm.mongodb.net/warehouse-management',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Successfully connected to your MongoDB!'))
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
