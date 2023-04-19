class Vendas{

    constructor(i){
        this.id = i.id;
        this.data = i.data;
        this.quantidade = i.quantidade;
        this.produto_id = i.produto_id;
        this.vendedor_id = i.vendedor_id;
    }

    create(){
        return `INSERT INTO vendas (data, quantidade, produto_id, vendedor_id)
        VALUES('${this.data}', ${this.quantidade}, ${this.produto_id}, ${this.vendedor_id})`;
    }

    read(){
        if(this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = ${this.id}`;
    }

    update(){
        return `UPDATE vendas SET data = '${this.data}', quatidade = ${this.quantidade}, produto_id = ${this.produto_id}, vendedor_id = ${this.vendedor_id} WHERE id = ${this.id}`;
    }
    
    delete(){
        return `DELETE FROM vendas WHERE id = ${this.id}`;
    }
}

module.exports = Vendas;