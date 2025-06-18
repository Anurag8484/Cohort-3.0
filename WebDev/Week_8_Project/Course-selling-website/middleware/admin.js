const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
admin_secret = process.env.JWT_ADMIN_SECRET;

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    res.json({
      error: "Please provide token in request Headers!",
    });
    return;
  }
  const decoded = jwt.verify(token, admin_secret);
  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(403).json({
      error: "You are not Signed In",
    });
    return;
  }
}

module.exports = {
    adminMiddleware
}