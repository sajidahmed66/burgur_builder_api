const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    user: Schema.Types.ObjectId,
    ingredients: [{ type: { type: String }, quantity: { type: Number } }],
    customer: {
        delevaryAddress: String,
        phone: String,
        paymentType: String,
    },
    price: Number,
    orderTime: { type: Date, default: Date.now }
});

module.exports.Order = model('Order', orderSchema);