const mongoose = require('mongoose');

const theorySchema = new mongoose.Schema({
    wiki_slug: {
        type: String,
        required: true,
        index: true
    },
    artifact_slug: {
        type: String,
        required: true,
        index: true
    },
    user: {
        name: String,
        rank: String,
        avatar: String
    },
    content: {
        type: String,
        required: true,
        maxlength: 1000
    },
    // Gamification: Upvotes award RAM
    upvotes: {
        type: Number,
        default: 0
    },
    is_spoiler: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Theory', theorySchema);
