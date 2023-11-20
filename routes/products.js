const express=require("express");
const {createProduct}=require("../controllers/product")

const router=express.Router();

//create a product 
router.post("/",createProduct);

module.exports=router;