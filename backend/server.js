const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

//db config
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, () => {
    console.log('MongoDB connection established.')
  }
)

app.get('/', (req, res) => {
  res.send('Welcome Home');
})

app.listen(port, () => {
  console.log(`Listening Server @ port: ${port}...`);
});