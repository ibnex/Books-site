const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const AuthRouter = require('./Routes/AuthRouter')
require('dotenv').config();
require('./Models/db');
const ProductsModel = require('./Models/Products.js')

const PORT = process.env.PORT || 8080;


app.get('/ping', (req, res) => {
    res.send('pong here');
});


app.get('/auth/products' ,(req, res)=>{
    ProductsModel.find()
    .then(produts => res.json(produts))
    .then(err => res.json("code me eroor ",err))

})
app.use(bodyParser.json());
app.use(cors())
app.use('/auth', AuthRouter)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

