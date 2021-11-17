//create a route fot resistering a user and hashing the password with bcrypt and saving it in the database
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user');

const router = express.Router();

const newUser = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('Vai apnake to chena chana lagtese,.')

    user = new User(_.pick(req.body, ['email', 'password']));

    //bcrypt hashing the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    //generate a token for the user
    const token = user.generateAuthToken();

    try {
        const result = await user.save();
        res.status(201).send({
            token: token,
            user: _.pick(result, ['_id', 'email'])
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

const authUser = async (req, res) => {

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Vai, apnake to chinte parlam na, Wrong Number!')

    //compare the password with the hashed password
    const validatePassword = await bcrypt.compare(req.body.password, user.password);
    if (!validatePassword) return res.status(400).send('Vai, Apni bkash theke Nahid Vai na!');

    const token = user.generateAuthToken();
    res.status(200).send({
        token: token,
        user: _.pick(user, ['_id', 'email'])
    })
};

router.route('/')
    .post(newUser)

router.route('/auth')
    .post(authUser)

module.exports = router