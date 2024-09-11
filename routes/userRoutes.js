const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getAllUser, getUserById, userSignup, updateUser, deleteUser } = require('../controllers/userControllers');

router.get('/', verifyToken, getAllUser);

router.get('/:userId',verifyToken,  getUserById);

router.post('/user', userSignup);

router.patch('/:userId', verifyToken, updateUser);  // Fixed this line

router.delete('/:userId',verifyToken,  deleteUser);

module.exports = router;