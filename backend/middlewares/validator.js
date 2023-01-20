const jwt = require("jsonwebtoken");

exports.requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.secret);
    req.user = user;
    next();
  } catch (error) {
    return res.send({ message: "Please login first" });
  }
};

exports.vendorValidate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.secret);
    if (user.role == "admin" || user.role == "vendor") {
      req.user = user;
      next();
    } else {
      return res.send({ message: "Not authorized" });
    }
  } catch (error) {
    return res.send({ message: "Please login first" });
  }
};
exports.adminValidate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.secret);
    if (user.role == "admin") {
      req.user = user;
      next();
    } else {
      return res.send({ message: "Not authorized" });
    }
  } catch (error) {
    return res.send({ message: "Please login first" });
  }
};
