const User = require('../models/User');

// @desc    Get user profile
// @route   GET /api/users/:email
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// @desc    Award RAM to user
// @route   POST /api/users/:email/ram
const GamificationService = require('../services/gamification');

// @desc    Award RAM to user
// @route   POST /api/users/:email/ram
exports.awardRAM = async (req, res) => {
    try {
        const { amount, source } = req.body; // source: 'read_artifact', 'create_artifact'

        const result = await GamificationService.awardRAM(req.params.email, amount, source);

        res.json({
            success: true,
            ram_balance: result.ram_balance,
            rank: result.rank,
            leveledUp: result.leveledUp
        });
    } catch (err) {
        if (err.message === 'User not found') {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(500).json({ error: 'Server Error' });
    }
};
