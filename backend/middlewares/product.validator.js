const productValidate = (req, res, next) => {
  const {
    name,
    brand,
    description,
    category,
    color,
    gender,
    tags,
    size,
    stock,
    price,
  } = req.body;
  if (
    !name ||
    !brand ||
    !description ||
    !category ||
    !color ||
    !gender ||
    !tags ||
    !size ||
    !stock ||
    !price
  ) {
    res.send({ message: "Missing required field" });
    return;
  }
  if (
    !typeof name === "string" ||
    !typeof brand === "string" ||
    !typeof description === "string" ||
    !typeof category === "string" ||
    !typeof color === "string" ||
    !typeof gender === "string" ||
    !typeof tags === "string" ||
    !typeof size === "string" ||
    !typeof stock === "number" ||
    !typeof price === "number"
  ) {
    res.send({ message: "Field type is not supported" });
    return;
  }
  next();
};

module.exports = { productValidate };
