const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    place:String,
    image: String,
    category: {
      type: String,
      enum: ['veg', 'non-veg'],
      required: true
  }
  });
  const Restaurent = mongoose.model('Restaurent', foodSchema);
  module.exports=Restaurent;