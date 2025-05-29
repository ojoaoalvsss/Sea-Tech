create database Sea_Tech;

use Sea_Tech;

create table usuario(
id int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45)
);

CREATE TABLE Categoria (
	idCategoria INT PRIMARY KEY,
	categoria VARCHAR (45)
);

INSERT INTO Categoria VALUES
(1, 'Facil'),
(2, 'Médio'),
(3, 'Difícil'); 

CREATE TABLE Resposta (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    fkCategoria INT,
	FOREIGN KEY (fkCategoria) REFERENCES Categoria(idCategoria)
);

CREATE TABLE Jogo (
idJogo INT PRIMARY KEY AUTO_INCREMENT,
pontos INT,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150)
);

select * from Resposta;
select * from Categoria;
select * from usuario;
select * from Jogo;
select * from aviso;

