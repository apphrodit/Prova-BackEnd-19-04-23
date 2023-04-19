const con = require('../dao/connection');
const Vendedores = require('../models/vendedores');

const cadastrar = (req,res) => {
    let vendedores = new Vendedores(req.body)
    con.query(vendedores.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let vendedores = new Vendedores(req.params)
    con.query(vendedores.read(), (err, result) => {
        if(err == null){
            res.json(result).end()
        } 
    })
}

const alterar = (req,res) => {
    let vendedores = new Vendedores(req.body)
    con.query(vendedores.update(), (err, result) => {
        if(result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req,res) => {
    let vendedores = new Vendedores(req.params)
    con.query(vendedores.delete(), (err,result) =>{
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