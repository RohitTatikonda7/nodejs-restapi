const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
        id:Number,
        userId:{
            type:Number,
            ref:'User'
        },
        products:[{
            productId:{
                type:Number,
                ref:'Product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }]
    },
    {
        timestamps: true,
    }
)
module.exports=mongoose.model('Cart',cartSchema);