import express from 'express';
const router = express.Router();

const chefController = require('../controllers/menu.controller');

router.get('/', chefController.get);
router.get('/:id', chefController.getById);
router.post('/', chefController.post);
router.put('/:id', chefController.put);
router.delete('/:id', chefController.delete);

module.exports = router;