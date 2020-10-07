const mongoose = require("mongoose");

const productSchema = new mongoose.Schema([
  {
    title: { type: String },
    description: {type: String},
    price: { type: Number },
    colors: [String], // loop through array to display colors
    size: [String], // loop through array to display sizes
    imgUrl: { type: String },
    category: { type: String },
    stock: { type: Boolean },
    quantity: { type: Number },
    createdAt: { type: Date, default: Date.now }
  },
]);

module.exports = Product = mongoose.model('Product', productSchema);
