const { Cart } = require("../models/cart.model");

exports.addToCart = async (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((err, cart) => {
    if (err) return res.send({ err });
    if (!cart) {
      const _cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });
      _cart.save((e, data) => {
        if (e)
          return res
            .status(400)
            .send({ message: "Something went wrong", error: e });
        if (data) {
          return res.status(200).send({ message: "Added to cart", data });
        } else {
          return res.status(200).send({ message: "Not added to cart" });
        }
      });
    } else {
      const product = req.body.cartItems.product;
      const item = cart.cartItems.find((ele) => ele.product == product);
      if (item) {
        return res.send({ message: "cart present", item });
      } else {
        Cart.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((e, data) => {
          if (e)
            return res
              .status(400)
              .send({ message: "Something went wrong", error: e });
          if (data) {
            return res.status(200).send({ message: "Added", cart: data });
          }
        });
      }
    }
  });
};

exports.addToCart1 = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((err, cart) => {
    if (err) return res.status(400).send({ message: "Something went wrong" });
    if (cart) {
      const product = req.body.cartItems.product;
      const item = cart.cartItems.find((c) => c.product == product);
      if (item) {
        Cart.findByIdAndUpdate(
          { user: req.user._id, "cartItems.product": product },
          {
            $set: {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          }
        ).exec((err, _cart) => {
          if (err)
            return res
              .status(400)
              .send({ message: "Something went wrong", error: err });
          if (_cart) {
            return res.status(200).send({ message: "Added", cart: _cart });
          }
        });
      } else {
        Cart.findByIdAndUpdate(
          { user: req.user._id },
          {
            $push: {
              cartItems: req.body.cartItems,
            },
          }
        ).exec((err, _cart) => {
          if (err)
            return res
              .status(400)
              .send({ message: "Something went wrong", error: err });
          if (_cart) {
            return res.status(200).send({ message: "Added", cart: _cart });
          }
        });
      }
    } else {
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((err, cart) => {
        if (err)
          return res.status(400).send({ message: "Something went wrong", err });
        if (cart) {
          return res.status(200).send({ message: "Added", cart });
        }
      });
    }
  });
};
