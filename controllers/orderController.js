const Order=require('../models/orderModel')

const getAllOrder = async (req, res) => {
  const userId = req.user._id; // Assuming req.user contains the authenticated user
  try {
    const orders = await Order.find({ userId }); // Fetch orders only for the logged-in user
    res.json(orders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
};


 const getOrderById= async(req, res) => {
  const order=await Order.findById(req.params.orderId).exec();
  res.json(order)
  }

  

const postOrder = async (req, res) => {
  const userId = req.user._id; // Assuming req.user contains the authenticated user
  const data = {
    ...req.body,
    userId: userId, // Include the userId in the order data
  };

  try {
    const order = new Order(data);
    await order.save();
    res.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Error creating order' });
  }
}; 


  const updateOrder=async (req, res) => {
    const updatedorder=await Order.findByIdAndUpdate(req.params.orderId, req.body, {new:true})
    res.json(updatedorder)
    } 
  
   const deleteOrder=async (req, res) => {
    await Order.findByIdAndDelete(req.params.orderId)
      res.send('Deleted')


    }
   
    
    module.exports={
      getAllOrder,
      getOrderById,
     
      postOrder,
      updateOrder,
      deleteOrder
      
      
    } 