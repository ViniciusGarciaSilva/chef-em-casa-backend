"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite = require('sqlite-sync');
sqlite.connect('chef-em-casa.db');
function getOrders() {
    var rows = sqlite.run("SELECT * FROM orders o LEFT JOIN  customer c ON o.customerId = c.id ");
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

function insertOrder(providerId, customerId, description, schedule, price, status) {
    var rows = sqlite.run("INSERT INTO orders (providerId, customerId, description, schedule, price, status) values (" +providerId + ", " + customerId + ", '" + description + "', '" + schedule + "', " + price + ", " + status + ")");
    console.log('rows:', rows);
    return (rows);
}
exports.insertOrder = insertOrder;