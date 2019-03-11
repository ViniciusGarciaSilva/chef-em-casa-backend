"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');
function getOrders() {
    var rows = sqlite.run("SELECT * FROM orders");
    console.log('rows:', rows);
    return (rows);
}
exports.getOrders = getOrders;

function getOrderById(id) {
    var rows = sqlite.run("SELECT * FROM orders where id = " + id);
    console.log('rows:', rows);
    return (rows);
}
exports.getOrderById = getOrderById;
