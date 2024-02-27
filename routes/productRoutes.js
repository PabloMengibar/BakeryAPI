const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const auth = require('../utils/auth');

//routes

router.get('/', productController.getAllProducts);
router.get('/:id', auth, productController.getProductById);
router.post('/', auth, productController.addProduct);
router.delete('/:id', auth, productController.deleteProduct);
router.put('/:id', auth, productController.updateProduct);

module.exports = router;
