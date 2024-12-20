const dotenv = require('dotenv'); // Importar dotenv para manejar las variables de entorno
dotenv.config(); // Cargar las variables de entorno desde el archivo .env

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

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(() => {
    console.log('Failed to connect to Database MongoDB');
});