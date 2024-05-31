const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Import route files
const login = require('./check_user');
const register = require('./register');
const contactus = require('./contact_us');

app.use(cors());
app.use(express.json());

// Use route files
app.use('/check_user', login);
app.use('/register', register);
app.use('/contact_us', contactus);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
