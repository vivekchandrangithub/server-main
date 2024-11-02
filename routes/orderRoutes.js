const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getAllOrder, getOrderById, postOrder, updateOrder, deleteOrder } = require('../controllers/orderControllers');

router.get('/',verifyToken, getAllOrder);

router.get('/:orderId',verifyToken, getOrderById);




router.post('/',verifyToken, postOrder);

router.patch('/:orderId',verifyToken, updateOrder);  // Fixed this line

router.delete('/:orderId',verifyToken, deleteOrder);

 
module.exports = router;  
 