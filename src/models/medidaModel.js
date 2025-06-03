var database = require("../database/config");

function buscarRanking() {
    const instrucaoSql = `
        SELECT u.nome, SUM(j.pontos) AS total_pontos
        FROM Jogo j
        JOIN usuario u ON j.fk_usuario = u.id
        GROUP BY u.id
        ORDER BY total_pontos DESC
        LIMIT 5;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    buscarRanking
}
