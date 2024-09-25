const express = require('express')
const foodRoutes= require('./routes/foodRoutes')
const restaurentRoutes=require('./routes/restaurentRoutes')
const userRoutes=require('./routes/userRoutes')
const cartRoutes= require('./routes/cartRoutes')
const authRoutes=require('./routes/authRoutes')
const adminRoutes=require('./routes/adminRoutes')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const cors = require('cors')
const mongoose = require('mongoose');
const app = express()

app.use(cors())

app.use(express.json())

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

app.get('/', (req, res) => {
  res.send('HELLO BACKEND DEVELOPER')
})





app.use('/foods', foodRoutes)
app.use('/restaurents', restaurentRoutes)
app.use('/carts', cartRoutes)
app.use('/usersignup', userRoutes)
app.use('/adminsignup',adminRoutes)
app.use('/login',authRoutes)
app.use('/logout',authRoutes)

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})

async function main() {
  await mongoose.connect(mongoUri);
}

main().then(()=>console.log("connected successfully")).catch(err => console.log(err));