const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  name: String,
  image: String,
  restaurent: String,
  items: String,
  quantity: Number,
  totalprice: Number,
  status: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order; 
  