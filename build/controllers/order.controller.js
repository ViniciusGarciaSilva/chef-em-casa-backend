"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orders_dao_1 = require("../dao/order.dao");
exports.get = function (req, res, next) {
    var orders = orders_dao_1.getOrders();
    res.status(200).send(orders);
};
exports.getById = function (req, res, next) {
    var orders = orders_dao_1.getOrderById(0)
    res.status(200).send(orders);
};
exports.post = function (req, res, next) {
    res.status(201).send('post orders');
};
exports.put = function (req, res, next) {
    var id = req.params.id;
    // var orders = orders_dao_1.insertOrder(0, 0, "ordem inserida", "hoje", 0, 0)
    var orders = orders_dao_1.insertOrder(req.body.providerId, req.body.customerId, req.body.description, req.body.schedule, req.body.price, req.body.status);

    res.status(201).send("put orders " + orders);
};
exports.delete = function (req, res, next) {
    var id = req.params.id;
    res.status(200).send("delete orders " + id);
};
