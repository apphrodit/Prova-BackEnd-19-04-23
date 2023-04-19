const express = require('express');
const router_produtos = express.Router();
const router_vendas = express.Router();
const router_vendedores = express.Router();


//Rotas Dos Produtos
const Produtos = require("../controllers/produtos");

router_produtos.post('/produtos/cadastrar', Produtos.cadastrar);
router_produtos.get('/produtos/listar', Produtos.listar);
router_produtos.get('/produtos/listar/:id', Produtos.listar);
router_produtos.put('/produtos/alterar/:id', Produtos.alterar);
router_produtos.delete('/produtos/excluir/:id', Produtos.excluir);



//Rotas Das Vendas
const Vendas = require('../controllers/vendas')

router_vendas.post('/vendas/cadastrar', Vendas.cadastrar);
router_vendas.get('/vendas/listar', Vendas.listar)
router_vendas.get('/vendas/listar/:id', Vendas.listar);
router_vendas.put('/vendas/alterar/:id', Vendas.alterar);
router_vendas.delete('/vendas/excluir/:id', Vendas.excluir);


//Rotas Dos Vendedores
const Vendedores = require("../controllers/vendedores");

router_vendedores.post('/vendedores/cadastrar', Vendedores.cadastrar);
router_vendedores.get('/vendedores/listar', Vendedores.listar);
router_vendedores.get('/vendedores/listar/:id', Vendedores.listar);
router_vendedores.put('/vendedores/alterar/:id', Vendedores.alterar);
router_vendedores.delete('/vendedores/excluir/:id', Vendedores.excluir);

module.exports = router_produtos;
module.exports = router_vendas;
module.exports = router_vendedores;