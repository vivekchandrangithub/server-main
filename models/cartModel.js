const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      image: String,
      restaurant: String
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;