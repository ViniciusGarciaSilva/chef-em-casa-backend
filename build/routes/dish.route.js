"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var dishController = require('../controllers/dish.controller');
router.get('/', dishController.get);
router.get('/:id', dishController.getById);
router.get('/menuDishes/:id', dishController.getMenuDishes)
router.post('/', dishController.post);
router.put('/:id', dishController.put);
router.delete('/:id', dishController.delete);
module.exports = router;
