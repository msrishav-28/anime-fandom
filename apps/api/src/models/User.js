const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: String, // from OAuth

    // Gamification
    rank: {
        type: String,
        enum: ['Glitch', 'Decoder', 'Architect', 'Oracle', 'Shadow'],
        default: 'Glitch'
    },
    ram_balance: {
        type: Number,
        default: 0
    },
    total_ram_earned: {
        type: Number,
        default: 0
    },

    // Customization
    theme_preference: {
        type: String,
        default: 'void' // 'void', 'cyber-yellow', 'liquid-gold'
    },

    // Contributions
    edits_count: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
