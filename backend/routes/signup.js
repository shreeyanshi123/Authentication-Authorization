const express = require('express');
const bcrypt = require('bcrypt');
const SignSchema = require('../model/SignupSchema.js'); // Ensure your schema is correctly imported

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        
        const user = await SignSchema.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

      
        const hashedPassword = await bcrypt.hash(password, 14);
        
       
        const newUser = new SignSchema({
            name,
            email,
            password: hashedPassword,
        });

       
        await newUser.save();
        
        return res.status(201).json({ message: "User added successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
