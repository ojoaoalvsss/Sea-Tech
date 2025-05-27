var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// QUIZZ

function inserirPontuacaoUsuario(idUsuario, acertos, erros, fkCategoria) {
    var instrucaoSql = `INSERT INTO Resposta (acertos, erros, fk_usuario, fkCategoria) VALUES (${acertos}, ${erros} ,${idUsuario}, ${fkCategoria});`;
    return database.executar(instrucaoSql);
}

function verificarPontuacaoUsuario(idUsuario, categoriaID) {
    var instrucaoSql = `SELECT * FROM Resposta WHERE fk_usuario = ${idUsuario} AND fkCategoria = ${categoriaID};`;
    return database.executar(instrucaoSql)
}

function obterPontuacoes(userId, quizType) {
	const query = `
        SELECT acertos, erros
        FROM Resposta
        WHERE fk_usuario = ${userId} AND fkCategoria = ${quizType}
    `;
	return database.executar(query);
}

function atualizarPontuacaoUsuario(idUsuario, acertos, erros, fkCategoria) {
    var instrucaoSql = `UPDATE Resposta SET acertos = ${acertos}, erros = ${erros} WHERE fk_usuario = ${idUsuario} AND fkCategoria = ${fkCategoria};`;
    return database.executar(instrucaoSql);
}

// JOGO 

function verificarPontuacaoUsuarioJogo(idUsuario) {
    var instrucaoSql = `SELECT * FROM Jogo WHERE fk_usuario = ${idUsuario};`;
    return database.executar(instrucaoSql)
}

function inserirPontuacaoUsuarioJogo(idUsuario, pontos) {
    var instrucaoSql = `INSERT INTO Jogo (pontos, fk_usuario) VALUES (${pontos}, ${idUsuario});`;
    return database.executar(instrucaoSql);
}

function atualizarPontuacaoUsuarioJogo(idUsuario, pontos) {
    var instrucaoSql = `UPDATE Jogo SET pontos = ${pontos} WHERE fk_usuario = ${idUsuario};`;
    return database.executar(instrucaoSql);
}

function obterSomaAcertosPorCategoria(idUsuario) {
  const instrucaoSql = `
    SELECT fkCategoria, SUM(acertos) AS totalAcertos
    FROM Resposta
    WHERE fk_usuario = ${idUsuario}
    GROUP BY fkCategoria
  `;
  return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,

    // QUIZZ
    inserirPontuacaoUsuario,
    verificarPontuacaoUsuario,
    obterPontuacoes,
    atualizarPontuacaoUsuario,

    // JOGO
    verificarPontuacaoUsuarioJogo,
    inserirPontuacaoUsuarioJogo,
    atualizarPontuacaoUsuarioJogo,
    obterSomaAcertosPorCategoria
};