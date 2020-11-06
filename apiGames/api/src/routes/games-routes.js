const express = require('express');
const router = express.Router();
const controller = require('../controllers/games-controller')

router.get('/games', controller.getgames)

router.post('/games', controller.addgames)

router.get('/games/:id', controller.getgamesById)

router.put('/games/:id', controller.updategames)

router.delete('/games/:id', controller.deletegames)

module.exports = router;