"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
//Rotas
var index = require('./routes/index');
var menuRoute = require('./routes/menu.route');
var dishRoute = require('./routes/dish.route');
var chefRoute = require('./routes/chef.route');
var orderRoute = require('./routes/order.route');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/', index);
app.use('/dish', dishRoute);
app.use('/menu', menuRoute);
app.use('/chef', chefRoute);
app.use('/order', orderRoute);
module.exports = app;
