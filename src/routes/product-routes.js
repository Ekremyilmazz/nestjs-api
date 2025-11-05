const express = require('express');
const router = express.Router();
const productHandler = require('../handler/productHandler');
const jwtAuth = require('../middlewares/jwtAuth');

router.get('/', jwtAuth, productHandler.getAll);
router.get('/:id', jwtAuth, productHandler.getById);
router.post('/', jwtAuth, productHandler.addProduct);
router.put('/:id', jwtAuth, productHandler.updateById);
router.delete('/:id', jwtAuth, productHandler.deleteById);

module.exports = router;