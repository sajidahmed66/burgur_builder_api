//conncet to mongodb server
// Run server
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const mongoose = require('mongoose');

//connect to mongodb via mongoose
console.log(process.env.MONGODB_SERVER);
mongoose.connect(process.env.MONGODB_SERVER)
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.log("MongoDB Connection Failed!"));


// connect to the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
