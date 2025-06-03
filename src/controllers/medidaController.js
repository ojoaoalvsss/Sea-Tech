var medidaModel = require("../models/medidaModel");


function listarRanking(req, res) {
    medidaModel.buscarRanking()
        .then(resultado => {
            res.json(resultado); // envia o array completo
        })
        .catch(erro => {
            console.error("Erro ao buscar ranking:", erro);
            res.status(500).json({ erro: 'Erro ao buscar ranking' });
        });
}

module.exports = {
    listarRanking
}