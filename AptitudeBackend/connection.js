const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ajayjoshi1908:EWHsKVNQ68xtMFxl@users.zhlpevb.mongodb.net/aptitude_app_user?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'))
.catch(error => {
  console.error('Database connection error:', error.message);
  console.error(error.stack);
  process.exit(1); // Exit the process with failure
});
//Localhost database
// mongoose.connect('mongodb://localhost:27017/AptitudeApp_user', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
});
const contactUsSchema = new mongoose.Schema({
  name : String,
  email: String,
  msg: String
});

// Create a model for the Login collection
const Login = mongoose.model('Login', loginSchema,'Login');
const contactUs = mongoose.model('contact_us', contactUsSchema);
/*  -->   Here if we want to use Collection with first char in capital we have to specify third argument
as same name .
    -->   If name is in lower we dont have to specify third argument.
*/
module.exports = {Login, contactUs};