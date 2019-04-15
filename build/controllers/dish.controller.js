const dishDao = require('../dao/dish.dao');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.get = function (req, res, next) {
    var dish = dishDao.readDishes();
    res.status(200).send(dish);
};

exports.getById = function (req, res, next) {
    const dish = dishDao.readDish(req.params.id);
    res.status(200).send(dish);
}

exports.getMenuDishes = function(req, res, next) {
  const dish = dishDao.readMenuDishes(req.params.id);
  res.status(200).send('read menus dishes. Menu id: ' + req.params.id); 
}

exports.post = function (req, res, next) {
    console.log(req.body)
    var dish = req.body;
    dish.id = dishDao.readDishes().length;
    dishDao.createDish(dish);
    console.log("TESTEEEEEEEEEEE: ", dish);
    res.status(201).send(dish);
};

exports.put = function (req, res, next) {
    dishDao.updateDish(req.body);
    res.status(201).send("put dish");
};

exports.delete = function (req, res, next) {
    dishDao.deleteDish(req.params.id);
    res.status(200).send("delete dish");
};

exports.deleteMenuDishes = function (req, res, next) {
  dishDao.deleteMenuDishes(req.params.id);
  res.status(200).send("delete menu dishes");
};


