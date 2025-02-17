const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// Add new expense
router.post('/', async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).send(expense);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all expenses
router.get('/', async (req, res) => {
    const { limit = 5, skip = 0 } = req.query;
    try {
        const expenses = await Expense.find().sort({ updatedAt: -1 }).skip(skip).limit(limit);
        res.send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;