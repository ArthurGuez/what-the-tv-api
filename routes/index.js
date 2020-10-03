const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use('/users', require('./users'));
router.use('/shows', require('./shows'));
router.use('/seasons', require('./seasons'));
router.use('/episodes', require('./episodes'));
router.use('/snapshots', require('./snapshots'));

module.exports = router;
