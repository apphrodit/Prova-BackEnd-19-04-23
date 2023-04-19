DROP DATABASE IF EXISTS mercadao;
CREATE DATABASE mercadao;

USE mercadao;

CREATE TABLE vendedores(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    matricula INT NOT NULL
);

CREATE TABLE produtos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor float (4, 2) NOT NULL
);

CREATE TABLE vendas(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    quantidade INT NOT NULL,
    produto_id INT NOT NULL,
    vendedor_id INT NOT NULL,
        FOREIGN KEY (produto_id) REFERENCES produtos(id),
        FOREIGN KEY (vendedor_id) REFERENCES vendedores(id)
);

INSERT INTO vendedores (nome, matricula)
VALUES ('Stefany Antonella', 14644),
       ('Stella Viana', 01516),
       ('Tomás Isaac', 50913),
       ('Osvaldo Galvão', 72193);

INSERT INTO produtos (nome, valor)
VALUES ('Samsung Galaxy M53', 2211.11),
       ('Motorola Moto G42', 1499.00),
       ('Rainha das Chamas', 36.90),
       ('Cronicas Saxonicas - O cavaleiro da morte', 57.90),
       ('O Milagre da Manhã', 56.59),
       ('Lavadoura de Roupas Brastemp BWK12AB', 2199.00),
       ('Fogão Atlas 4 Bocas', 899.00);

INSERT INTO vendas(data, quantidade, produto_id, vendedor_id)
VALUES ('2023-04-18 09:08:39', 2, 1, 3),
       ('2023-04-18 09:08:39', 1 ,2 ,3),
       ('2023-04-18 09:08:39', 3, 1, 2),
       ('2023-04-18 09:08:39', 1, 3, 2),
       ('2023-04-18 09:08:39', 2, 2, 1),
       ('2023-04-18 09:08:39', 1, 3, 1);