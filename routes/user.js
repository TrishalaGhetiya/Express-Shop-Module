const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.delete('/delete-user/:userId', userController.postDeleteUser);

router.post('/', userController.postAddUsers);

router.get('/main-page', userController.getUsers);

//router.get('/edit-user/:userId');

module.exports = router;