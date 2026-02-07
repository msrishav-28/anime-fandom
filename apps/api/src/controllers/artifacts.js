const Artifact = require('../models/Artifact');

// @desc    Get all artifacts for a wiki
// @route   GET /api/wikis/:wiki_slug/artifacts
exports.getArtifacts = async (req, res) => {
    try {
        const { wiki_slug } = req.params;
        const artifacts = await Artifact.find({ wiki_slug });
        res.json(artifacts);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// @desc    Create a new artifact
// @route   POST /api/wikis/:wiki_slug/artifacts
exports.createArtifact = async (req, res) => {
    try {
        const { wiki_slug } = req.params;

        const artifact = await Artifact.create({
            ...req.body,
            wiki_slug
        });

        // Award RAM to user
        if (req.body.userEmail) {
            const reward = require('../services/gamification').calculateReward('create_artifact');
            await require('../services/gamification').awardRAM(req.body.userEmail, reward, 'create_artifact');
        }

        res.status(201).json(artifact);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Artifact with this slug already exists' });
        }
        res.status(500).json({ error: err.message });
    }
};

// @desc    Get single artifact
// @route   GET /api/wikis/:wiki_slug/artifacts/:slug
exports.getArtifact = async (req, res) => {
    try {
        const { wiki_slug, slug } = req.params;
        const artifact = await Artifact.findOne({ wiki_slug, slug });

        if (!artifact) {
            return res.status(404).json({ error: 'Artifact not found' });
        }

        res.json(artifact);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};
