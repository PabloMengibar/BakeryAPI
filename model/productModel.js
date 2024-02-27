const pool = require('../helpers/db');

//bring all products
module.exports =async function getAllProducts() {
    const dbconnection = await pool.getConnection();
    const results = await dbconnection.query('SELECT * FROM product');
    dbconnection.release();
    return results;
}
//bring a product by id
module.exports =async function getProductById(id) {
    const dbconnection = await pool.getConnection();
    const results = await dbconnection.query('SELECT * FROM product WHERE id = ?', [id]);
    dbconnection.release();
    return results[0];
}
//add a product
module.exports =async function addProduct(title, state, description) {
    const dbconnection = await pool.getConnection();
    const result = await dbconnection.query('INSERT INTO product (title, state, description, creation) VALUES (?, ?, ?, NOW())', [title, state, description]);
    dbconnection.release();
    return result;
}
//delete a product by id
module.exports =async function deleteProduct(id) {
    const dbconnection = await pool.getConnection();
    const result = await dbconnection.query('DELETE FROM product WHERE id = ?', [id]);
    dbconnection.release();
    return result;
}
//update a product by id
module.exports =async function updateProduct(id, title, state, description) {
    const dbconnection = await pool.getConnection();
    const result = await dbconnection.query('UPDATE product SET title = ?, state = ?, description = ? WHERE id = ?', [title, state, description, id]);
    dbconnection.release();
    return result;
}


