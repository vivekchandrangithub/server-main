const Cart=require('../models/cartModel')

const getAllCart=async(req, res) => {
    const carts=await Cart.find({});
    res.json(carts)
  }

  const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.cartId).exec();
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again.' });
    }
};
  
  const postCart = async (req, res) => {
    const { userId, foodId } = req.body;
  
    try {
      const existingCartItem = await Cart.findOne({ userId, foodId });
      
      if (existingCartItem) {
        return res.status(400).json({ message: 'You already added this food to your cart.' });
      }
      const cart = new Cart(req.body);
      await cart.save();
  
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error. Please try again.' });
    }
  };

  const updateCart=async (req, res) => {
    const updatedcart=await Cart.findByIdAndUpdate(req.params.cartId, req.body, {new:true})
    res.json(updatedcart)
    } 
  
   const deleteCart=async (req, res) => {
    await Cart.findByIdAndDelete(req.params.cartId)
      res.send('Deleted')
    }
    
    module.exports={
      getAllCart,
      getCartById,
      postCart,
      updateCart,
      deleteCart
    }