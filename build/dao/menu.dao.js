"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');

function createMenu(menu) {
    console.log("CREATE MENU: ", menu);
    sqlite.run(
        `INSERT INTO menu (id, title, description, img, price) VALUES (
            ${menu.id},
            "${menu.title}",
            "${menu.description}",
            "${menu.img}",
            ${menu.price}
        )`
    );
}
exports.createMenu = createMenu;

function readMenus() {
    console.log('Read Menus');
    var rows = sqlite.run("SELECT * FROM menu");
    console.log('rows:', rows);
    return (rows);
}
exports.readMenus = readMenus;

function readMenu(id) {
    console.log("Read Menu id: " + id);
    var rows = sqlite.run("SELECT * FROM menu where id = " + id);
    console.log('rows:', rows);
    return (rows);
}
exports.readMenu = readMenu

function updateMenu(menu) {
    sqlite.run(`UPDATE menu SET 
        title = "${menu.title}",
        description = "${menu.description}",
        img = "${menu.img}",
        price = ${menu.price}
        where id = ${menu.id}`);
    console.log("Update Menu id: " + menu.id);
}
exports.updateMenu = updateMenu;

function deleteMenu(id) {
    console.log(`DELETE FROM menu WHERE id = ${id}`);
}
exports.deleteMenu = deleteMenu;

