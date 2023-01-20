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
  res.send(`
      <div id="main">
      <h1>Welcome to Limesadak API</h1>
    </div>
    <div>
      <div>Usage</div>
      <h3>
        Deployed on Vercel : <span>https://general-icicle-9828.vercel.app</span>
      </h3>
      <ul>
        <li>
          Signin :
          <span>https://general-icicle-9828.vercel.app/user/signin</span>
          Needed:
          <code>
            {<br />
            "name": "String",<br />
            "email": "String",<br />
            "password": "String",<br />
            "phone_number": "String",<br />
            "role": [Array of string],<br />
            }
          </code>
        </li>
        <li>
          Signup :
          <span>https://general-icicle-9828.vercel.app/user/signup</span>
          Needed:
          <code>
            {<br />
            "email": "String",<br />
            "password": "String",<br />
            }
          </code>
        </li>
        <li>
          Get all Products:
          <span>https://general-icicle-9828.vercel.app/products</span>
        </li>
        <li>
          Add products needed fields :
          <span> https://general-icicle-9828.vercel.app/products/add </span>
          <code>
            <br />
            { "name": "String",<br />
            "brand": "String",<br />
            "description": "String",<br />
            "category": [Array of string],<br />
            "color": "String",<br />
            "gender": "String",<br />
            "tags": [Array of string],<br />
            "size": [Array of string],<br />"stock": Number,<br />
            "price": Number,<br />
            }
          </code>
        </li>
        <li>
          Update product,delete product,single product:
          <span>https://general-icicle-9828.vercel.app/product/:id</span>
        </li>
        <li>
          Get cart items:
          <span> https://general-icicle-9828.vercel.app/cart </span>
        </li>
        <li>
          Add to cart:
          <span> https://general-icicle-9828.vercel.app/cart/addtocart </span>
        </li>
      </ul>
    </div>
  `);
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
