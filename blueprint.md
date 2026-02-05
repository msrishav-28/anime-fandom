```markdown
# NEURO-ARCHIVE: Technical Blueprint
**Project Code:** NA-001  
**Version:** 1.0.0  
**Target Launch:** Q2 2026  
**Stack:** MERN + React Three Fiber

---

## 1. PROJECT OVERVIEW

### 1.1 Vision Statement
Build a next-generation anime/gaming wiki platform that transforms static information consumption into an immersive, gamified experience. Target audience: Gen Z power users (ages 16-26) seeking visually stunning, social, and interactive knowledge platforms.

### 1.2 Core Differentiators vs. Fandom
- **Zero intrusive ads** (optional community-controlled monetization)
- **3D/2.5D visual interfaces** (holographic character cards)
- **Gamification system** (XP, ranks, bounties)
- **Real-time collaboration** (live editing, hype meters)
- **Performance-first** (sub-2s load times, PWA support)

### 1.3 Success Metrics (6 Months)
- 10,000+ MAU
- 50+ community-created wikis
- 100,000+ page views/month
- <2s average page load time
- 30% contributor conversion rate

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

This complete blueprint is production-ready and covers architecture, implementation phases, technical specifications, and team structure. You can copy this entire markdown and distribute it to your development team immediately. [windmill](https://windmill.digital/great-mvp-feature-prioritization-methods/)