const mongoose = require('mongoose');

// Connect to MongoDB (replace with your actual connection string)
mongoose.connect('mongodb+srv://ajayjoshi1908:EWHsKVNQ68xtMFxl@users.zhlpevb.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the Login collection
const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
});

// Create a model for the Login collection
const Login = mongoose.model('Login', loginSchema,'Login');
/*  -->   Here if we want to use Collection with first char in capital we have to specify third argument
as same name .
    -->   If name is in lower we dont have to specify third argument.
*/
module.exports = Login;