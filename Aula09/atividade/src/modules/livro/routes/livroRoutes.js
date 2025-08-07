const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/', livroController.criar);
router.get('/', livroController.listar);

module.exports = router;