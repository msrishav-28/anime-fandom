const express = require('express');
const router = express.Router({ mergeParams: true });
const { getArtifacts, createArtifact, getArtifact } = require('../controllers/artifacts');

router.route('/')
    .get(getArtifacts)
    .post(createArtifact);

router.route('/:slug')
    .get(getArtifact);

module.exports = router;
