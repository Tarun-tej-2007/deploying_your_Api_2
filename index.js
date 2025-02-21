const express = require('express');
const { resolve } = require('path');
const dotenv = require('dotenv');
const app = express();
const port = 3010;

const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
