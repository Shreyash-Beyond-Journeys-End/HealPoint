const jwt = require("jsonwebtoken");
const config = require("../config");

const checkAdmin = () => (req, res, next) => {
  const token = req.header("x-access-token");

  if (!token) {
    return res.status(401).json({ error: "You are not logged in!!!" });
  }
  try {
    const verifiedToken = jwt.verify(token, config.jwt.secret);

    if (!verifiedToken) {
      return res.status(401).json({ error: "You are not logged in!!!" });
    }

    if (verifiedToken.role !== 'admin') {
      return res.status(403).json({ error: "You do not have permission to access this resource." });
    }

    req.user = verifiedToken;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

module.exports = checkAdmin;
