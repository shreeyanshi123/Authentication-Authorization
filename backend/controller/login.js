const LoginSchema = require('../model/LoginSchema');
const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please fill the complete form",
        });
    }

    try {
        await LoginSchema.create({
            email, password
        });
        res.status(200).json({
            success: true,
            message: "Logged-In Successfull",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred during login. Please try again.",
        });
    }


};

module.exports = login;