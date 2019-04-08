"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var menuController = require('../controllers/menu.controller');
router.get('/', menuController.get); // Read all
router.get('/:id', menuController.getById); // Read onde
router.post('/', menuController.post); // Create 
router.put('/:id', menuController.put); // Update one
router.delete('/:id', menuController.delete); // Delete
module.exports = router;
