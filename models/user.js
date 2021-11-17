const { Schema, model } = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

//userschema method for jwt token
userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        email: this.email
    }, process.env.JWT_SECRET_KEY, { expiresIn: '3h' });
    return token;
};

// validation of userschema with joi
const validateUser = user => {
    const schema = {
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required()
    };
    return schema.validate('User', userSchema);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;