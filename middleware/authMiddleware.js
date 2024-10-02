const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Verify the token
    req.user = decoded; // Attach the decoded user info to the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token, access denied' });
  }
};

module.exports = { verifyToken };

// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access forbidden: Admins only' });
  }
};



const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
      return res.status(401).json({ message: 'Access denied, no token provided' });
  }
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next(); // Pass control to the next middleware or route handler
  } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
  }
};





module.exports = { verifyToken, isAdmin, authenticate };
