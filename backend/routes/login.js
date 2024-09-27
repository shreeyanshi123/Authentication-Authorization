const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const SignupSchema = require('../model/SignupSchema.js');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

       
        const user = await SignupSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Password is incorrect' });
        }

       
        const token = jwt.sign({ name: user.name, id: user._id }, process.env.KEY, { expiresIn: '1h' });

      
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

        return res.json({ status: true, message: 'Login successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
