const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/userRouter')

// middleware
app.use(cors());
app.use(express.json()); // for parsing application/json, json data 

//routes 
app.use('/user', userRouter);

module.exports = app;