const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "please enter product name"],
        trim:true,
    },
    description:{
        type:String,
        required:[true, "please enter product discription"],

    },
    price:{
        type:Number,
        required:[true, "please enter product price"],
        maxLength:[8,"price cannot exceeded then 8 characters"],
    },
    rating:{
        type:Number,
        default:0,
    },
    images:[
    {
        public_id:{
            type: String,
            required:true,
        }, 
        url:{
            type:String,
            required:true,
        }
    }],
    category:{
        type:String,
        required:[true, "please enter category "],
    },
    stock:{
        type:Number,
        required:[true,"please enter the stock number"],
        maxLength:[4,"stock cannot exceed then 4"],
        default:1,
    },
    numOfReviews:{
        type: Number,
        default:0,
    },
    reviews:[
        {
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        },
    }
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    },

})

module.exports = mongoose.model("Product",productSchema)  