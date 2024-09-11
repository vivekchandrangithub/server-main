const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    isVeg: { type: Boolean, required: true }  // Added this line..it decide veg or non-veg if boolean value is true then veg else non-veg
  })
  const Food = mongoose.model('Food', foodSchema);  /// food model is created here
  module.exports=Food;