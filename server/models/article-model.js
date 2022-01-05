const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = new Schema(
  {
    name: { type: String, required: true, unique: true },
    articlenr: { type: String, required: true, unique: true },
    category: { type: String },
    barcode: { type: String },
    currentAmount: { type: Number },
    minAmount: { type: Number },
    purchasePrice: { type: Number },
    producer: { type: String },
    location: { type: Schema.Types.ObjectId, ref: 'locations' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('articles', Article);
