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
exports.awardRAM = async (req, res) => {
    try {
        const { amount, source } = req.body; // source: 'read_artifact', 'create_artifact'

        const user = await User.findOne({ email: req.params.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update RAM
        user.ram_balance += amount;
        user.total_ram_earned += amount;

        // Check for Rank Up
        // Glitch (0) -> Decoder (500) -> Architect (2000) -> Oracle (5000)
        if (user.total_ram_earned >= 5000) user.rank = 'Oracle';
        else if (user.total_ram_earned >= 2000) user.rank = 'Architect';
        else if (user.total_ram_earned >= 500) user.rank = 'Decoder';

        await user.save();

        res.json({
            success: true,
            ram_balance: user.ram_balance,
            rank: user.rank
        });
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
};
