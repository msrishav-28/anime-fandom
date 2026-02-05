const Theory = require('../models/Theory');
const User = require('../models/User');

// @desc    Get theories for an artifact
// @route   GET /api/wikis/:wiki_slug/artifacts/:artifact_slug/theories
exports.getTheories = async (req, res) => {
    try {
        const { wiki_slug, artifact_slug } = req.params;
        const theories = await Theory.find({ wiki_slug, artifact_slug }).sort({ createdAt: -1 });
        res.json(theories);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// @desc    Post a new theory
// @route   POST /api/wikis/:wiki_slug/artifacts/:artifact_slug/theories
exports.createTheory = async (req, res) => {
    try {
        const { wiki_slug, artifact_slug } = req.params;
        const { content, userEmail } = req.body;

        // Mock User Fetch (In real app, use Auth middleware)
        const user = await User.findOne({ email: userEmail || 'admin@neuroarchive.com' });

        if (!user) return res.status(401).json({ error: 'User not found' });

        const theory = await Theory.create({
            wiki_slug,
            artifact_slug,
            user: {
                name: user.name,
                rank: user.rank,
                avatar: user.image || "https://placehold.co/100"
            },
            content
        });

        // Award RAM for contributing
        user.ram_balance += 20;
        user.total_ram_earned += 20;
        await user.save();

        res.status(201).json(theory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
