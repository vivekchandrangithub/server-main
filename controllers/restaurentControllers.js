const Restaurent=require('../models/restaurentModel')

const getAllRestaurent=async(req, res) => {
    const restaurents=await Restaurent.find({});
    res.json(restaurents)
  }
  const getVegRestaurents = async (req, res) => {
    const vegRestaurents = await Restaurent.find({ category: 'veg' });
    res.json(vegRestaurents);
};

const getNonVegRestaurents = async (req, res) => {
    const nonVegRestaurents = await Restaurent.find({ category: 'non-veg' });
    res.json(nonVegRestaurents);
};

 const getRestaurentById= async(req, res) => {
  const restaurent=await Restaurent.findById(req.params.restaurentId).exec();
  res.json(restaurent)
  }
  
 const postRestaurent=async(req, res) => {
  const data=req.body
  const restaurent = new Restaurent(data)
  await restaurent.save()
  res.json(restaurent)
 
  }

 const updateRestaurent=async (req, res) => {
  const updatedrestaurent=await Restaurent.findByIdAndUpdate(req.params.restaurentId, req.body, {new:true})
  res.json(updatedrestaurent)
  } 

 const deleteRestaurent=async (req, res) => {
  await Restaurent.findByIdAndDelete(req.params.restaurentId)
    res.send('Deleted')
  }
  
  module.exports={
    getAllRestaurent,
    getVegRestaurents,
    getNonVegRestaurents,
    getRestaurentById,
    postRestaurent,
    updateRestaurent,
    deleteRestaurent
  }