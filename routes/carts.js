const express = require("express");
const {createCart,getCart,getCarts} = require("../controllers/cart");

const router = express.Router();
 
// create a cart
router.post("/", createCart);

// get a cart by id
router.get("/:id", getCart);

// get all carts
router.get("/", getCarts); 

module.exports = router;