const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.TEXT,
    },
    amount: {
        type: Sequelize.DOUBLE,
    },
    category: {
        type: Sequelize.STRING,
    }
});

module.exports = Expense;