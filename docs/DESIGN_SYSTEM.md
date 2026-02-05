# Neuro-Archive Design System

**Version:** 1.0.0
**Status:** Active

This document serves as the implementation guide for the "Bio-Digital Fluidity" design language.

## 1. Core Principles

1.  **Cinematic Depth**: UI elements should live in 3D space. Use z-indexing, parallax, and glassmorphism to create layers.
2.  **Tactile Physics**: Interactive elements respond with weight and momentum. Transitions use spring physics.
3.  **Data-as-Art**: Information is not just text; it is visualized (decrypt effects, scanlines, holograms).

## 2. Tokens

### Colors (Tailwind)
Defined in `tailwind.config.ts`.
- **Void (Backgrounds)**: `void-pure` (#050505), `void-900` (#0A0A0A)
- **Cyber (Accents)**: `cyber-cyan` (#06B6D4), `cyber-purple` (#A855F7), `cyber-yellow` (#EAB308)
- **Glass**: `glass-light` (5% white), `glass-medium` (10% white)

### Typography
- **Heading**: `Space Grotesk` (Uppercase, tight tracking)
- **Body**: `Satoshi` (Clean sans-serif)
- **Mono**: `JetBrains Mono` (Data readouts)

### Motion
- **Springs**: Snappy (stiffness: 300), Floaty (stiffness: 150)
- **Durations**: Instant (100ms), Fast (200ms), Normal (400ms)

## 3. Components

### BentoCard
The fundamental building block.
- **Props**: `span`, `title`, `glowColor`
- **Behavior**: Glass background, glows on hover, 1px border.

### HoloCard
A 2.5D character card.
- **Behavior**: Tilts on mouse move (perspective-1000). Contains "Aura" layer behind and "Glass" layer in front.

### DecryptText
Text animation component.
- **Behavior**: Scrambles characters before settling on the final string.

### FloatingHUD
The primary navigation dock.
- **Behavior**: Fixed bottom, magnetic icon pull.

## 4. Usage Guidelines

- **Do Not**: Use flat colors without noise/texture.
- **Do Not**: Use system fonts (Arial/Roboto).
- **Do**: Ensure all interactive elements have a `:hover` state (glow or scale).
- **Do**: Use existing `components/bento` or `components/ui` libraries.
