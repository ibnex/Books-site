const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema({
    // ProductId:{
    //     type: String,
    //     unique :true,
    //     required:true
    // },
    ProductName: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true



    },
    image: {
        type: String,
        required: true
    },
});
const ProductsModel = mongoose.model("Products", Products);
module.exports = ProductsModel; 