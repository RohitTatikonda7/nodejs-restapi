const Product=require("../models/Product")

const createProduct=async(req,res,next)=>{
    try {
        const { name, price,stock,hsnCode } = req.body;
        if (!name || !price|| !stock) {
          res.status(400);
          return next(new Error("name & price & stock fields are required"));
        }
    
        const product = await Product.create({
          name, price,stock,hsnCode
        });
    
        res.status(200).json({
          success: true,
          product,
        });
      } catch (error) {
        console.log(error);
        return next(error);
      }
}

module.exports={
  createProduct
}