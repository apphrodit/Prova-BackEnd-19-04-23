const con = require('../dao/connection');
const Produtos = require('../models/produtos');

const cadastrar = (req,res) => {
    let produtos = new Produtos(req.body)
    con.query(produtos.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let produtos = new Produtos(req.params)
    con.query(produtos.read(), (err, result) => {
        if(err == null){
            res.json(result).end()
        } 
    })
}

const alterar = (req,res) => {
    let produtos = new Produtos(req.body)
    con.query(produtos.update(), (err, result) => {
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req,res) => {
    let produtos = new Produtos(req.params)
    con.query(produtos.delete(), (err,result) =>{
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
}