const { Cart } = require("../models/cart.model");
const { Product } = require("../models/product.model");
exports.addToCart = async (req, res) => {
  const { cartItems } = req.body;
  const user = req.user._id;
  const payload = { user: req.user._id, cartItems: [cartItems] };
  const { product } = cartItems;
  try {
    const isUserInCart = await Cart.findOne({ user });
    if (isUserInCart) {
      let updateCart = isUserInCart.cartItems.find(
        (item) => item.product == product
      );
      if (updateCart) {
        let newCart = await Cart.findOneAndUpdate(
          {
            user,
            "cartItems.product": product,
          },
          {
            cartItems,
          }
        );
        return res.send({ message: "Product in cart updated", newCart });
      } else {
        let newCart = await Cart.findOneAndUpdate(
          { user },
          {
            $push: {
              cartItems,
            },
          }
        );
        return res.send({ message: "Added Product to cart ", newCart });
      }
    } else {
      let newCart = new Cart(payload);
      await newCart.save();
      return res.send({ message: "Added item to cart", newCart });
    }
  } catch (error) {
    return res.send({ message: "Something went wrong", error: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  const user = req.user._id;
  try {
    let cart = await Cart.findOne({ user }).populate("cartItems.product");
    return res.send({ message: "Cart Items", cart });
  } catch (error) {
    return res.send({ message: "Something went wrong", error: error.message });
  }
};
