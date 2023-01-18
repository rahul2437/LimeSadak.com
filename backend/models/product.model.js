const mongoose = require("mongoose");

const moment = require("moment-timezone");
const dateIndia = moment.tz(Date.now(), "Asia/Kolkata");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: [
    {
      type: String,
      required: true,
    },
  ],
  color: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  size: [
    {
      type: String,
    },
  ],
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: dateIndia,
  },
  updatedAt: {
    type: Date,
    default: dateIndia,
  },
});

productSchema.pre("save", (next) => {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.model("product", productSchema);

module.exports = { Product };
