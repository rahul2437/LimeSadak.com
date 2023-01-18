const express = require("express");
const { connection } = require("./config/db");
const { productRouter } = require("./routes/product.route");
require("dotenv").config();

const app = express();
app.use(express.json());

// All Routes
app.use("/products", productRouter);

// Welcome page
app.get("/", (req, res) => {
  res.send("Welcome to Limesadak api");
});

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
