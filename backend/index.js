const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/product.model");
const fs = require("fs");

const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.route");
const { adminRouter } = require("./routes/admin/admin.route");
const { cartRouter } = require("./routes/cart.route");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.write(
        "Welcome to Limesadak api, Sorry server error cannot show Usage now"
      );
      res.end();
    } else {
      res.write(data);
    }
    res.end();
  });
});

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(
      `Database connected listening on port http://localhost:${process.env.PORT}`
    );
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;
