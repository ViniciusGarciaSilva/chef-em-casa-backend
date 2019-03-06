import express from 'express';
const router = express.Router();

const menuController = require('../controllers/menu.controller')

router.get('/', menuController.get);
router.get('/:id', menuController.getById);
router.post('/', menuController.post);
router.put('/:id', menuController.put);
router.delete('/:id', menuController.delete);

module.exports = router;