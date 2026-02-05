# Contributing to Neuro-Archive

Welcome, Archivist. This guide outlines how to contribute to the codebase.

## 1. Getting Started

### Prerequisites
- Node.js 20+
- npm 10+
- MongoDB (Local or Atlas)

### Setup
1. Clone the repository
2. `npm install` (Installs dependencies for both web and api workspaces)
3. `npm run dev` (Starts frontend and backend concurrently)

## 2. Monorepo Structure

- `apps/web`: Next.js 15 Frontend
- `apps/api`: Express Backend
- `packages/`: Shared libraries (if any)

## 3. Workflow

1. **Create a Branch**: `feature/my-new-feature` or `fix/bug-id`.
2. **Develop**: Follow the design system in `docs/DESIGN_SYSTEM.md`.
3. **Lint**: Run `npm run lint --workspace=apps/web` before committing.
4. **Push & PR**: Submit a Pull Request for review.

## 4. Coding Standards

- **TypeScript**: No `any`. Define interfaces for all props and API responses.
- **Styling**: Use Tailwind CSS utility classes. Avoid inline styles.
- **Components**: Place generic UI in `components/ui`, domain-specific in `components/[feature]`.
- **Commits**: Use conventional commits (e.g., `feat: add magnetic button`, `fix: mobile padding`).

## 5. Definition of Done

- [ ] Linter passes with no errors.
- [ ] Component works on mobile (responsive check).
- [ ] No console errors.
