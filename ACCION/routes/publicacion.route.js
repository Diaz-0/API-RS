const express = require('express');
const router = express.Router();
const publicacionController = require('../controllers/publicacion.controller');

router.post('/crear', publicacionController.createPublicacion);

module.exports = router;