const express = require('express');
const path = require('path');
const axios = require('axios');
const cors= require('cors');
// initialise express app
const app = express();

app.use(cors())
// serve files from root
// app.use(express.static(__dirname));

app.get('/promotion', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/YA3C');
  const promotion = response.data;
  res.json(promotion);
});

app.get('/user', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/TOOH');
  const user = response.data;
  res.json(user);
});

app.get('/categories', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/FKFM');
  const categories = response.data.categories;
  res.json(categories);
});

app.get('/menu-items', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/8L4D');
  const menuItems = response.data.menuItems;
  res.json(menuItems);
});

app.get('/cart', async (req, res) => {
  const response = await axios.get('https://jsonkeeper.com/b/KLVQ');
  const cartInfo = response.data;
  res.json(cartInfo);
});

// serve html
app.get('/', function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});

// start server
app.listen(8080);

// log if successful
console.log('Server started at http://localhost:8080');