const Cart=require('../models/Cart'); 
const Product=require('../models/Product');
const User=require('../models/User');

const createCart=async(req,res,next)=>{
    try {
        const { userId,products,quantity } = req.body;
        if (!userId || !products) {
          res.status(400);
          return next(new Error("userId & products fields are required"));
        }

        //check if user is there or not
        const isUserExists = await User.findOne({ id:userId });

        if (!isUserExists) {
            res.status(404);
            return next(new Error("Userid is not exists"));
        }
        const lastCart = await Cart.findOne().sort({id: -1});
        const highestId = lastCart ? lastCart.id : 0;
        id= highestId + 1;

        const cart = await Cart.create({
          id,userId,products,quantity
        });
    
        res.status(200).json({
          success: true,
          cart,
        });
      } catch (error) {
        console.log(error);
        return next(error);
      }
} 

const getCartById=async(req,res,next)=>{
    const { id } = req.params;
    try {
      const cart = await Cart.findOne({id:id})
      if(!cart){
        res.status(404);
        return next(new Error("Cart not found"));
      }
      res.status(200).json({
        success: true,
        cart,
      });
    } catch (error) {
        console.log(error);
        return next(error);
    }
}




module.exports={
    createCart,
    getCartById
}