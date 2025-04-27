const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter');
require('dotenv').config();
require('./Models/db');
const ProductsModel = require('./Models/Products.js');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('pong here');
});

// app.get('http://localhost:8080/products', (req, res) => {
//     ProductsModel.find()
//         .then(products => res.json(products))
//         .catch(err => {
//             console.error("Error fetching products:", err); // Log the error
//             res.status(500).json({ error: "Error fetching products", details: err.message }); // Send an error response
//         });
// });

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});