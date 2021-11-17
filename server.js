//install dotenv, express, morgan, bcrypt,jasonwebtoken, joi, lodash, cors and mongoose

//conncet to mongodb server
// Run server
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const mongoose = require('mongoose');

//connect to mongodb via mongoose
mongoose.connect(process.env.MONGODB_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB server');
}).catch(err => {
    console.log('Error while connecting to mongodb server')
});

// connect to the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
