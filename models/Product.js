const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
      },
      price: {
        type: String,
        required: [true, "Price is required"],
        unique: false,
      },
      stock:{
        type: String,
        required: [true, "Stock is required"],
        unique: false,
      },
      hsnCode:{
        type: String,
        required: [true, "HSN code is required"],
        unique: false,
      }
    },
    {
      timestamps: true,
    }
  );

  module.exports = mongoose.model("Product", productSchema);