# Testing Strategy

This document outlines the comprehensive testing strategy for Neuro-Archive to ensure high code quality, reliability, and performance.

## 1. Unit Testing (Jest)

We use **Jest** for unit testing utility functions, hooks, and backend services.

**Scope:**
- **Utilities (`/packages/utils`)**: All shared helpers (formatters, validators).
- **Hooks**: Custom React hooks in `apps/web/hooks`.
- **Backend Services**: Gamification logic, RAM calculations, Search helpers.
- **Redux/Zustand Stores**: State manipulation logic.

**Coverage Target:** > 80% Line Coverage

**Example Test:**
```typescript
// ram.test.ts
describe('calculateRAM', () => {
  it('should award 50 RAM for character creation', () => {
    expect(calculateRAM('create_artifact')).toBe(50);
  });
});
```

## 2. Integration & E2E Testing (Playwright)

We use **Playwright** for end-to-end testing of critical user flows.

### Critical User Flows (P0)

1. **User Onboarding**
   - [ ] Sign up with email/password
   - [ ] Login with Google OAuth (mocked)
   - [ ] Verify session persistence across reloads

2. **Wiki Contribution**
   - [ ] Navigate to "Solo Leveling" wiki
   - [ ] Click "Create Artifact"
   - [ ] Fill out the character form (Title, Image, Type)
   - [ ] Submit and verify redirection to new page
   - [ ] Verify RAM balance increased

3. **Social Interaction**
   - [ ] Highlight text on an artifact page
   - [ ] Add an inline "Theory" comment
   - [ ] Verify comment appears in the sidebar
   - [ ] Verify socket event broadcast (if applicable)

### Secondary Flows (P1)
- Search function (type "Gojo", verify results)
- Profile customization (change theme)
- Bounty claiming

**Running E2E Tests:**
```bash
npm run test:e2e
```

## 3. Performance Testing (Lighthouse CI)

We integrate **Lighthouse CI** into the GitHub Actions pipeline to enforce performance budgets.

**Budgets:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **SEO Score:** > 90
- **Accessibility:** > 90

**Failure Condition:** Pull requests reducing the lighthouse score by > 5 points will be blocked.

## 4. Security Testing

- **Static Analysis (SAST):** ESLint security plugins to catch common vulnerabilities (XSS, Injection).
- **Dependency Audit:** `npm audit` run on every commit.
- **Manual Pentesting:**
  - SQL Injection attempts on search fields.
  - XSS attempts in wiki editors (payload sanitization verification).
  - Rate limit testing (verify 429 after 100 reqs).

## 5. Visual Regression Testing

We use Chromatic (or Playwright snapshots) to ensure UI consistency.

- **Design System:** All components in Storybook are snapshot tested.
- **Critical Pages:** Homepage and Artifact page visual snapshots.

## 6. Test Environment

- **CI:** Tests run on GitHub Actions runners.
- **Preview:** E2E tests run against Vercel Preview URLs.
- **Mocking:**
  - External APIs (Google Auth, AWS S3) are mocked in CI.
  - Database is reset before each E2E run.
