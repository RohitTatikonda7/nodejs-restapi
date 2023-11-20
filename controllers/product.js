const Product=require("../models/Product")

const createProduct=async(req,res,next)=>{
    try {
        const { name, price,stock,hsnCode } = req.body;
        if (!name || !price|| !stock) {
          res.status(400);
          return next(new Error("name & email fields are required"));
        }
    
        // check if user already exists
        const isUserExists = await User.findOne({ email });
    
        if (isUserExists) {
          res.status(404);
          return next(new Error("User already exists"));
        }
    
        const user = await User.create({
          name, email
        });
    
        res.status(200).json({
          success: true,
          user,
        });
      } catch (error) {
        console.log(error);
        return next(error);
      }
}