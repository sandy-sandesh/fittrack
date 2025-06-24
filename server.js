const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve static files (index.html, home.html, etc.) from the current directory
app.use(express.static(__dirname));

let user = null;

// Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    user = { username, password };
    res.json({ message: 'Registered successfully!' });
  } else {
    res.status(400).json({ message: 'Please fill all fields' });
  }
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (user && username === user.username && password === user.password) {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Optional: Serve home.html directly at /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});