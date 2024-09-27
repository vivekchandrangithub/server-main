const express = require('express');
const router = express.Router();
const { verifyToken,  } = require('../middleware/authMiddleware');
const { getAllUser, getUserById, userSignup, updateUser, deleteUser, getUserProfile } = require('../controllers/userControllers');

router.get('/profile', verifyToken, getUserProfile)
router.get('/',  getAllUser);
router.get('/:userId',verifyToken,  getUserById);
router.post('/user', userSignup);
router.patch('/:userId', verifyToken, updateUser);
router.delete('/:userId',verifyToken,  deleteUser);

module.exports = router;