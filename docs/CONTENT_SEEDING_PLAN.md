# Content Seeding Plan

To ensure a vibrant launch, we must seed the platform with high-quality content for the 5 pilot wikis.

## Strategy
Populate each pilot wiki with **100+ high-quality pages** before public launch. This solves the "empty wikis" problem and gives users examples to follow.

---

## 1. Pilot Wikis

| Wiki Slug | Theme | Key Mechanic |
|-----------|-------|--------------|
| `solo-leveling` | Shadow Purple | Hunter Ranks |
| `elden-ring` | Golden Order | Rune Stats |
| `arcane` | Hextech Blue | Tech vs Magic |
| `jujutsu-kaisen` | Cursed Red | Cursed Energy |
| `one-piece` | Ocean Blue | Bounty System |

---

## 2. Content Targets per Wiki

Each wiki must have:

### A. Core Characters (50 Pages)
- **Protagonists/Antagonists** (Detailed lore, 3D models if available)
- **Side Characters** (Basic relations, stats)
- **Groups/Factions** (e.g., The Straw Hat Pirates, The Monarchs)

### B. Equipment & Items (30 Pages)
- **Weapons** (Stats, 3D models)
- **Artifacts/Key Items** (Lore importance)

### C. Locations (10 Pages)
- **Key Cities/Regions**
- **Dungeons/Battlegrounds**

### D. Episodes/Chapters (10 Pages)
- **Summary of first arc** (to test spoilering system)

---

## 3. Seeding Workflow

**Team:** 2 Content Writers + 1 Moderator

**Process:**
1. **Source**: Aggregate data from Fandom, Reddit, and Official Guidebooks.
   *Ensure we add attribution where required.*
2. **Transform**: Rewrite content to fit our "Cyberpunk/Sci-Fi" data-shard tone.
   - *Instead of "He was born in...", use "Origin Point: [Date]"*
   - *Use "Power Level" or "Stats" blocks.*
3. **Enhance**:
   - Generate/Find transparent PNGs for "HoloCards".
   - Find free-to-use CC0 GLB models for key items (e.g., a sword).
4. **Input**: Use the Admin CMS to bulk-create pages.
5. **Review**: Verify 3D assets load and spoiler tags work.

## 4. Timeline (2 Weeks)

- **Week 1:**
  - Days 1-2: Solo Leveling (Focus: Shadow Monarch, Hunters)
  - Days 3-4: Elden Ring (Focus: Demigods, Weapons)
  - Days 5-6: Arcane (Focus: Jinx/Vi, Hextech)
  - Day 7: Buffer/Review

- **Week 2:**
  - Days 1-2: Jujutsu Kaisen (Focus: Gojo, Sukuna)
  - Days 3-4: One Piece (Focus: Straw Hats)
  - Days 5-7: Cross-linking and "Theory" planting (adding fake comments to spark discussion).

## 5. "Theory" Planting
To make the site feel alive, we will seed ~20 "Theory" comments on controversial pages.
- *Example (JJK):* "Highlighting the prison realm seal: 'I bet he gets out in ch 220.'"
- *Example (One Piece):* "Is Shanks actually a villain?"

## 6. Resources
- **Assets Drive:** `link-to-google-drive` (Images, Model GLBs)
- **Style Guide:** Refer to existing content style guide.

## 7. Implementation Status
- [x] **Seed Script Created**: `apps/api/src/seed.js` contains rich data for:
    - **Solo Leveling**: Sung Jin-Woo, Cha Hae-In, Igris.
    - **Elden Ring**: Malenia, Starscourge Radahn, Rivers of Blood.
    - **Theories**: Mock comments for initial engagement.
- [ ] **Execution**: Run `node src/seed.js` after configuring `MONGODB_URI` in `apps/api/.env`.
