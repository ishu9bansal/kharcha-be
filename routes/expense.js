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
    try {
        const expenses = await Expense.find();
        res.send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
});
