const express = require('express');
const router = express.Router();
const { getAllRestaurent,getVegRestaurents, getNonVegRestaurents, getRestaurentById, postRestaurent, updateRestaurent, deleteRestaurent } = require('../controllers/restaurentControllers');

router.get('/', getAllRestaurent);
router.get('/veg', getVegRestaurents); 
router.get('/non-veg', getNonVegRestaurents); 
router.get('/:restaurentId', getRestaurentById);
router.post('/', postRestaurent);
router.patch('/:restaurentId', updateRestaurent);  
router.delete('/:restaurentId', deleteRestaurent);

module.exports = router;

