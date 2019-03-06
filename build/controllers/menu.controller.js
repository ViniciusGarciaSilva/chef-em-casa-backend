"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_dao_1 = require("../dao/menu.dao");
exports.get = function (req, res, next) {
    var menus = menu_dao_1.getMenus();
    res.status(200).send(menus);
};
exports.getById = function (req, res, next) {
    res.status(200).send('get by id menus');
};
exports.post = function (req, res, next) {
    res.status(201).send('post menus');
};
exports.put = function (req, res, next) {
    var id = req.params.id;
    res.status(201).send("put menus " + id);
};
exports.delete = function (req, res, next) {
    var id = req.params.id;
    res.status(200).send("delete menus " + id);
};
