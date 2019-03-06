import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//Rotas
const index = require('./routes/index');
const menuRoute = require('./routes/menu.route');
const dishRoute = require('./routes/dish.route');
const chefRoute = require('./routes/chef.route');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/dish', dishRoute);
app.use('/menu', menuRoute);
app.use('/chef', chefRoute);

module.exports = app;