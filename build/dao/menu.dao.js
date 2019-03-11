"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');
function getMenus() {
    var rows = sqlite.run("SELECT * FROM menu");
    console.log('rows:', rows);
    return (rows);
}
exports.getMenus = getMenus;

function getMenuById(id) {
    var rows = sqlite.run("SELECT * FROM menu where id = " + id);
    console.log('rows:', rows);
    return (rows);
}
exports.getMenuById = getMenuById;
