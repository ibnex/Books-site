const { registerValidation, Productvalidation, loginValidation } = require('../Middlewares/AuthValidation')
const { register, Products, login } = require('../Controllers/AuthController')

const router = require('express').Router();

router.post('/login', loginValidation, login)

router.post('/register', registerValidation, register);
router.post('/products', Productvalidation, Products);




module.exports = router; 