const express = require('express');
const router = express.Router();
const { getUserProfile, awardRAM } = require('../controllers/users');

router.route('/:email')
    .get(getUserProfile);

router.route('/:email/ram')
    .post(awardRAM);

module.exports = router;
