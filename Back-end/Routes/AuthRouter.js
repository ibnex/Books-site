const { registerValidation, Productvalidation, loginValidation } = require('../Middlewares/AuthValidation')
const { register, Productss, login } = require('../Controllers/AuthController')
const ProductsModel =require ("../Models/Products")

const router = require('express').Router();

router.post('/login', loginValidation, login)
router.get('/products' , async (req, res) => {
    try {
      const products = await ProductsModel.find({})
  
      res.json(products);
      console.log(products);
    } catch (err) {
      res.status(500).json({ message: err.message }) ;
    }
  });

router.post('/register', registerValidation, register);
router.post('/products', Productvalidation, Productss);




module.exports = router; 