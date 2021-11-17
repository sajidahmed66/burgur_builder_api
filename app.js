const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/userRouter')
const orderRouter = require('./routes/orderRouter')
// middleware
app.use(cors());
app.use(express.json()); // for parsing application/json, json data 

//routes 
app.use('/user', userRouter);
app.use('/order', orderRouter);

module.exports = app;