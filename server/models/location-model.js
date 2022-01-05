const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = new Schema(
  {
    name: { type: String, required: true },
    zip: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('locations', Location);
