const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');
const ProductsModel = require('../Models/Products')


const register = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {

            return res.status(409)
                .json({ message: 'user is already exist', success: false });
        }
        const userModel = new UserModel({ fname, lname, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save()
        res.status(201)
            .json({ message: " register successfully", success: true })

    }

    catch (err) {
        res.status(500)
            .json({
                message: "internal server errors",
                success: false
            })
    }


}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {

            return res.status(409)
                .json({ message: "user does't exist", success: false });
        }


        const UserPass = password;
        const CheckPass = await bcrypt.compare(UserPass, user.password);
        if (CheckPass) {
            res.status(201)
                .json({ message: "login successfully", success: true })
        }
        else {
            res.status(400)
                .json({ message: "password doesn't matched", success: false })

        }


    }

    catch (err) {
        res.status(500)
            .json({
                message: "internal server errorss",
                success: false
            })
    }


}


const Products = async (req, res) => {
    try {
        const { ProductName, Price, category, image } = req.body;
        // const Products = await ProductsModel.find();
        // if(Products){

        //     return res.status(409)
        //     .json({message: 'This id already exists' ,success:false});
        // }
        const NewProductsModel = new ProductsModel({ ProductName, Price, category, image });

        await NewProductsModel.save()
        res.status(201)
            .json({ message: " Products add successfully", success: true })

    }

    catch (err) {
        res.status(500)
            .json({
                message: "internal server errors",
                success: false
            })
    }


}
module.exports = {
    register,
    login,
    Products
}