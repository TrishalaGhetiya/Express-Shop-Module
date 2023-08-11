const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.delete('/delete-expense/:expenseId', expenseController.postDeleteExpense);

router.post('/', expenseController.postAddExpense);

router.get('/main-page', expenseController.getAllExpenses);

module.exports = router;