"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var chefController = require('../controllers/menu.controller');
router.get('/', chefController.get);
router.get('/:id', chefController.getById);
router.post('/', chefController.post);
router.put('/:id', chefController.put);
router.delete('/:id', chefController.delete);
module.exports = router;
