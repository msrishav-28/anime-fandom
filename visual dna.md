```markdown
# NEURO-ARCHIVE: Visual DNA
**Document Version:** 1.0.0  
**Last Updated:** February 5, 2026  
**Maintained By:** Design Team

---

## 1. DESIGN PHILOSOPHY

### 1.1 The Core Aesthetic: "Bio-Digital Fluidity"

Neuro-Archive exists at the intersection of **cyberpunk immersion** and **editorial precision**. We're not building a "cute" anime wiki or a "gamer bro" database. We're creating a **sentient archive** that feels like it's from 2077, accessed through a holographic terminal.

**Three Pillars:**

1. **Cinematic Depth**  
   Every surface has dimension. Nothing is flat. Glass layers, 3D parallax, shadows, and fog create a sense of "looking through" rather than "looking at."

2. **Tactile Physics**  
   UI elements don't just animate—they have weight, momentum, and magnetic attraction. Buttons pull toward your cursor. Cards tilt with perspective. Text decrypts like a terminal boot sequence.

3. **Data-as-Art**  
   Information isn't just displayed—it's performed. Stats appear as scanline readouts. Names decrypt letter-by-letter. Images holographically shimmer.

### 1.2 Mood Board References

**Visual Inspiration:**
- *Blade Runner 2049* UI (holographic overlays, depth-of-field)
- *Cyberpunk 2077* inventory screens (glitch effects, neon accents)
- *Persona 5* menus (bold typography, high contrast, kinetic energy)
- *Death Stranding* scanner interface (data visualization, technical readouts)
- Apple's "Spatial Computing" ads (glass layers, depth)

**Motion Inspiration:**
- *The Matrix* "digital rain" (falling particles)
- *Tron Legacy* light cycles (trails and glows)
- *Ghost in the Shell* data streams (floating kanji/code)

### 1.3 What We're NOT

- ❌ **Not "Kawaii":** No pastel colors, rounded bubbly shapes, or cutesy illustrations
- ❌ **Not "Gamer RGB":** No rainbow vomit, aggressive red/black, or energy drink aesthetics
- ❌ **Not "Corporate Clean":** No sterile white backgrounds, boring sans-serif, or lifeless grids
- ❌ **Not "Web 2.0":** No gradients for decoration, drop shadows, or glossy buttons

---

## 2. COLOR SYSTEM

### 2.1 The Void Palette (Base)

```css
/* The Foundation: Near-Black Tones */
--void-pure:     #050505;  /* Main background */
--void-900:      #0A0A0A;  /* Elevated surfaces */
--void-800:      #121212;  /* Hover states */
--void-700:      #1A1A1A;  /* Borders (subtle) */
```

**Usage:**
- `void-pure`: Page background, deepest layer
- `void-900`: Card backgrounds, modals
- `void-800`: Hover states for interactive cards
- `void-700`: Dividers, subtle borders

**Why Dark?**  
Dark backgrounds reduce eye strain for Gen Z's 8+ hour daily screen time. They also make neon accents "pop" with maximum contrast.

### 2.2 The Cyber Spectrum (Accents)

```css
/* High-Energy Accent Colors */
--cyber-cyan:    #06B6D4;  /* Primary action, links */
--cyber-purple:  #A855F7;  /* Secondary, magic/fantasy themes */
--cyber-yellow:  #EAB308;  /* Warnings, highlights */
--cyber-green:   #10B981;  /* Success, active states */
--cyber-red:     #EF4444;  /* Errors, danger zones */
--cyber-pink:    #EC4899;  /* Special badges, premium features */
```

**Context-Based Usage:**

| Context | Color | Example |
|---------|-------|---------|
| **Call-to-Action** | Cyan | "Edit Page" button |
| **Fantasy Wiki** | Purple | Elden Ring theme accent |
| **Sci-Fi Wiki** | Cyan | Cyberpunk 2077 theme |
| **Shounen Anime** | Yellow | Naruto/One Piece energy |
| **Horror/Dark** | Red | Attack on Titan themes |
| **Romance/Slice-of-Life** | Pink | Your Name wiki |

### 2.3 Glass & Transparency

```css
/* Glassmorphism Layers */
--glass-light:   rgba(255, 255, 255, 0.05);  /* Subtle background */
--glass-medium:  rgba(255, 255, 255, 0.10);  /* Hover state */
--glass-border:  rgba(255, 255, 255, 0.10);  /* 1px borders */
--glass-text:    rgba(255, 255, 255, 0.70);  /* Body text */
--glass-heading: rgba(255, 255, 255, 0.95);  /* Headlines */
```

**The Glass Formula:**
```css
.bento-card {
  background: var(--glass-light);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
}
```

### 2.4 Semantic Colors

```css
/* State Indicators */
--state-success:     #10B981;
--state-warning:     #F59E0B;
--state-error:       #EF4444;
--state-info:        #06B6D4;

/* Spoiler Levels */
--spoiler-safe:      #10B981;  /* Green border */
--spoiler-mild:      #F59E0B;  /* Yellow border */
--spoiler-major:     #EF4444;  /* Red border */
```

---

## 3. TYPOGRAPHY

### 3.1 Font Hierarchy

```typescript
// Font Stack Definition
const fonts = {
  heading: 'Space Grotesk, system-ui, sans-serif',
  body:    'Satoshi, -apple-system, sans-serif',
  mono:    'JetBrains Mono, Consolas, monospace',
}
```

### 3.2 Space Grotesk (Headlines)

**Character:** Technical, futuristic, high-contrast  
**Weights:** 500 (Medium), 700 (Bold)

**Usage:**
- Page titles (H1)
- Section headings (H2)
- Character names in cards
- Navigation labels

**Styling Rules:**
```css
.heading-primary {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(3rem, 8vw, 8rem);  /* Responsive giant text */
  line-height: 0.9;                    /* Tight leading */
  letter-spacing: -0.05em;             /* Tighter tracking */
  text-transform: uppercase;
}
```

**Example Sizes:**
- H1 (Hero): 96px → 128px (desktop)
- H2 (Section): 48px → 64px
- H3 (Card Title): 24px → 32px

### 3.3 Satoshi (Body Copy)

**Character:** Clean, modern, highly legible  
**Weights:** 400 (Regular), 500 (Medium), 700 (Bold)

**Usage:**
- Article body text
- Descriptions
- UI labels
- Form inputs

**Styling Rules:**
```css
.body-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;                    /* Generous line height */
  letter-spacing: -0.01em;
  color: var(--glass-text);
}
```

### 3.4 JetBrains Mono (Data/Code)

**Character:** Monospace, technical, raw data  
**Weights:** 400 (Regular), 600 (SemiBold)

**Usage:**
- Stats (Power Level: 9000)
- Timestamps
- IDs and tags
- Terminal-style effects

**Styling Rules:**
```css
.data-label {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--cyber-cyan);
}
```

### 3.5 Typography Scale

```css
/* Fluid Type Scale (Mobile → Desktop) */
--text-xs:   clamp(0.75rem,  1.5vw,  0.875rem);  /* 12px → 14px */
--text-sm:   clamp(0.875rem, 2vw,    1rem);      /* 14px → 16px */
--text-base: clamp(1rem,     2.5vw,  1.125rem);  /* 16px → 18px */
--text-lg:   clamp(1.125rem, 3vw,    1.25rem);   /* 18px → 20px */
--text-xl:   clamp(1.25rem,  3.5vw,  1.5rem);    /* 20px → 24px */
--text-2xl:  clamp(1.5rem,   4vw,    2rem);      /* 24px → 32px */
--text-3xl:  clamp(2rem,     5vw,    3rem);      /* 32px → 48px */
--text-4xl:  clamp(3rem,     6vw,    4rem);      /* 48px → 64px */
--text-5xl:  clamp(4rem,     8vw,    6rem);      /* 64px → 96px */
--text-6xl:  clamp(6rem,     10vw,   8rem);      /* 96px → 128px */
```

---

## 4. LAYOUT SYSTEM

### 4.1 The Bento Grid

**Philosophy:** Information density without chaos. Every "shard" is a self-contained module.

**Grid Structure:**
```css
.bento-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;                         /* 24px spacing */
  padding: 2rem;
}
```

**Shard Sizes:**
- `1x1`: 300px × 300px (Small info blocks)
- `1x2`: 300px × 624px (Tall content)
- `2x1`: 624px × 300px (Wide content)
- `2x2`: 624px × 624px (Hero elements)
- `3x2`: 972px × 624px (Lore text blocks)

**Composition Rules:**
1. **The Hero Always Left:** The largest visual (character model, key image) anchors the top-left
2. **Data Clusters Right:** Stats, metadata, tags group on the right
3. **Text Flows Below:** Long-form content sits at bottom in wide shards
4. **Asymmetry Over Symmetry:** Perfect grids feel sterile; intentional imbalance creates energy

### 4.2 Spacing System

```css
/* Base-8 Scale */
--space-1:  0.5rem;   /* 8px  - Tight padding */
--space-2:  1rem;     /* 16px - Default padding */
--space-3:  1.5rem;   /* 24px - Card padding */
--space-4:  2rem;     /* 32px - Section spacing */
--space-6:  3rem;     /* 48px - Large gaps */
--space-8:  4rem;     /* 64px - Hero spacing */
--space-12: 6rem;     /* 96px - Section dividers */
```

### 4.3 Containment

```css
/* Max-Width Constraints */
--container-sm:  640px;   /* Forms, modals */
--container-md:  768px;   /* Article body text */
--container-lg:  1024px;  /* Standard pages */
--container-xl:  1280px;  /* Wide layouts */
--container-2xl: 1536px;  /* Full-bleed sections */
```

---

## 5. MOTION LANGUAGE

### 5.1 The Physics Engine

All motion follows **spring-based physics**, not linear easing. This creates organic, lifelike movement.

```javascript
// Motion Tokens
export const springs = {
  // Fast, snappy (buttons, hovers)
  snappy: {
    stiffness: 300,
    damping: 20,
    mass: 1,
  },
  
  // Medium float (cards, modals)
  floaty: {
    stiffness: 150,
    damping: 15,
    mass: 1,
  },
  
  // Slow, heavy (page transitions)
  heavy: {
    stiffness: 100,
    damping: 40,
    mass: 2,
  },
}
```

### 5.2 Animation Principles

#### A. Magnetic Pull
Elements "attract" the cursor within a 150px radius.

```typescript
// Magnetic behavior
const distance = Math.sqrt(dx * dx + dy * dy);
if (distance < 150) {
  const pull = (150 - distance) / 150;
  x = baseX + (dx * pull * 0.3);
  y = baseY + (dy * pull * 0.3);
}
```

#### B. Perspective Tilt
Cards rotate based on mouse position, creating 3D depth.

```typescript
// Tilt calculation
const rotateX = (mouseY - centerY) / height * 15;  // Max 15deg
const rotateY = (mouseX - centerX) / width * 15;

<motion.div
  style={{
    rotateX: rotateX,
    rotateY: rotateY,
    transformStyle: "preserve-3d",
  }}
/>
```

#### C. Text Decryption
Characters cycle through random glyphs before settling.

```typescript
// Decrypt sequence
const glyphs = "01#x█▓▒░";
const duration = 50; // ms per character

for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    // Cycle random chars for 500ms
    const interval = setInterval(() => {
      char = glyphs[Math.floor(Math.random() * glyphs.length)];
    }, 50);
    
    // Lock to final char
    setTimeout(() => {
      clearInterval(interval);
      char = text[i];
    }, 500);
  }, i * duration);
}
```

### 5.3 Timing Functions

```css
/* Custom Cubic-Bezier Curves */
--ease-in-out-cubic:   cubic-bezier(0.65, 0, 0.35, 1);
--ease-out-expo:       cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-back:        cubic-bezier(0.6, -0.28, 0.735, 0.045);
--ease-out-elastic:    cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 5.4 Duration Standards

```css
/* Timing Scale */
--duration-instant: 100ms;  /* Micro-interactions */
--duration-fast:    200ms;  /* Hovers */
--duration-normal:  400ms;  /* Default */
--duration-slow:    600ms;  /* Page transitions */
--duration-slower:  1000ms; /* Hero animations */
```

---

## 6. 3D VISUAL LANGUAGE

### 6.1 The Background: "Liquid Grid"

**Technical Spec:**
- Geometry: `PlaneGeometry(200, 200, 100, 100)` (100×100 subdivisions)
- Material: `MeshStandardMaterial({ wireframe: true, color: '#06B6D4' })`
- Animation: Vertex displacement using Perlin noise
- Fog: `FogExp2('#050505', 0.05)` to fade into void

**Vertex Shader Concept:**
```glsl
// Pseudo-code for vertex displacement
float noise = snoise(vec3(position.x * 0.1, position.y * 0.1, time * 0.2));
vec3 newPosition = position;
newPosition.z += noise * 2.0;
gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
```

### 6.2 Holographic Material

**Shader Properties:**
- **Fresnel Effect:** Edges glow brighter (rim lighting)
- **Scanlines:** Moving horizontal lines (0.5px thick)
- **Chromatic Aberration:** RGB channels slightly offset
- **Transparency:** 70% opacity with additive blending

```typescript
<HolographicMaterial
  fresnelAmount={0.6}
  fresnelOpacity={0.2}
  scanlineSize={8}
  hologramBrightness={1.2}
  signalSpeed={1.0}
  hologramColor="#06B6D4"
  enableBlinking={true}
  blinkFresnelOnly={true}
/>
```

### 6.3 2.5D Card Layers

**Depth Stack (Z-axis):**
```
z: 0.2  → Glass overlay (transmission)
z: 0.1  → Scanline overlay
z: 0    → Character image plane
z: -0.3 → Glow/aura plane (blurred)
z: -0.5 → Background card base
```

**Interaction:**
- **On Hover:** Entire stack tilts (preserve-3d)
- **On Click:** Brief "glitch" (chromatic aberration spike)

---

## 7. COMPONENT VISUAL SPECS

### 7.1 BentoCard

**Structure:**
```tsx
<div className="bento-card">
  {/* Glass background */}
  <div className="bento-card__glass" />
  
  {/* Glow border */}
  <div className="bento-card__border" />
  
  {/* Content */}
  <div className="bento-card__content">
    {children}
  </div>
</div>
```

**Styling:**
```css
.bento-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(32px);
  overflow: hidden;
  
  /* Glow effect */
  box-shadow: 
    0 0 0 1px rgba(6, 182, 212, 0.1),
    0 8px 32px rgba(0, 0, 0, 0.4);
}

.bento-card:hover {
  border-color: rgba(6, 182, 212, 0.5);
  box-shadow: 
    0 0 0 1px rgba(6, 182, 212, 0.3),
    0 0 32px rgba(6, 182, 212, 0.2),
    0 12px 48px rgba(0, 0, 0, 0.6);
}
```

### 7.2 FloatingHUD (Navigation)

**Structure:**
```tsx
<nav className="floating-hud">
  <div className="hud-container">
    <HUDButton icon="home" label="Home" />
    <HUDButton icon="search" label="Search" />
    <HUDButton icon="user" label="Profile" />
    <HUDButton icon="trophy" label="Bounties" />
  </div>
</nav>
```

**Styling:**
```css
.floating-hud {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.hud-container {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  backdrop-filter: blur(32px);
  box-shadow: 
    0 0 0 1px rgba(6, 182, 212, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.6);
}

.hud-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms;
}

.hud-button:hover {
  background: rgba(6, 182, 212, 0.2);
  transform: scale(1.15);
  box-shadow: 0 0 16px rgba(6, 182, 212, 0.4);
}

.hud-button.active {
  background: var(--cyber-cyan);
  color: var(--void-pure);
}
```

### 7.3 DecryptText

**Visual Behavior:**
1. Text appears as random characters (`01#x█`)
2. Each character "locks in" sequentially (left to right)
3. Locked characters glow briefly (cyan flash)
4. Final state: Clean white text

**Color States:**
```css
.decrypt-char {
  /* Random state */
  &.scrambling {
    color: rgba(255, 255, 255, 0.3);
    text-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
  }
  
  /* Locking in */
  &.locking {
    color: var(--cyber-cyan);
    text-shadow: 0 0 16px var(--cyber-cyan);
  }
  
  /* Final state */
  &.locked {
    color: rgba(255, 255, 255, 0.95);
    text-shadow: none;
  }
}
```

### 7.4 Spoiler Firewall

**Visual Treatment:**
```css
.spoiler-blur {
  position: relative;
  overflow: hidden;
}

.spoiler-blur::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid var(--cyber-red);
  backdrop-filter: blur(16px);
  z-index: 1;
}

.spoiler-blur::after {
  content: '🔒 SPOILER - CLICK TO DECRYPT';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--cyber-red);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 2;
}
```

---

## 8. ICONOGRAPHY

### 8.1 Icon Style

**Source:** Lucide Icons (consistent line weight, 24×24 grid)

**Customization:**
```tsx
<Icon
  name="user"
  size={24}
  strokeWidth={1.5}
  color="currentColor"
/>
```

**Icon Categories:**

| Category | Examples |
|----------|----------|
| **Navigation** | Home, Search, Menu, ArrowRight |
| **Actions** | Edit, Save, Upload, Download |
| **Social** | Heart, Share, Comment, Bookmark |
| **Status** | Check, X, Alert, Info |
| **Media** | Play, Pause, Image, Video |
| **Data** | TrendingUp, BarChart, Users, Activity |

### 8.2 Badge Icons

Custom SVG badges for gamification:
- **Rank Badges:** Glitch, Decoder, Operator, Architect, Oracle
- **Achievement Badges:** First Edit, Lore Hunter, 100-Day Streak
- **Special Badges:** Early Adopter, Beta Tester, Community Mod

**Design Rules:**
- Geometric shapes (hexagons, diamonds, shields)
- Single accent color + white/black
- Flat design (no gradients)
- Glow effect on hover

---

## 9. EFFECTS & OVERLAYS

### 9.1 Film Grain

**Purpose:** Breaks the "perfect digital" look, adds analog texture.

```css
.film-grain {
  position: fixed;
  inset: 0;
  background-image: url('/textures/grain.png');
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: overlay;
}
```

### 9.2 Scanlines

**Purpose:** CRT monitor effect, reinforces cyberpunk aesthetic.

```css
.scanlines {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 255, 255, 0.02) 2px,
    rgba(255, 255, 255, 0.02) 4px
  );
  pointer-events: none;
  z-index: 9998;
}
```

### 9.3 Chromatic Aberration

**Purpose:** Glitch effect on interactions.

```css
.chromatic-glitch {
  position: relative;
}

.chromatic-glitch::before,
.chromatic-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0;
}

.chromatic-glitch:hover::before {
  color: #00FFFF;
  transform: translateX(-2px);
  opacity: 0.5;
  animation: glitch 100ms;
}

.chromatic-glitch:hover::after {
  color: #FF00FF;
  transform: translateX(2px);
  opacity: 0.5;
  animation: glitch 100ms reverse;
}
```

### 9.4 Glow Effects

```css
/* Text Glow */
.glow-text {
  text-shadow: 
    0 0 8px currentColor,
    0 0 16px currentColor,
    0 0 24px currentColor;
}

/* Box Glow */
.glow-box {
  box-shadow: 
    0 0 16px rgba(6, 182, 212, 0.3),
    0 0 32px rgba(6, 182, 212, 0.2),
    0 0 48px rgba(6, 182, 212, 0.1);
}
```

---

## 10. RESPONSIVE DESIGN

### 10.1 Breakpoints

```css
/* Mobile First */
--bp-sm:  640px;   /* Large phone */
--bp-md:  768px;   /* Tablet */
--bp-lg:  1024px;  /* Laptop */
--bp-xl:  1280px;  /* Desktop */
--bp-2xl: 1536px;  /* Large desktop */
```

### 10.2 Mobile Adaptations

**Typography:**
- Reduce H1 from 96px → 48px
- Increase line-height from 1.2 → 1.4
- Increase base font size from 16px → 18px (better readability)

**Layout:**
- Bento Grid: 1 column on mobile, 2-3 on tablet, 3-4 on desktop
- HUD: Smaller icons (40px → 48px)
- Padding: Reduce from 2rem → 1rem

**3D:**
- Disable parallax on mobile (performance)
- Reduce particle count (7000 → 1000)
- Simplify shaders (remove post-processing)

### 10.3 Touch Interactions

```css
/* Larger tap targets */
@media (hover: none) {
  .interactive-element {
    min-height: 44px;    /* Apple's minimum */
    min-width: 44px;
  }
  
  /* Disable hover states */
  .hover-effect:hover {
    transform: none;
  }
}
```

---

## 11. ACCESSIBILITY

### 11.1 Color Contrast

**WCAG AAA Standards:**
- Text on `void-pure` background: Use `rgba(255,255,255,0.95)` (21:1 ratio)
- Accent colors tested for 7:1 minimum contrast
- Link text: Always underlined or clearly differentiated

### 11.2 Focus States

```css
.focusable:focus-visible {
  outline: 2px solid var(--cyber-cyan);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Remove default browser outline */
.focusable:focus:not(:focus-visible) {
  outline: none;
}
```

### 11.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Disable 3D effects */
  .parallax,
  .tilt-card {
    transform: none !important;
  }
}
```

### 11.4 Screen Reader Support

```tsx
// Example: Decorative 3D elements
<Canvas aria-hidden="true">
  <LiquidGrid />
</Canvas>

// Example: Interactive buttons
<button aria-label="Edit character profile">
  <Icon name="edit" aria-hidden="true" />
</button>
```

---

## 12. BRAND PERSONALITY

### 12.1 Voice & Tone

**Personality Traits:**
- 🤖 **Intelligent but not elitist** ("Sentient archive, not stuffy library")
- ⚡ **Energetic but not chaotic** ("Cyberpunk, not seizure-inducing")
- 🎮 **Playful but not childish** ("Gamified, not gamey")
- 🔮 **Mysterious but not confusing** ("Discover depth, not hunt for basic info")

**Copywriting Examples:**

| Context | ❌ Don't Say | ✅ Do Say |
|---------|-------------|----------|
| Empty state | "No results found" | "No data shards detected" |
| Loading | "Loading..." | "Decrypting archive..." |
| Error | "Error 404" | "Glitch detected. Data corrupted." |
| Success | "Saved!" | "Data uploaded to archive." |
| CTA | "Click here" | "Access shard" / "Hack entry" |

### 12.2 Microcopy Guidelines

**Buttons:**
- Primary action: "Decrypt", "Access", "Hack"
- Secondary action: "Cancel", "Return", "Exit"
- Destructive: "Purge", "Erase", "Corrupt"

**Status Messages:**
- Success: "✓ Data synchronized"
- Warning: "⚠ Incomplete shard detected"
- Error: "✗ Connection severed"

---

## 13. IMPLEMENTATION CHECKLIST

### For Designers:
- [ ] Figma file uses exact color tokens (HEX codes from Section 2)
- [ ] All text uses defined font stack (Section 3)
- [ ] Components use 8px spacing grid (Section 4.2)
- [ ] Hover states documented for all interactive elements
- [ ] Mobile variants created for key screens
- [ ] Dark mode is default (no light mode needed for MVP)

### For Developers:
- [ ] CSS custom properties defined in `globals.css`
- [ ] Tailwind config extends with custom colors/fonts
- [ ] Framer Motion spring configs imported from `motion.config.ts`
- [ ] All images use WebP format with fallbacks
- [ ] 3D components lazy-loaded (React.lazy)
- [ ] Focus states implemented for keyboard navigation

### For QA:
- [ ] Test on Chrome, Firefox, Safari (latest 2 versions)
- [ ] Test on iPhone (Safari), Android (Chrome)
- [ ] Test with keyboard-only navigation
- [ ] Test with VoiceOver/NVDA screen readers
- [ ] Test with "Reduce Motion" enabled
- [ ] Lighthouse score >90 (all categories)

---

## 14. DESIGN TOKENS (Export)

```javascript
// design-tokens.js
export const tokens = {
  colors: {
    void: {
      pure: '#050505',
      900: '#0A0A0A',
      800: '#121212',
      700: '#1A1A1A',
    },
    cyber: {
      cyan: '#06B6D4',
      purple: '#A855F7',
      yellow: '#EAB308',
      green: '#10B981',
      red: '#EF4444',
      pink: '#EC4899',
    },
    glass: {
      light: 'rgba(255, 255, 255, 0.05)',
      medium: 'rgba(255, 255, 255, 0.10)',
      border: 'rgba(255, 255, 255, 0.10)',
      text: 'rgba(255, 255, 255, 0.70)',
      heading: 'rgba(255, 255, 255, 0.95)',
    },
  },
  
  typography: {
    fontFamily: {
      heading: 'Space Grotesk, system-ui, sans-serif',
      body: 'Satoshi, -apple-system, sans-serif',
      mono: 'JetBrains Mono, Consolas, monospace',
    },
    fontSize: {
      xs: 'clamp(0.75rem, 1.5vw, 0.875rem)',
      sm: 'clamp(0.875rem, 2vw, 1rem)',
      base: 'clamp(1rem, 2.5vw, 1.125rem)',
      lg: 'clamp(1.125rem, 3vw, 1.25rem)',
      xl: 'clamp(1.25rem, 3.5vw, 1.5rem)',
      '2xl': 'clamp(1.5rem, 4vw, 2rem)',
      '3xl': 'clamp(2rem, 5vw, 3rem)',
      '4xl': 'clamp(3rem, 6vw, 4rem)',
      '5xl': 'clamp(4rem, 8vw, 6rem)',
      '6xl': 'clamp(6rem, 10vw, 8rem)',
    },
  },
  
  spacing: {
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    6: '3rem',
    8: '4rem',
    12: '6rem',
  },
  
  motion: {
    springs: {
      snappy: { stiffness: 300, damping: 20, mass: 1 },
      floaty: { stiffness: 150, damping: 15, mass: 1 },
      heavy: { stiffness: 100, damping: 40, mass: 2 },
    },
    duration: {
      instant: '100ms',
      fast: '200ms',
      normal: '400ms',
      slow: '600ms',
      slower: '1000ms',
    },
  },
};
```

---

## 15. FIGMA SETUP GUIDE

### 15.1 Color Styles
1. Create color styles for each token
2. Name format: `Color/Void/Pure`, `Color/Cyber/Cyan`
3. Use consistent naming across design and code

### 15.2 Text Styles
```
Text/Heading/H1 - 96px/Bold/Space Grotesk/-5% tracking
Text/Heading/H2 - 64px/Bold/Space Grotesk/-5% tracking
Text/Body/Large - 18px/Regular/Satoshi
Text/Body/Base - 16px/Regular/Satoshi
Text/Mono/Label - 14px/Regular/JetBrains Mono/+5% tracking
```

### 15.3 Component Library
- `BentoCard` (variants: 1x1, 1x2, 2x2, interactive)
- `Button` (variants: primary, secondary, ghost)
- `HUDButton` (states: default, hover, active)
- `Input` (states: default, focus, error)
- `Badge` (variants: rank, achievement, special)

---

**END OF VISUAL DNA**

---

*This document is the source of truth for all visual decisions. When in doubt, reference this guide. Last updated: 2026-02-05*
```

This comprehensive Visual DNA document provides complete specifications for designers and developers to maintain visual consistency throughout the project. [wix](https://www.wix.com/blog/web-design-trends)