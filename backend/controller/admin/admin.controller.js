const jwt = require("jsonwebtoken");
const { User } = require("../../models/user.model");
// SIGNIN
exports.signin = (req, res) => {
  try {
    const { email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
      if (err) return res.status(400).send({ message: "something went wrong" });
      if (!user)
        return res
          .status(403)
          .send({ message: "Admin does not exist, Please contact owner" });
      if (user) {
        if (user.authenticate(password) && user.role === "admin") {
          const token = jwt.sign({ _id: user._id }, process.env.secret, {
            expiresIn: "3h",
          });
          const { _id, name, email, role } = user;
          return res.status(200).send({
            token,
            user: { _id, name, email, role },
          });
        } else return res.status(400).send({ message: "Wrong password" });
      }
    });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong", err });
  }
};

// SIGNUP NEW USER
exports.signup = (req, res) => {
  const { email } = req.body;
  try {
    User.findOne({ email }).exec((err, user) => {
      if (user)
        return res.status(400).send({ message: "Admin already exists" });
      const _user = new User(req.body);
      _user.save((err, data) => {
        if (err)
          return res.status(400).send({ message: "Something went wrong", err });
        return res
          .status(201)
          .send({ message: "Admin successfully Created", user: data });
      });
    });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong", err });
  }
};
