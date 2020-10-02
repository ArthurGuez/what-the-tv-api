const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use('/users', require('./users'));
router.use('/snapshots', require('./snapshots'));
router.use('/shows', require('./shows'));

module.exports = router;
