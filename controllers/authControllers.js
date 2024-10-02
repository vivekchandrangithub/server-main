const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(404).json({ success: false, message: "Unauthorized access" });
        }

        // Ensure the user has a password (hash must be present)
        if (!user.password) {
            return res.status(400).json({ success: false, message: "User does not have a password set" });
        }

        // Ensure password and hash are both strings
        if (typeof password !== 'string' || typeof user.password !== 'string') {
            return res.status(400).json({ success: false, message: "Invalid password data" });
        }

        // Check if the password matches
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            // Generate token
            const token = jwt.sign({ _id: user._id, role: 'user' }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

            // Send token in response
            return res.json({ success: true, token, message: "User Logged in" });
        } else {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }
    } catch (error) {
        console.error('Error during user login:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Admin login
const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email }).exec();
    if (!admin) {
        return res.status(404).json({ success: false, message: "Unauthorized access" });
    }

    // Check if the password matches
    const passwordMatch = bcrypt.compareSync(password, admin.password);
    if (passwordMatch) {
        // Generate token
        const token = jwt.sign({ _id: admin._id, role: 'admin' }, '61b19ed193347d3a3c2b056ca3cf0af8639cea06a78ab8cb8c03a66f81c725634de8db004b5404e2f2418eae68f34b8ab1b1763a4a0cc2dcfd8a9a0dfc163719', { expiresIn: '1h' });

        // Send token and success response
        return res.json({
            success: true,
            token,
            message: "Admin Logged in"
        });
    } else {
        return res.status(401).json({ success: false, message: "Unauthorized access" });
    }
};

// User logout
const userLogout = (req, res) => {
    res.clearCookie("token"); // Clear the JWT cookie
    res.json({ success: true, message: "User Logged out successfully" });
};

// Admin logout
const adminLogout = (req, res) => {
    res.clearCookie("token"); // Clear the JWT cookie
    res.json({ success: true, message: "Admin Logged out successfully" });
};

module.exports = {
    userLogin,
    adminLogin,
    userLogout,
    adminLogout
};
