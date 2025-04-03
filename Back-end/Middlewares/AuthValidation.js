const joi = require('joi');

const registerValidation = (req, res, next) => {
    const Schema = joi.object({
        fname: joi.string().max(100).required(),
        lname: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().max(100).required(),

    });
    const { error } = Schema.validate(req.body)
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}

const loginValidation = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).max(100).required(),

    });
    const { error } = Schema.validate(req.body)
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}


const Productvalidation = (req, res, next) => {
    const Schema = joi.object({
        ProductName: joi.string().required(),
        Price: joi.number().required(),
        category: joi.string(),
        image: joi.string().required(),

    });
    const { error } = Schema.validate(req.body)
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}

module.exports = {
    registerValidation,
    loginValidation,
    Productvalidation
}