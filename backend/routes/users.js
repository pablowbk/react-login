const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log(users)
  } catch (err) {
    res.json(console.log({message: err}))
  }
});

module.exports = router;