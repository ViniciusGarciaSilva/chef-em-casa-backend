"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');
function getMenus() {
    var rows = sqlite.run("SELECT * FROM menus");
    console.log('rows:', rows);
    return (rows);
}
exports.getMenus = getMenus;
