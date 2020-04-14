const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.list);
router.get('/detalle/:id', heroesController.detail);
router.get('/bio/:id/:ok?', heroesController.bio);

module.exports = router;

