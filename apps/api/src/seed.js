const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Artifact = require('./models/Artifact');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Artifact.deleteMany();
        await User.deleteMany();

        // Create Admin User
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@neuroarchive.com',
            rank: 'Architect',
            ram_balance: 9999
        });

        console.log(`User created: ${admin.name}`);

        // Create Sample Artifact: Sung Jin-Woo
        const sjw = await Artifact.create({
            wiki_slug: 'solo-leveling',
            slug: 'sung-jin-woo',
            type: 'character',
            title: 'Sung Jin-Woo',
            subtitle: 'The Shadow Monarch',
            hero_image: 'https://placehold.co/600x800/1a1a1a/06b6d4/png?text=SJW',
            ram_cost: 0,
            created_by: admin._id,
            data: {
                level: 146,
                class: 'Necromancer',
                guild: 'Ahjin Guild',
                stats: {
                    strength: 324,
                    agility: 340,
                    intelligence: 340,
                    sense: 319
                }
            },
            tags: ['protagonist', 'monarch', 's-rank']
        });

        console.log(`Artifact created: ${sjw.title}`);

        console.log('Database Seeded Successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
