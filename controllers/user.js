const User = require('../models/user');

exports.postAddUsers = (req, res, next) => {
    const userName = req.body.userName;
    const email = req.body.email;
    
    User.create({
        userName: userName,
        email: email
    })
    .then(result => {
        console.log('User Created');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            console.log('users send');
            res.json(users);
        })
        .catch(err => console.log(err));
};

exports.postDeleteUser = (req, res, next) => {
    const userId = req.params.userId;
    //console.log(userId);
    User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(result => {
            console.log('user deleted');
            //res.redirect('/main-page');
        })
        .catch(err => console.log(err));
};