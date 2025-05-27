var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/armazenarPontuacao", usuarioController.armazenarPontuacao);

router.get(
	"/obterPontuacoes/:userId/:quizType",
	usuarioController.obterPontuacoes
);  

router.post("/armazenarPontuacaoJogo", usuarioController.armazenarPontuacaoJogo);

router.get('/obterNivel/:userId', usuarioController.obterNivel);

module.exports = router;