const express = require("express");
const {createCart,getCartById} = require("../controllers/cart");

const router = express.Router();
 
// create a cart
router.post("/", createCart);

// get a cart by id
router.get("/:id", getCartById);

module.exports = router;