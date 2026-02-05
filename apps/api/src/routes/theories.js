const express = require('express');
const router = express.Router({ mergeParams: true });
const { getTheories, createTheory } = require('../controllers/theories');

router.route('/')
    .get(getTheories)
    .post(createTheory);

module.exports = router;
