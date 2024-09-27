const SignSchema = require('../model/SignupSchema.js');
const signup = async (req, res) => {
    console.log("Signup route hit");
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
         
            success: false,
            message: "Please fill the complete form",
        });
    }

    try {
        await SignSchema.create({
            name, email, password
        });
        res.status(200).json({
            success: true,
            message: "Sign-Up Successfull",
        });
    } catch (err) {
        console.log(err);
    }


};
module.exports = signup;