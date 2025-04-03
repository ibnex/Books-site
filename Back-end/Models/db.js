const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_CONN

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("mongo db connected..");
    })
    .catch((err) => {
        console.log("mongoDb connection failed error", err);
    })