const mongoose = require('mongoose');
const { CATEGORY, PAYMENT_MODE, RECIPIENT } = require('../constants');

const ExpenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, required: true },
    category: { type: String, required: true, enum: Object.values(CATEGORY) },
    paymentMode: { type: String, required: true, enum: Object.values(PAYMENT_MODE) },
    recipient: { type: String, required: true, enum: Object.values(RECIPIENT) },
}, {
    timestamps: true,
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;