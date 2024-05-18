const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Import route files
const login = require('./check_user');
const register = require('./register');

app.use(cors());
app.use(express.json());

// Use route files
app.use('/check_user', login);
app.use('/register', register);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
