const menuDao = require('../dao/menu.dao');
const dishDao = require('../dao/dish.dao');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.get = function (req, res, next) {
    var menus = menuDao.readMenus();
    console.log("menus: " + menus);
    for(i=0 ; i< menus.length ; i++ )
        menus[i].dishes = dishDao.readMenuDishes(menus[i].id); 
    res.status(200).send(menus);
};

exports.getById = function (req, res, next) {
    var menu = menuDao.readMenu(req.params.id);
    menu[0].dishes = dishDao.readMenuDishes(req.params.id);
    console.log("menu: ", menu);
    res.status(200).send(menu);
}

exports.post = function (req, res, next) {
    var menu = req.body;
    menu.id = menuDao.readMenus().length;
    menuDao.createMenu(menu);
    menu.dishes.map(dish => {
        dish.idMenu = menu.id;
        dish.id = dishDao.readDishes().length;
        dishDao.createDish(dish);
    }); 
    res.status(201).send(menu);
};

exports.put = function (req, res, next) {
    menuDao.updateMenu(req.body);
    req.body.dishes.map(dish => dishDao.updateDish(dish));
    res.status(201).send("put menus");
};

exports.delete = function (req, res, next) {
    menuDao.deleteMenu(req.params.id);
    dishDao.deleteMenuDishes(req.params.id);
    res.status(200).send("delete menus");
};


