const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/', contactController.createContact);
router.get('/artisan/:artisanId', contactController.getContactsByArtisan);

module.exports = router;
