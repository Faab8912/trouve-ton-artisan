const express = require('express');
const router = express.Router();

const artisansRouter = require('./artisans');
const categoriesRouter = require('./categories');
const avisRouter = require('./avis');
const contactRouter = require('./contact');

router.use('/artisans', artisansRouter);
router.use('/categories', categoriesRouter);
router.use('/avis', avisRouter);
router.use('/contact', contactRouter);

module.exports = router;
