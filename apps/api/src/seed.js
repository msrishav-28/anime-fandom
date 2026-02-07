const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Artifact = require('./models/Artifact');
const User = require('./models/User');
const Theory = require('./models/Theory'); // Added Theory model
const connectDB = require('./config/db');

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await Artifact.deleteMany();
        await User.deleteMany();
        await Theory.deleteMany();

        console.log('Cleared existing data...');

        // ---------------------------------------------------------
        // 1. Create Users (Admin & Mock Community)
        // ---------------------------------------------------------
        const admin = await User.create({
            name: 'System Administrator',
            email: 'admin@neuroarchive.com',
            rank: 'Architect',
            ram_balance: 9999,
            title: 'Head Archivist'
        });

        const mockUsers = await User.insertMany([
            { name: 'ShadowMonarch_99', email: 'user1@test.com', rank: 'Operator', ram_balance: 2400 },
            { name: 'LetMeSoloHer', email: 'user2@test.com', rank: 'Decoder', ram_balance: 600 },
            { name: 'LoreHunter_Vaati', email: 'user3@test.com', rank: 'Oracle', ram_balance: 15000 }
        ]);

        console.log(`Created ${mockUsers.length + 1} users...`);

        // ---------------------------------------------------------
        // 2. Artifacts: SOLO LEVELING
        // ---------------------------------------------------------
        const soloLevelingArtifacts = [
            {
                wiki_slug: 'solo-leveling',
                slug: 'sung-jin-woo',
                type: 'character',
                title: 'Sung Jin-Woo',
                subtitle: 'The Shadow Monarch',
                hero_image: 'https://static.wikia.nocookie.net/solo-leveling/images/e/e9/Sung_Jinwoo_Shadow_Monarch_design.jpg',
                ram_cost: 0,
                created_by: admin._id,
                data: {
                    level: 146,
                    class: 'Necromancer > Shadow Monarch',
                    guild: 'Ahjin Guild',
                    stats: {
                        strength: 324,
                        agility: 340,
                        intelligence: 340,
                        vitality: 320,
                        sense: 319
                    }
                },
                tags: ['protagonist', 'monarch', 's-rank', 'awakened'],
                lore: [
                    {
                        heading: "Origin Point",
                        content: "Born as an E-Rank Hunter, known as the 'Weakest Weapon of Humanity'. Reawakened as a Player after the Cartenon Temple Double Dungeon incident."
                    },
                    {
                        heading: "System Capabilities",
                        content: "Possesses unique 'Level Up' ability denied to other Hunters. Can extract shadows from defeated corpses to form a loyal army."
                    }
                ]
            },
            {
                wiki_slug: 'solo-leveling',
                slug: 'cha-hae-in',
                type: 'character',
                title: 'Cha Hae-In',
                subtitle: 'The Dancer',
                hero_image: 'https://static.wikia.nocookie.net/solo-leveling/images/6/66/Cha_Hae-In.jpg',
                ram_cost: 0,
                created_by: admin._id,
                data: {
                    rank: 'S-Rank',
                    guild: 'Hunters Guild (Vice-Master)',
                    special_ability: 'Mana Smell',
                    stats: {
                        strength: 280,
                        agility: 310,
                        intelligence: 150,
                        vitality: 220
                    }
                },
                tags: ['s-rank', 'hunter', 'swordswoman'],
                lore: [
                    {
                        heading: "Combat Style",
                        content: "Master of the 'Sword Dance', a unique fighting style that relies on extreme speed and precision. Known to dominate A-Rank dungeons solo."
                    },
                    {
                        heading: "Condition",
                        content: "Sensitive to the smell of Mana, which she describes as foul. Sung Jin-Woo is the only hunter who smells 'pleasant' to her."
                    }
                ]
            },
            {
                wiki_slug: 'solo-leveling',
                slug: 'igris',
                type: 'character',
                title: 'Igris',
                subtitle: 'The Blood-Red Commander',
                hero_image: 'https://static.wikia.nocookie.net/solo-leveling/images/4/4b/Igris.jpg',
                ram_cost: 0,
                created_by: admin._id,
                data: {
                    rank: 'Marshal',
                    original_class: 'Knight',
                    loyalty: 'Absolute',
                    stats: {
                        strength: 290,
                        agility: 300,
                        intelligence: 250
                    }
                },
                tags: ['shadow', 'marshal', 'knight'],
                lore: [
                    {
                        heading: "Origins",
                        content: "Formerly the boss of the Job Change Quest dungeon. Became Sung Jin-Woo's first major Shadow Soldier."
                    },
                    {
                        heading: "Personality",
                        content: "Chivalrous and loyal. protecting his liege with absolute dedication. Often seen guarding Jin-Woo's family."
                    }
                ]
            }
        ];

        // ---------------------------------------------------------
        // 3. Artifacts: ELDEN RING
        // ---------------------------------------------------------
        const eldenRingArtifacts = [
            {
                wiki_slug: 'elden-ring',
                slug: 'malenia-blade-of-miquella',
                type: 'character',
                title: 'Malenia',
                subtitle: 'Blade of Miquella',
                hero_image: 'https://static.wikia.nocookie.net/eldenring/images/9/96/Malenia%2C_Blade_of_Miquella_preview.jpg',
                ram_cost: 0,
                created_by: admin._id,
                data: {
                    location: 'Elphael, Brace of the Haligtree',
                    drops: ['Remembrance of the Rot Goddess', 'Malenia\'s Great Rune'],
                    hp: 33251,
                    phases: 2
                },
                tags: ['demigod', 'empyrean', 'boss', 'rot'],
                lore: [
                    {
                        heading: "The Cursed Twins",
                        content: "Born of Radagon and Marika, Malenia was cursed with the Scarlet Rot from birth. She dedicated her life to protecting her twin brother Miquella."
                    },
                    {
                        heading: "The Battle of Caelid",
                        content: "Fought Starscourge Radahn to a standstill. To avoid defeat, she bloomed the Scarlet flower, destroying the entire region of Caelid."
                    }
                ]
            },
            {
                wiki_slug: 'elden-ring',
                slug: 'starscourge-radahn',
                type: 'character',
                title: 'Starscourge Radahn',
                subtitle: 'Conqueror of the Stars',
                hero_image: 'https://static.wikia.nocookie.net/eldenring/images/3/3a/Starscourge_Radahn_preview.jpg',
                ram_cost: 0,
                created_by: admin._id,
                data: {
                    location: 'Wailing Dunes, Caelid',
                    drops: ['Remembrance of the Starscourge', 'Radahn\'s Great Rune'],
                    hp: 9572,
                    weakness: 'Scarlet Rot'
                },
                tags: ['demigod', 'general', 'gravity-magic'],
                lore: [
                    {
                        heading: "The Starscourge",
                        content: "Mastered Gravity Magic to hold back the very stars, effectively pausing the fate of the Carian Royal Family. He rides his beloved steed, Leonard."
                    }
                ]
            },
            {
                wiki_slug: 'elden-ring',
                slug: 'rivers-of-blood',
                type: 'item',
                title: 'Rivers of Blood',
                subtitle: 'Cursed Katana',
                hero_image: 'https://static.wikia.nocookie.net/eldenring/images/b/b5/Rivers_of_Blood.png',
                ram_cost: 0,
                created_by: admin._id,
                data: {
                    type: 'Katana',
                    scaling: { ARC: 'D', DEX: 'D', STR: 'E' },
                    passive: 'Blood Loss Buildup (50)',
                    skill: 'Corpse Piler'
                },
                tags: ['weapon', 'bleed', 'arcane', 'meta'],
                lore: [
                    {
                        heading: "Okina's Curse",
                        content: "Weapon of Okina, a swordsman from the Land of Reeds. When he felt the curse of his blood, he offered it to the Formless Mother."
                    }
                ]
            }
        ];

        await Artifact.insertMany([...soloLevelingArtifacts, ...eldenRingArtifacts]);
        console.log('Seeded Artifacts for Solo Leveling & Elden Ring...');

        // ---------------------------------------------------------
        // 4. Seed Theories (Comments)
        // ---------------------------------------------------------
        const theories = [
            {
                wiki_slug: 'solo-leveling',
                artifact_slug: 'sung-jin-woo',
                user: { name: mockUsers[0].name, rank: mockUsers[0].rank, avatar: 'https://placehold.co/100' },
                content: "The Architect definitely rigged the system for him. No E-rank survives that double dungeon.",
                upvotes: 45
            },
            {
                wiki_slug: 'elden-ring',
                artifact_slug: 'malenia-blade-of-miquella',
                user: { name: mockUsers[1].name, rank: mockUsers[1].rank, avatar: 'https://placehold.co/100' },
                content: "Waterfowl Dance is actually fair if you use a freezing pot. Change my mind.",
                upvotes: 999
            }
        ];

        await Theory.insertMany(theories);
        console.log('Seeded Theories (Comments)...');

        console.log('✅ Database Seeded Successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
