var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get('/ranking', medidaController.listarRanking);

module.exports = router;