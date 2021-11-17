const express = require('express');
const { Order } = require('../models/order');
const _ = require('lodash');
const router = express.Router();
const authorized = require('../middlewares/authorized');

const newOrder = async (req, res) => {
    const order = new Order(req.body); // i think this is a bad code coz
    try {
        await order.save();
        res.status(201).send("order plased successfully");
    } catch (e) {
        res.status(400).send(e);
    }
};

const getOrderList = async (req, res) => {
    const orderList = await Order.find({ user: req.user._id }).sort({ orderTime: -1 });
    res.status(200).send(orderList);
}

router.route('/')
    .get(authorized, getOrderList)
    .post(newOrder)


module.exports = router;
