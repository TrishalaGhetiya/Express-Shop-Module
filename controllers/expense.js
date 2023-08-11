const Expense = require('../models/expense');

exports.postAddExpense = (req, res, next) => {
    const description = req.body.description;
    const amount = req.body.amount;
    const category = req.body.category;
    
    Expense.create({
        description: description,
        amount: amount,
        category: category
    })
    .then(result => {
        console.log('Expense Created');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getAllExpenses = (req, res, next) => {
    Expense.findAll()
        .then(expenses => {
            console.log('Expense send');
            res.json(expenses);
        })
        .catch(err => console.log(err));
};

exports.postDeleteExpense = (req, res, next) => {
    const expenseId = req.params.expenseId;
    //console.log(userId);
    Expense.findByPk(expenseId)
        .then(expense => {
            return expense.destroy();
        })
        .then(result => {
            console.log('expense deleted');
            //res.redirect('/main-page');
        })
        .catch(err => console.log(err));
};