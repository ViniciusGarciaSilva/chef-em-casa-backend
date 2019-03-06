import express from 'express';
const router = express.Router();

const dishontroller = require('../controllers/menu.controller');

router.get('/', dishontroller.get);
router.get('/:id', dishontroller.getById);
router.post('/', dishontroller.post);
router.put('/:id', dishontroller.put);
router.delete('/:id', dishontroller.delete);

module.exports = router;