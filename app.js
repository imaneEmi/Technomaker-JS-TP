const express = require("express");
const axios = require('axios');
const products_routes = require('./src/Routes/routes')

const app = express();
const SERVER_PORT = 3000

app.set("view engine", "ejs");

app.listen(SERVER_PORT, () => {
    
});

app.use('/',products_routes)