const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');  
const app = express();
const productRoute = require('./routes/product.route.js');

app.use(express.json());//parse json data
app.use(express.urlencoded({extended: false}));//parse urlencoded data


app.use("/api/products",productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server');
});

mongoose.connect("mongodb+srv://admin:er7hdSFGxvPwYseC@backenddb.1d1yx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log('Failed to connect to Database MongoDB');
});