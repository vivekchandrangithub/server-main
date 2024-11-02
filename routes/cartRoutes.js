const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getAllCart, getCartById, postCart, updateCart, deleteCart } = require('../controllers/cartControllers');

// Apply verifyToken to secure cart routes
router.get('/', verifyToken, getAllCart);
router.get('/:cartId', verifyToken, getCartById);
router.post('/',verifyToken, postCart);
router.patch('/:cartId',verifyToken, updateCart);
router.delete('/:cartId',  deleteCart);

module.exports = router;  
      