const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    try {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

     const newUser = new User({
       email,
       username,
       password: hashedPassword
    });
  
      await newUser.save();
      res.status(201).send('User registered');
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({email});
      if(!user){
        return res.status(404).send("User not found");
      }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
          return res.status(400).send("Invalid credentials");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});


module.exports = router;