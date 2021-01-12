const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

//DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, () => {
    console.log('MongoDB connection established.')
  }
)


//Routes
app.get('/', (req, res) => {
  res.send('Welcome Home');
})
const usersRoute = require('./routes/users');

//middleware
app.use(cors());
app.use(express.json());
app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Listening Server @ port: ${port}...`);
});