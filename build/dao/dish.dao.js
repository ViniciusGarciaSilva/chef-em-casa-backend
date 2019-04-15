"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');

function createDish(dish) {
    console.log("CREATE DISH: ", dish);
    sqlite.run(
        `INSERT INTO dish (id, idMenu, description, type) VALUES (
            ${dish.id},
            ${dish.idMenu},
            "${dish.description}",
            "${dish.type}"
        )`
    );
}
exports.createDish = createDish;

function readDishes() {
    console.log('Read Dishes');
    var rows = sqlite.run("SELECT * FROM dish");
    console.log('rows:', rows);
    return (rows);
}
exports.readDishes = readDishes;

function readMenuDishes(id) {
  console.log('Read Menu Dishes. MenuId: ' + id);
  var rows = sqlite.run("SELECT * FROM dish WHERE idMenu = " + id);
  console.log('rows:', rows);
  return (rows);
}
exports.readMenuDishes = readMenuDishes;

function readDish(id) {
    console.log("Read Dish id: " + id);
    var rows = sqlite.run("SELECT * FROM dish where id = " + id);
    console.log('rows:', rows);
    return (rows);
}
exports.readDish = readDish;

function updateDish(dish) {
    sqlite.run(`UPDATE dish SET 
        idMenu = ${dish.idMenu},
        description = "${dish.description}",
        type = "${dish.type}"
    where id = ${dish.id}`);
    console.log("Update Dish id: " + dish.id);
}
exports.updateDish = updateDish;

function deleteDish(id) {
    console.log("Delete Dish " + id);
    sqlite.run("DELETE FROM dish WHERE id = " + id);
}
exports.deleteDish = deleteDish;

function deleteMenuDishes(id) {
  console.log("Delete Menu Dishes " + id);
  sqlite.run("DELETE FROM dish WHERE idMenu = " + id);
}
exports.deleteMenuDishes = deleteMenuDishes;