# User Stories & Acceptance Criteria

This document defines the core user journeys and acceptance criteria for the Neuro-Archive MVP.

## Epic 1: Character Management

### Story 1: Create Character Page
**As a** logged-in Archivist (Rank: Decoder+)  
**I want to** create a new character page  
**So that** I can contribute to the wiki and earn RAM.

**Acceptance Criteria:**
- [ ] "Create Artifact" button is visible in the sidebar/HUD.
- [ ] Form includes:
  - Title (Text, Required)
  - Subtitle (Text, Optional)
  - Type (Dropdown: Character, Item, Location)
  - Hero Image (Upload)
- [ ] Submitting validates that the Title is unique.
- [ ] User is redirected to the new page `/wikis/[slug]/artifacts/[artifact-slug]`.
- [ ] User's RAM balance increases by 50.
- [ ] Toast notification: "Data Shard Created".

### Story 2: Edit Lore Block
**As a** logged-in Archivist  
**I want to** edit the text of a lore block  
**So that** I can correct errors or add new information.

**Acceptance Criteria:**
- [ ] Clicking "Edit" on a block opens the Lexical editor.
- [ ] "Save" button commits changes to the `edits` collection (history).
- [ ] "Cancel" discards changes.
- [ ] RAM balance increases by 20.

---

## Epic 2: Gamification

### Story 3: Earn RAM
**As a** user  
**I want to** earn RAM for reading pages  
**So that** I can level up my rank.

**Acceptance Criteria:**
- [ ] Scrolling to the bottom of an article triggers a "Read Complete" event.
- [ ] RAM awarded: 10 points (once per 24h per page).
- [ ] Animate RAM counter in the HUD.

### Story 4: Unlock Profile Theme
**As a** high-ranking user (Operator)  
**I want to** change my profile theme to "Liquid Gold"  
**So that** I can show off my status.

**Acceptance Criteria:**
- [ ] Theme selector in Profile Settings shows locked/unlocked states.
- [ ] "Liquid Gold" option enabled only if Total RAM > 500.
- [ ] Selecting it updates the user's `theme` preference in DB.
- [ ] UI immediately reflects the new color palette.

---

## Epic 3: Social & Real-Time

### Story 5: Add Inline Theory
**As a** user  
**I want to** highlight text and add a comment  
**So that** I can discuss specific plot points.

**Acceptance Criteria:**
- [ ] Select text > Floating toolbar appears with "Add Theory" button.
- [ ] Clicking opens a comment drawer.
- [ ] Submitting adds the comment to the `theories` collection.
- [ ] The highlighted text gets a permanent yellow underline.
- [ ] Other users viewing the page see the underline and can click to view the thread.

### Story 6: Hype Meter
**As a** user  
**I want to** see how many people are viewing the page  
**So that** I feel the community presence.

**Acceptance Criteria:**
- [ ] HUD displays a "Live Viewers" count.
- [ ] Count updates in real-time via Socket.io.
- [ ] If count > 100, the page background pulsing animation speeds up ("Hype Mode").

---

## Epic 4: Administration

### Story 7: Lock Page
**As a** Moderator (Rank: Architect)  
**I want to** lock a page  
**So that** prevent vandalism during high-traffic events.

**Acceptance Criteria:**
- [ ] "Lock" button visible in Admin toolbar.
- [ ] Locking prevents all edits from non-admins.
- [ ] Users see a "Locked by Admin" padlock icon.
