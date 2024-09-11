const express = require('express');
const router = express.Router();
const { getAllRestaurent,getVegRestaurents, getNonVegRestaurents, getRestaurentById, postRestaurent, updateRestaurent, deleteRestaurent } = require('../controllers/restaurentControllers');

router.get('/', getAllRestaurent);
router.get('/veg', getVegRestaurents); // New route for veg restaurants

router.get('/non-veg', getNonVegRestaurents); // New route for non-veg restaurants

router.get('/:restaurentId', getRestaurentById);

router.post('/', postRestaurent);

router.patch('/:restaurentId', updateRestaurent);  // Fixed this line

router.delete('/:restaurentId', deleteRestaurent);

module.exports = router;

