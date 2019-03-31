const menuDao = require('../dao/menu.dao');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.get = function (req, res, next) {
    var menus = menuDao.readMenus();
    res.status(200).send(menus);
};

exports.getById = function (req, res, next) {
    const menu = menuDao.readMenu(req.params.id);
    res.status(200).send(menu);
}

exports.post = function (req, res, next) {
    console.log(req.body)
    menuDao.createMenu(req.body);
    res.status(201).send('post menus');
};

exports.put = function (req, res, next) {
    menuDao.updateMenu(req.body);
    res.status(201).send("put menus");
};

exports.delete = function (req, res, next) {
    menuDao.deleteMenu(req.params.id);
    res.status(200).send("delete menus");
};


