const mongoose = require('mongoose');

const artifactSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    wiki_slug: {
        type: String,
        required: true,
        index: true
    },
    type: {
        type: String,
        required: true,
        enum: ['character', 'item', 'location', 'episode', 'concept']
    },
    title: {
        type: String,
        required: true
    },
    subtitle: String,
    hero_image: String,

    // Polymorphic Data (Flexible structure based on type)
    data: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },

    // Gamification
    ram_cost: {
        type: Number,
        default: 0
    },

    // Meta
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    is_locked: {
        type: Boolean,
        default: false
    },
    tags: [String]
}, {
    timestamps: true
});

// Composite index for uniqueness within a wiki
artifactSchema.index({ wiki_slug: 1, slug: 1 }, { unique: true });

module.exports = mongoose.model('Artifact', artifactSchema);
