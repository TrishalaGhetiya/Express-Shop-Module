const path = require('path');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use('/admin', adminRoutes);
//app.use(shopRoutes);

app.use(errorController.get404);



sequelize
    .sync()
    .then(result => {
        //console.log(result);
        app.listen(3000);
    })
    .catch(err => console.log(err));


