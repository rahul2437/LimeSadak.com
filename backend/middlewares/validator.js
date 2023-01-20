const jwt = require("jsonwebtoken");

exports.requireSignIn = (req, res, next) => {
  const token = req.headers.authorization;
  const user = jwt.verify(token, process.env.secret);
  req.user = user;
  next();
};
