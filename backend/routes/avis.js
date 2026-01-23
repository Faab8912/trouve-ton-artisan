const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');

router.get('/artisan/:artisanId', avisController.getAvisByArtisan);
router.post('/', avisController.createAvis);

module.exports = router;
