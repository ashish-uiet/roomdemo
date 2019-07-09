const express = require("express");
const router = express.Router();

const roomController = require('../controllers/roomController');
router.post('/createRoom',roomController.createRoom);
router.post('/bookRoom',roomController.bookRoom);

module.exports = router;