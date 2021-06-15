const express = require('express');
require('colors');
const products = require('./data/products.js');
const Cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/config');

//dotenv config
dotenv.config();
//Connecting to mongoDB
connectDb();

//app configs
const app = express();

//middlewares
app.use(express.json());
app.use(Cors());

//db configs

//API Endpoints

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.get('/', (req, res) => {
  res.send('<h1> Hello world</h1>');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

//Listener
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on localhost: ${port}`.inverse));
