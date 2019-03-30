"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//var cors = require('cors');
var router = express_1.default.Router();
var orderController = require('../controllers/order.controller');
router.get('/', orderController.get);
router.get('/:id', orderController.getById);
router.post('/', orderController.post);
router.put('/', orderController.put);
router.delete('/:id', orderController.delete);
module.exports = router;
