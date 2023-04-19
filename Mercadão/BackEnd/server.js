const express = require('express');
const cors = require('cors');


const router_produtos = require("./src/routes/routes");
const router_vendas = require("./src/routes/routes");
const router_vendedores = require("./src/routes/routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router_produtos);
app.use('/', router_vendas);
app.use('/', router_vendedores);

app.listen(3000, () =>{
    console.log("Server Running on port 3000");
});