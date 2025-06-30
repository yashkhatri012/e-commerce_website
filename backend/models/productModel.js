import mongoose from 'mongoose';
import BestSeller from '../../frontend/src/components/BestSeller';

const productSchema = new mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    description :{
        type :String,
        required:true
    },
    price:{
        type :Number,
        required:true
    },
    image:{
        type :Array,
        required:true
    },
    category:{
        type :Number,
        required:true
    },
    subCategory:{
        type :String,
        required:true
    },
    sizes:{
        type :Array,
        required:true
    },
    BestSeller:{
        type :Boolean,
         
    },
    date:{
        type :Number,
        required:true
    },
})

const productModel = mongoose.models.products || mongoose.model("product", productSchema);

export default productModel