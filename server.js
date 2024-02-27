const express = require('express');
const app = express();
const port = 3000;
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/product', productRoutes);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})