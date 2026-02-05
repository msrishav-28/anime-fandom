```markdown
# NEURO-ARCHIVE: Technical Blueprint
**Project Code:** NA-001  
**Version:** 1.0.0  
**Target Launch:** Q2 2026  
**Stack:** MERN + React Three Fiber

---

## 1. PROJECT OVERVIEW

### 1.1 Executive Summary
**Neuro-Archive** is a next-generation wiki platform designed specifically for Gen Z anime, gaming, and series fandoms. Unlike traditional wikis (Fandom, Wikia) that feel like static textbooks, Neuro-Archive transforms information consumption into an **immersive, gamified, 3D experience** that feels like navigating a futuristic operating system or game menu.

The platform addresses critical pain points with existing wiki services:
- **Excessive intrusive advertising** that breaks user experience
- **Lack of visual appeal** and modern design language
- **Zero gamification** or social features to encourage contribution
- **Poor mobile experience** and slow load times
- **No community ownership** or control over content

### 1.2 What We're Building: The Complete Experience

#### A. The Visual Identity: "Bio-Digital Fluidity"
Neuro-Archive isn't just a website—it's a **digital artifact**. Every page feels like you're interfacing with a sentient database from a cyberpunk universe.

**Core Visual Elements:**
- **Living 3D Backgrounds:** A "Liquid Wireframe" grid that ripples and breathes based on user interaction, creating depth without distraction
- **Holographic Character Cards:** 2.5D image planes with parallax effects, scanline overlays, and chromatic aberration that make static PNGs feel like interactive holograms
- **Decryption Animations:** Text doesn't fade in—it "compiles" character by character, cycling through random symbols before locking into place
- **Floating HUD Navigation:** A bottom-centered dock (game-style) with magnetic physics that pulls toward your cursor
- **Glassmorphism Everything:** Frosted glass containers with subtle glows, creating a layered "dimension" effect

#### B. The Content Architecture: "Data Shards"
Information is broken into modular **Bento Grid** layouts—inspired by Apple's modern design language but themed for cyberpunk aesthetics.

**Typical Character Page Layout:**
```
┌─────────────────────────────────────────────────┐
│  [2x2 HERO SHARD]        │ [1x2 STAT BLOCK]    │
│  3D/2.5D Character Model │ -  Power Level: S    │
│  Rotates on hover        │ -  Age: 24           │
│                          │ -  Affiliation: Solo │
├──────────────────────────┴─────────────────────┤
│  [3x2 LORE TIMELINE]                           │
│  Horizontal scrolling episode/chapter history  │
├────────────────────────────────────────────────┤
│  [2x1 RELATIONSHIP MAP]  │ [1x1 GALLERY]      │
│  Node graph showing      │ Image carousel     │
│  allies/enemies          │ with hover zoom    │
└─────────────────────────────────────────────────┘
```

**Content Types Supported:**
- **Characters:** Anime protagonists, game bosses, series cast
- **Items:** Weapons, power-ups, collectibles with 3D model support
- **Locations:** Map visualizations with pinned lore points
- **Episodes/Chapters:** Story summaries with spoiler protection
- **Theories:** Community discussions pinned to specific text segments

#### C. The Gamification System: "Earn While You Learn"
Every interaction—reading, editing, uploading—earns you **RAM** (Reputation & Access Memory), our virtual currency.

**The Progression Loop:**
1. **New User (Rank: Glitch):** Can browse and comment
2. **Complete Tutorial Quest:** "Read 5 pages" → Earn 50 RAM + "Decoder" rank
3. **First Edit:** Fix a typo → Earn 20 RAM + "First Edit" badge
4. **Level Up:** Reach 500 RAM → Unlock "Operator" rank (can upload images)
5. **Special Challenges:** Complete "Lore Hunter" bounty → Earn exclusive profile theme

**What RAM Unlocks:**
- **Profile Customization:** Unlock "Cyber-Noir" or "Liquid Gold" UI themes for your personal profile
- **Cosmetic Effects:** Add glitch auras, holographic borders to your avatar
- **Voting Power:** High-RAM users get weighted votes in content disputes
- **Premium Features (Future):** Custom wiki domains, advanced analytics

**Rank Ladder:**
- **Glitch** (0-99 RAM): New account
- **Decoder** (100-499 RAM): Can edit text
- **Operator** (500-1999 RAM): Can upload images
- **Architect** (2000-9999 RAM): Can moderate pages
- **Oracle** (10000+ RAM, Top 1%): Direct dev access, custom badges

#### D. The Social Layer: "Collaborative Lore Building"
Traditional wikis have comments buried at the bottom. Neuro-Archive makes discussion **contextual and inline**.

**Key Social Features:**

1. **Inline Theories**
   - Highlight any sentence in an article
   - Start a threaded discussion right there
   - Example: User highlights "Is Gojo actually dead?" → 47 replies appear in a floating panel
   - Upvote system surfaces best theories

2. **The Hype Meter**
   - Real-time indicator showing how many users are viewing a page right now
   - Pages "pulse" with energy when trending (after new episode drops)
   - Gamified: "You were one of the first 100 to discover this page!"

3. **Bounty System**
   - Admins or users post "Wanted" requests for missing content
   - Example: "Wanted: Full stats for all Elden Ring bosses - Reward: 500 RAM + Hunter Badge"
   - First person to complete it claims the bounty

4. **Share as Trading Card**
   - One-click button generates a beautiful OG image (character art + stats)
   - Perfect for Instagram Stories/TikTok with embedded referral code
   - Drives viral growth through social sharing

5. **Live Collaboration**
   - See who else is editing a page in real-time (Google Docs style)
   - Cursor tracking and presence indicators
   - Prevents edit conflicts

#### E. The Multi-Wiki System: "Infinite Universes"
Unlike Fandom's single monolithic platform, Neuro-Archive supports **independent wikis** for each fandom, each with its own:
- Custom theme colors and 3D background style
- Dedicated admin team with granular permissions
- Isolated content (no cross-wiki pollution)
- Optional: Custom domain (e.g., `arcane.neuroarchive.com`)

**Example Wikis at Launch:**
- `solo-leveling.neuroarchive.com` - Purple/dark theme, Korean manwha aesthetic
- `elden-ring.neuroarchive.com` - Gold/medieval theme, fantasy UI elements
- `arcane.neuroarchive.com` - Blue/steampunk theme, Piltover tech styling
- `jujutsu-kaisen.neuroarchive.com` - Red/black theme, cursed energy effects
- `one-piece.neuroarchive.com` - Ocean blue theme, nautical elements

#### F. The Technical Innovation: "Performance Without Compromise"
Most 3D websites sacrifice speed for visual flair. We achieve both.

**Performance Strategies:**
- **Progressive Loading:** 3D backgrounds load after text content (Core Web Vitals optimized)
- **Low-Poly Geometry:** 3D models capped at 50k polygons, DRACO compressed
- **Smart Caching:** Redis stores frequently accessed pages, Cloudflare CDN edge caching
- **Lazy Hydration:** React components only hydrate when visible in viewport
- **WebP Images:** All images converted and served as WebP with fallbacks
- **Code Splitting:** Route-based splitting ensures users only download needed JS

**Target Metrics:**
- Homepage load: <1.5s (LCP)
- Character page load: <2s (LCP)
- Search results: <500ms (TTI)
- 3D rendering: 60fps on desktop, 30fps on mobile
- Lighthouse score: >90 across all categories

#### G. The Mobile Experience: "Pocket Archive"
60% of Gen Z browses on mobile. Our mobile UX is a first-class citizen, not an afterthought.

**Mobile-Specific Features:**
- **Gesture Navigation:** Swipe left/right between related pages
- **Bottom Sheet Panels:** Info panels slide up from bottom (native app feel)
- **Simplified 3D:** Automatically reduces particle count and shader complexity on mobile
- **PWA Support:** Install to home screen, works offline for cached pages
- **Voice Search:** "Hey Archive, find Gojo Satoru" (Web Speech API)

#### H. The Content Protection: "Spoiler Firewall"
Anime/gaming communities are spoiler-sensitive. We built protection into the core.

**Spoiler System:**
- Users set their "spoiler tolerance" level (1-5) based on what they've watched
- Example: "I've only watched Season 1" → All Season 2+ content is automatically blurred
- Click "Decrypt" button to reveal (with confirmation dialog)
- Color-coded borders: Green (safe), Yellow (minor spoilers), Red (major spoilers)

#### I. The Monetization: "Community-First"
We're not building another ad-infested platform.

**Phase 1 (Year 1): Free Forever**
- Zero ads
- All core features free
- Community-funded (Patreon/Ko-fi)

**Phase 2 (Year 2): Optional Premium**
- **For Users:** $3/month
  - Exclusive profile themes
  - Priority support
  - Early access to new features
- **For Wiki Admins:** $10/month per wiki
  - Custom domain
  - Advanced analytics
  - Unlimited storage
  - White-label branding

**Phase 3 (Year 3): Creator Economy**
- Revenue sharing for top contributors
- Sponsored wikis (game studios pay to feature official content)
- Merch store (community-designed badges/stickers)

### 1.3 Target Audience

#### Primary: Gen Z Power Users (Ages 16-26)
- **Behavioral Traits:**
  - Consume 10+ hours of anime/gaming content weekly
  - Active on Discord, Reddit, TikTok
  - Value aesthetics as much as functionality
  - Expect instant gratification and smooth UX
  - Mobile-first browsing habits
  
- **Pain Points We Solve:**
  - Fandom wikis are ugly and slow
  - Too many ads ruin immersion
  - No recognition for contributing to wikis
  - Outdated design feels like 2010

#### Secondary: Content Creators & Streamers
- **Use Cases:**
  - Quick reference during live streams
  - Research for video essays
  - Source material for theory videos
  - Community hub for their fanbase

#### Tertiary: Game Studios & Publishers
- **Use Cases:**
  - Official lore repositories
  - Community engagement platform
  - User-generated content showcase

### 1.4 Success Metrics (6 Months Post-Launch)

**User Acquisition:**
- 10,000+ Monthly Active Users
- 2,000+ Registered Archivists (accounts)
- 30% visitor-to-signup conversion

**Engagement:**
- 5 pages viewed per session (avg)
- 4 minutes time on site (avg)
- 30% contributor rate (users who make at least 1 edit)

**Content:**
- 50+ active wikis
- 10,000+ artifact pages
- 50,000+ edits
- 5,000+ inline theories

**Technical:**
- <2s page load time (avg)
- >90 Lighthouse score
- <0.1% error rate
- 99.9% uptime

**Community:**
- 5,000+ Discord members
- 1,000+ daily active contributors
- 100+ "Oracle" rank users (top tier)

### 1.5 Competitive Differentiation

| Feature | Fandom | Fextralife | Neuro-Archive |
|---------|--------|-----------|---------------|
| **Design** | 2010s web | Gaming blog | Cyberpunk 3D |
| **Ads** | Intrusive | Moderate | Zero |
| **Mobile** | Poor | Decent | Excellent |
| **Gamification** | None | None | Full system |
| **3D Support** | No | No | Native |
| **Load Time** | 5-8s | 3-4s | <2s |
| **Community Control** | Low | Medium | High |
| **Real-time Collab** | No | No | Yes |
| **Spoiler Protection** | Basic | None | Advanced |
| **Custom Domains** | No | No | Yes (premium) |

### 1.6 Vision: "The Operating System for Fandom"

By Year 3, Neuro-Archive won't just be a wiki—it'll be the **central hub** for fandom activity:
- **Integration with Discord:** Inline wiki embeds in Discord servers
- **API for Creators:** YouTubers auto-pull character stats for video overlays
- **AI Lore Assistant:** Ask questions, get instant answers from wiki content
- **AR Character Viewer:** Scan QR codes to view 3D models in your room (WebXR)
- **Metaverse Readiness:** Export wiki 3D models to VRChat, Roblox, etc.

---

## 2. TECH STACK

### 2.1 Frontend
```json
{
  "framework": "Next.js 15.x (App Router)",
  "styling": "Tailwind CSS 3.4+",
  "animation": "Framer Motion 11+",
  "3d": "React Three Fiber (@react-three/fiber 8.x)",
  "3d_helpers": "@react-three/drei, @react-three/postprocessing",
  "state": "Zustand 4.x",
  "forms": "React Hook Form + Zod",
  "editor": "Lexical (Meta's editor framework)"
}
```

### 2.2 Backend
```json
{
  "runtime": "Node.js 20.x LTS",
  "framework": "Express.js 4.x",
  "auth": "NextAuth.js v5 (OAuth + JWT)",
  "realtime": "Socket.io 4.x",
  "cache": "Redis 7.x",
  "storage": "AWS S3 / Cloudflare R2",
  "cdn": "Cloudflare CDN"
}
```

### 2.3 Database
```json
{
  "primary": "MongoDB Atlas (M10 Cluster)",
  "search": "MongoDB Atlas Search (Lucene)",
  "sessions": "Redis (Upstash)",
  "media_metadata": "PostgreSQL (Supabase)"
}
```

### 2.4 DevOps
```json
{
  "hosting": "Vercel (Frontend) + Railway (Backend)",
  "ci_cd": "GitHub Actions",
  "monitoring": "Sentry + Vercel Analytics",
  "logs": "Better Stack (Logtail)"
}
```

---

## 3. DATABASE SCHEMA

### 3.1 Collections Overview
```
neuro_archive/
├── artifacts          # Wiki pages (characters, items, locations)
├── archivists         # User accounts
├── edits              # Edit history (version control)
├── bounties           # Content requests
├── theories           # Inline discussion threads
└── wikis              # Multi-wiki support
```

### 3.2 Schema Definitions

#### `artifacts` Collection
```javascript
{
  _id: ObjectId,
  wiki_id: ObjectId,              // Reference to wikis collection
  type: String,                   // "character" | "item" | "location" | "episode"
  slug: String,                   // URL-safe identifier
  title: String,
  subtitle: String,               // e.g., "The Shadow Monarch"
  
  // Content
  data_shards: [
    {
      label: String,              // "Age", "Power Level"
      value: String,
      is_spoiler: Boolean,
      season_unlock: Number       // Show only if user marked S2 watched
    }
  ],
  
  lore_blocks: [
    {
      heading: String,
      content: String,            // Rich text JSON (Lexical format)
      order: Number
    }
  ],
  
  // Assets
  assets: {
    hero_image: String,           // 2D PNG (transparent preferred)
    model_glb: String,            // Optional 3D model URL
    gallery: [String],            // Additional images
    theme_color: String,          // Hex color for page accent
    thumbnail: String
  },
  
  // Relationships
  relations: [
    {
      target_id: ObjectId,
      type: String,               // "ally" | "enemy" | "family" | "rival"
      description: String
    }
  ],
  
  // Metadata
  tags: [String],
  popularity_score: Number,       // For trending calculations
  view_count: Number,
  last_edited: Date,
  created_by: ObjectId,
  editors: [ObjectId],
  
  // Status
  is_locked: Boolean,             // Prevent edits (admin only)
  is_verified: Boolean,           // Checkmark for high-quality pages
  spoiler_level: Number           // 1-5 (controls access)
}
```

#### `archivists` Collection
```javascript
{
  _id: ObjectId,
  username: String,               // Unique, 3-20 chars
  email: String,
  avatar_url: String,
  
  // Gamification
  ram: Number,                    // Reputation currency
  xp: Number,
  level: Number,
  rank: String,                   // "Glitch" → "Oracle"
  badges: [
    {
      badge_id: String,
      earned_at: Date
    }
  ],
  
  // Preferences
  theme: String,                  // "cyber_noir" | "liquid_gold"
  spoiler_tolerance: Number,      // Max spoiler level they want to see
  favorite_artifacts: [ObjectId],
  watched_series: [
    {
      wiki_id: ObjectId,
      season: Number,
      episode: Number
    }
  ],
  
  // Inventory (cosmetic unlocks)
  inventory: [String],            // ["skin_matrix_green", "badge_lore_hunter"]
  
  // Stats
  total_edits: Number,
  total_reads: Number,
  joined_at: Date,
  last_active: Date
}
```

#### `edits` Collection (Version Control)
```javascript
{
  _id: ObjectId,
  artifact_id: ObjectId,
  editor_id: ObjectId,
  timestamp: Date,
  
  changes: {
    field: String,                // "lore_blocks.0.content"
    old_value: Mixed,
    new_value: Mixed
  },
  
  edit_type: String,              // "create" | "update" | "delete"
  ram_earned: Number,
  is_reverted: Boolean
}
```

#### `bounties` Collection
```javascript
{
  _id: ObjectId,
  wiki_id: ObjectId,
  title: String,                  // "Missing: Eldenring Boss Stats"
  description: String,
  ram_reward: Number,
  special_badge: String,          // Optional
  
  status: String,                 // "open" | "claimed" | "completed"
  created_by: ObjectId,
  claimed_by: ObjectId,
  completed_at: Date
}
```

#### `theories` Collection (Inline Comments)
```javascript
{
  _id: ObjectId,
  artifact_id: ObjectId,
  highlighted_text: String,       // The text user selected
  position: {
    block_index: Number,
    char_start: Number,
    char_end: Number
  },
  
  thread: [
    {
      author_id: ObjectId,
      content: String,
      timestamp: Date,
      upvotes: Number
    }
  ],
  
  is_resolved: Boolean
}
```

#### `wikis` Collection (Multi-Wiki Support)
```javascript
{
  _id: ObjectId,
  slug: String,                   // "solo-leveling"
  name: String,
  description: String,
  
  theme: {
    primary_color: String,
    accent_color: String,
    background_type: String       // "liquid_grid" | "starfield"
  },
  
  admins: [ObjectId],
  created_at: Date,
  is_public: Boolean
}
```

---

## 4. API ENDPOINTS

### 4.1 Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/session
```

### 4.2 Artifacts (Wiki Pages)
```
GET    /api/wikis/:wiki_slug/artifacts?type=character&page=1
GET    /api/wikis/:wiki_slug/artifacts/:slug
POST   /api/wikis/:wiki_slug/artifacts              # Create
PATCH  /api/wikis/:wiki_slug/artifacts/:id          # Update
DELETE /api/wikis/:wiki_slug/artifacts/:id          # Delete (admin)

GET    /api/wikis/:wiki_slug/artifacts/:id/relations
GET    /api/wikis/:wiki_slug/search?q=gojo
```

### 4.3 Gamification
```
POST   /api/ram/earn                                # Award RAM
GET    /api/archivists/:username/profile
GET    /api/leaderboard?wiki_id=xxx&timeframe=week
GET    /api/bounties?status=open
POST   /api/bounties/:id/claim
```

### 4.4 Theories (Inline Comments)
```
POST   /api/artifacts/:id/theories
GET    /api/artifacts/:id/theories
PATCH  /api/theories/:id/resolve
```

### 4.5 Real-Time (Socket.io Events)
```
connect              # Join room
artifact:viewing     # Emit when user enters a page (for "hype meter")
artifact:live_edit   # Broadcast active editors
theory:new           # New inline comment
```

---

## 5. FILE STRUCTURE

```
neuro-archive/
├── apps/
│   ├── web/                          # Next.js frontend
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── [wiki_slug]/
│   │   │   │   ├── page.tsx          # Wiki homepage
│   │   │   │   ├── [artifact_slug]/
│   │   │   │   │   └── page.tsx      # Entity page
│   │   │   │   └── nexus/
│   │   │   │       └── page.tsx      # Relationship graph
│   │   │   ├── profile/
│   │   │   │   └── [username]/
│   │   │   │       └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── 3d/
│   │   │   │   ├── LiquidGrid.tsx
│   │   │   │   ├── HoloCard.tsx
│   │   │   │   └── Space3D.tsx
│   │   │   ├── bento/
│   │   │   │   ├── BentoCard.tsx
│   │   │   │   ├── HeroShard.tsx
│   │   │   │   └── StatBlock.tsx
│   │   │   ├── effects/
│   │   │   │   ├── DecryptText.tsx
│   │   │   │   ├── Magnetic.tsx
│   │   │   │   └── PerspectiveCard.tsx
│   │   │   ├── nav/
│   │   │   │   ├── FloatingHUD.tsx
│   │   │   │   └── SearchCommand.tsx
│   │   │   └── editors/
│   │   │       └── LexicalEditor.tsx
│   │   ├── lib/
│   │   │   ├── api.ts                # API client
│   │   │   ├── socket.ts             # Socket.io client
│   │   │   └── store.ts              # Zustand store
│   │   └── styles/
│   │       └── globals.css
│   │
│   └── api/                          # Express backend
│       ├── src/
│       │   ├── routes/
│       │   │   ├── artifacts.js
│       │   │   ├── auth.js
│       │   │   ├── gamification.js
│       │   │   └── theories.js
│       │   ├── models/
│       │   │   ├── Artifact.js
│       │   │   ├── Archivist.js
│       │   │   └── Bounty.js
│       │   ├── middleware/
│       │   │   ├── auth.js
│       │   │   └── rateLimit.js
│       │   ├── services/
│       │   │   ├── gamification.js   # RAM calculation logic
│       │   │   ├── search.js
│       │   │   └── upload.js
│       │   ├── socket/
│       │   │   └── handlers.js
│       │   └── server.js
│       └── package.json
│
├── packages/
│   ├── design-system/                # Shared component library
│   │   ├── components/
│   │   └── tokens/
│   └── utils/                        # Shared utilities
│
└── docs/
    ├── DESIGN_SYSTEM.md
    ├── API_REFERENCE.md
    └── CONTRIBUTION_GUIDE.md
```

---

## 6. DESIGN SYSTEM

### 6.1 Typography
```javascript
// fonts.ts
import { Space_Grotesk, Satoshi, JetBrains_Mono } from 'next/font/google'

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const satoshi = Satoshi({
  subsets: ['latin'],
  variable: '--font-body',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
```

### 6.2 Color Palette
```css
/* tailwind.config.js theme extension */
colors: {
  void: {
    DEFAULT: '#050505',
    900: '#0A0A0A',
  },
  cyber: {
    yellow: '#EAB308',
    purple: '#A855F7',
    cyan: '#06B6D4',
  },
  glass: {
    light: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)',
  }
}
```

### 6.3 Motion Tokens
```javascript
// motion.config.ts
export const springs = {
  snappy: { stiffness: 300, damping: 20 },
  floaty: { stiffness: 150, damping: 15 },
  heavy: { stiffness: 100, damping: 40 },
}

export const transitions = {
  decrypt: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  glitch: { duration: 0.2, ease: 'easeInOut' },
}
```

---

## 7. COMPONENT SPECIFICATIONS

### 7.1 DecryptText.tsx
```typescript
interface DecryptTextProps {
  text: string;
  speed?: number;          // ms per character
  characters?: string;     // Random char pool (default: "01#x")
}

// Behavior:
// 1. Split text into characters
// 2. For each char, cycle through random chars for [speed]ms
// 3. Settle on final character with color transition
```

### 7.2 HoloCard.tsx (2.5D Character Card)
```typescript
interface HoloCardProps {
  imageUrl: string;
  name: string;
  subtitle?: string;
  themeColor: string;      // Hex for glow color
}

// 3D Structure:
// Layer 1 (z: -0.5): Aura plane (blurred, pulsing)
// Layer 2 (z: 0): Character image plane
// Layer 3 (z: 0.1): Glass overlay (transmission: 1)
// 
// Interaction: Mouse tilt with 3D perspective
```

### 7.3 LiquidGrid.tsx (Background)
```typescript
// Implementation:
// - PlaneGeometry (200x200 segments)
// - Vertex shader: Displace Z using Perlin noise + time
// - Material: MeshStandardMaterial (wireframe, cyan color)
// - Animation: useFrame to update noise seed
// - Fog: FogExp2 (density: 0.05)
```

### 7.4 FloatingHUD.tsx (Navigation)
```typescript
// Structure:
// - Fixed bottom-center position
// - Glassmorphic container (backdrop-blur-xl)
// - 5-7 icon buttons (Home, Search, Profile, Bounties)
// - Magnetic hover effect (elements pull toward cursor)
// - Active state: Icon glows + scale(1.2)
```

### 7.5 BentoCard.tsx
```typescript
interface BentoCardProps {
  span?: '1x1' | '1x2' | '2x2' | '2x3';
  children: React.ReactNode;
  glowColor?: string;
  interactive?: boolean;  // Adds tilt effect
}

// Styling:
// - Glass background (black/40 + backdrop-blur-2xl)
// - 1px border (white/10)
// - Rounded corners (lg)
// - Padding: p-6
// - If interactive: Add PerspectiveCard wrapper
```

---

## 8. IMPLEMENTATION PHASES

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Build the shell with basic navigation and one static page.

**Deliverables:**
- [x] Next.js project setup (App Router)
- [x] Tailwind + font configuration
- [x] FloatingHUD component (static)
- [x] LiquidGrid background (R3F)
- [x] DecryptText component
- [x] One static character page (hardcoded data)

**Team:**
- 1x Frontend Dev (Next.js)
- 1x 3D Dev (R3F)

---

### Phase 2: Backend + Database (Weeks 3-4)
**Goal:** Setup MongoDB, auth, and CRUD APIs.

**Deliverables:**
- [x] MongoDB Atlas cluster setup
- [x] Artifact, Archivist schemas
- [x] Express API (artifacts CRUD)
- [x] NextAuth.js integration (Google OAuth)
- [x] API client in frontend

**Team:**
- 1x Backend Dev
- 1x DevOps (deployment setup)

---

### Phase 3: Core Features (Weeks 5-7)
**Goal:** Dynamic pages, search, and basic gamification.

**Deliverables:**
- [x] Dynamic artifact pages ([wiki_slug]/[artifact_slug])
- [x] Search functionality (MongoDB Atlas Search)
- [x] BentoCard layout with real data
- [x] HoloCard with image upload
- [x] RAM system (earn on read/edit)
- [x] User profile page

**Team:**
- 2x Frontend Devs
- 1x Backend Dev

---

### Phase 4: Gamification (Weeks 8-9)
**Goal:** Full gamification loop (XP, ranks, bounties).

**Deliverables:**
- [x] Leaderboard page
- [x] Bounty system (create, claim, complete)
- [x] Badge system (unlock logic)
- [x] Profile customization (theme selector)

**Team:**
- 1x Frontend Dev (UI)
- 1x Backend Dev (gamification logic)

---

### Phase 5: Social Features (Weeks 10-11)
**Goal:** Inline theories and real-time updates.

**Deliverables:**
- [x] Inline theory component (highlight → comment)
- [x] Socket.io integration
- [x] "Hype Meter" (live viewer count)
- [x] Share-as-card generator (OG image API)

**Team:**
- 1x Frontend Dev
- 1x Backend Dev (Socket.io)

---

### Phase 6: Polish & Testing (Weeks 12-14)
**Goal:** Performance optimization, bug fixes, and UX refinement.

**Deliverables:**
- [x] Lighthouse score >90 (Performance, A11y)
- [x] Mobile responsive (all pages)
- [x] Error boundaries + loading states
- [x] Comprehensive testing (Jest + Playwright)
- [x] SEO optimization (metadata, sitemaps)

**Team:**
- 2x Frontend Devs
- 1x QA Engineer

---

### Phase 7: Community Launch (Week 15)
**Goal:** Soft launch with 5 seed wikis.

**Deliverables:**
- [x] 5 wikis with 50+ pages each (Solo Leveling, Elden Ring, Arcane, JJK, One Piece)
- [x] Onboarding flow for new users
- [x] Admin tools (lock pages, assign moderators)
- [x] Analytics dashboard (Plausible/Vercel)

**Team:**
- 1x Content Creator
- 1x Community Manager

---

## 9. PERFORMANCE REQUIREMENTS

### 9.1 Load Times
- **Homepage:** <1.5s (LCP)
- **Artifact Page:** <2s (LCP)
- **Search Results:** <500ms (TTI)

### 9.2 Bundle Size
- **Initial JS:** <200kb (gzipped)
- **R3F Components:** Lazy load (<100kb per component)
- **Images:** WebP format, max 500kb

### 9.3 Rendering
- **3D FPS:** >30fps on mobile, >60fps on desktop
- **Animation FPS:** Locked 60fps (use `transform` + `opacity` only)

---

## 10. SECURITY REQUIREMENTS

### 10.1 Authentication
- JWT tokens (httpOnly cookies, 7-day expiry)
- Rate limiting: 100 req/15min per IP
- OAuth 2.0 (Google, Discord)

### 10.2 Content
- Sanitize all user input (DOMPurify)
- Image upload: Max 5MB, whitelist (jpg, png, webp)
- Model upload: Max 10MB, validate GLTF structure

### 10.3 API
- CORS: Whitelist frontend domain only
- API keys for admin routes
- SQL injection prevention (parameterized queries)

---

## 11. MONITORING & ANALYTICS

### 11.1 Error Tracking
- Sentry (frontend + backend)
- Alert on >1% error rate

### 11.2 Performance
- Vercel Analytics (Web Vitals)
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

### 11.3 User Analytics
- Plausible (privacy-friendly)
- Track: Page views, search queries, edit count

---

## 12. DEPLOYMENT

### 12.1 Frontend (Vercel)
```bash
# Environment Variables
NEXT_PUBLIC_API_URL=https://api.neuroarchive.com
NEXT_PUBLIC_SOCKET_URL=wss://api.neuroarchive.com
NEXTAUTH_URL=https://neuroarchive.com
NEXTAUTH_SECRET=***
```

### 12.2 Backend (Railway)
```bash
# Environment Variables
MONGODB_URI=mongodb+srv://***
REDIS_URL=redis://***
JWT_SECRET=***
AWS_S3_BUCKET=***
AWS_ACCESS_KEY=***
AWS_SECRET_KEY=***
```

### 12.3 CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Run tests (Jest + Playwright)
      - Build frontend (Next.js)
      - Deploy to Vercel
      - Deploy backend to Railway
```

---

## 13. OPEN QUESTIONS & DECISIONS

### 13.1 Monetization Strategy
- **Option A:** Premium wikis ($5/mo for custom domains)
- **Option B:** Tip jar (users tip creators)
- **Option C:** Ad-free forever (VC-funded)

### 13.2 Moderation
- **Auto-mod:** AI spam detection (OpenAI Moderation API)
- **Human mod:** 1 mod per 1000 users

### 13.3 3D Model Licensing
- **Phase 1:** User-uploaded models (CC0 or user-owned)
- **Phase 2:** Partner with 3D artists (revenue share)

---

## 14. GLOSSARY

| Term | Definition |
|------|------------|
| **Artifact** | Any wiki page (character, item, location) |
| **Archivist** | A registered user |
| **RAM** | Reputation currency (Reputation & Access Memory) |
| **Shard** | A content module in the Bento Grid |
| **HUD** | Heads-Up Display (the floating navigation) |
| **Glitch** | Lowest user rank (new account) |
| **Oracle** | Highest user rank (top 1%) |
| **Bounty** | A content request with rewards |
| **Theory** | An inline comment/discussion |
| **Hype Meter** | Live viewer count indicator |

---

## 15. TEAM ROLES & RESPONSIBILITIES

### Development Team (10 people)
- **2x Frontend Engineers:** React/Next.js, Tailwind, Framer Motion
- **1x 3D Engineer:** React Three Fiber, GLSL shaders
- **2x Backend Engineers:** Node.js, Express, MongoDB
- **1x DevOps Engineer:** Vercel, Railway, Redis, monitoring
- **1x UI/UX Designer:** Figma, prototyping, design system
- **1x QA Engineer:** Testing, accessibility, bug tracking
- **1x Product Manager:** Roadmap, feature specs, stakeholder communication
- **1x Community Manager:** User onboarding, content moderation, Discord

---

## 16. LAUNCH CHECKLIST

### Pre-Launch (Week 14)
- [ ] All Phase 6 deliverables complete
- [ ] 5 seed wikis populated
- [ ] Legal: Terms of Service + Privacy Policy live
- [ ] Domain purchased + SSL configured
- [ ] Error monitoring active (Sentry)
- [ ] Backup strategy tested (MongoDB snapshots)

### Launch Day (Week 15)
- [ ] Announce on ProductHunt
- [ ] Post on r/anime, r/gaming, r/webdev
- [ ] Tweet thread from official account
- [ ] Press kit sent to tech blogs (TechCrunch, TheVerge)

### Post-Launch (Week 16+)
- [ ] Daily monitoring (Sentry, Vercel, server logs)
- [ ] User feedback collection (Typeform)
- [ ] Weekly bug fixes
- [ ] Monthly feature releases

---

## 17. SUPPORT & DOCUMENTATION

### User Documentation
- `/docs/getting-started` - New user guide
- `/docs/editing-guide` - How to edit pages
- `/docs/gamification` - RAM, ranks, and badges explained

### Developer Documentation
- API Reference (Swagger/Postman)
- Component Storybook (for design system)
- Architecture Decision Records (ADRs)

### Community
- Discord server (support + feedback)
- GitHub Discussions (feature requests)
- Monthly AMAs with founders

---

**END OF BLUEPRINT**

---

*This document should be updated as the project evolves. Last updated: 2026-02-05*
```

This expanded blueprint now includes comprehensive descriptions of what the entire app is, how it works, and what makes it unique. Any developer or stakeholder can read this and immediately understand the full vision, technical requirements, and implementation path for Neuro-Archive. [bricxlabs](https://bricxlabs.com/blogs/profile-page-design-examples)