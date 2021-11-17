const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json()); // for parsing application/json, json data 


module.exports = app;