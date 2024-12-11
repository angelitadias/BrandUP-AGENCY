CREATE DATABASE brandup;
USE brandup;
CREATE TABLE empresa (
    cnpj  INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    telefone VARCHAR(100),
    fk_usuario_id VARCHAR(100)
);

CREATE TABLE usuario (
    empresa VARCHAR(100),
    nome VARCHAR(100),
    email VARCHAR(100),
    cpf VARCHAR(100),
    telefone VARCHAR(100),
    id INT AUTO_INCREMENT PRIMARY KEY
);
 
ALTER TABLE empresa ADD CONSTRAINT FK_empresa_2
    FOREIGN KEY (fk_usuario_id)
    REFERENCES usuario (id)
    ON DELETE RESTRICT;


