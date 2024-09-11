const express = require('express')
const foodRoutes= require('./routes/foodRoutes')
const restaurentRoutes=require('./routes/restaurentRoutes')
const userRoutes=require('./routes/userRoutes')
const cartRoutes= require('./routes/cartRoutes')
const authRoutes=require('./routes/authRoutes')
const adminRoutes=require('./routes/adminRoutes')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('HELLO BACKEND DEVELOPER')
})


app.use(cors())
app.use(express.json())

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
  await mongoose.connect('mongodb+srv://vivekchandran663:server01@cluster0.x9hzd.mongodb.net/server01?retryWrites=true&w=majority&appName=Cluster0');
}

main().then(()=>console.log("connected successfully")).catch(err => console.log(err));