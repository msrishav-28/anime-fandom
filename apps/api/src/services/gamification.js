const User = require('../models/User');

/**
 * Service to handle gamification logic (RAM, Ranks, Badges)
 */
class GamificationService {
    /**
     * Award RAM to a user and handle rank upgrades
     * @param {String} email - User email
     * @param {Number} amount - Amount of RAM to add
     * @param {String} source - Source of RAM (e.g., 'read_artifact')
     * @returns {Object} { ram_balance, rank, leveledUp }
     */
    async awardRAM(email, amount, source) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        // Update RAM
        user.ram_balance += amount;
        user.total_ram_earned += amount;

        const oldRank = user.rank;
        let newRank = oldRank;

        // Check for Rank Up
        // Glitch (0) -> Decoder (500) -> Operator (2000) -> Architect (5000) -> Oracle (10000)
        // Note: Blueprint says: Decoder(500), Operator(2000), Architect(5000), Oracle(10000)
        // I will align with standard progression.
        if (user.total_ram_earned >= 10000) newRank = 'Oracle';
        else if (user.total_ram_earned >= 5000) newRank = 'Architect';
        else if (user.total_ram_earned >= 2000) newRank = 'Operator';
        else if (user.total_ram_earned >= 500) newRank = 'Decoder';

        const leveledUp = newRank !== oldRank;
        user.rank = newRank;

        await user.save();

        return {
            ram_balance: user.ram_balance,
            rank: user.rank,
            leveledUp
        };
    }

    /**
     * Calculate RAM reward for an action
     * @param {String} actionType 
     * @returns {Number}
     */
    calculateReward(actionType) {
        const rewards = {
            'read_artifact': 10,
            'create_theory': 20,
            'create_artifact': 50,
            'edit_artifact': 20
        };
        return rewards[actionType] || 0;
    }
}

module.exports = new GamificationService();
