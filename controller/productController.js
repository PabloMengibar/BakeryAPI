const productModel = require('../model/productModel');
//product controllers
 
async function getAllProducts(req, res) {
    try {
        const results = await productModel.getAllProducts();
        res.status(200).send(results);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function getProductById(req, res) {
    const id = req.params.id;
    try {
        const product = await productModel.getProductById(id);
        if (!product) {
            res.status(404).send('Not found');
        } else {
            res.status(200).send(product);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function addProduct(req, res) {
    const { title, state, description } = req.body; 
    try {
        await productModel.addProduct(title, state, description);
        res.status(201).send('Product added');
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function deleteProduct(req, res) {
    const id = req.params.id;
    try {
        const result = await productModel.deleteProduct(id);
        if (result.affectedRows === 0) {
            res.status(404).send('Not found');
        } else {
            res.status(200).send('Product deleted');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function updateProduct(req, res) {
    const id = req.params.id;
    const { title, state, description } = req.body; 
    try {
        const result = await productModel.updateProduct(id, title, state, description);
        if (result.affectedRows === 0) {
            res.status(404).send('Not found');
        } else {
            res.status(200).send('Product updated');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
};
