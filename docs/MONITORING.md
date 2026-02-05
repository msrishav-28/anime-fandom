# Monitoring & Analytics Plan

To ensure 99.9% uptime and a bug-free experience, we implement a multi-layer monitoring strategy.

## 1. Error Tracking (Sentry)

We use **Sentry** for full-stack error reporting.

### Configuration
- **Frontend:** Catches React Error Boundaries, Unhandled Promise Rejections.
- **Backend:** Middleware captures Express errors.
- **Instrumentation:** Use Next.js 15 `instrumentation.js` to capture server-side errors in the App Router.

### Alerting Rules
| Condition | Channel | Severity |
|-----------|---------|----------|
| Error Rate > 1% | Slack #incidents | Critical |
| New Issue (Freq > 10) | Slack #bugs | High |
| API Latency > 2s (p95) | Slack #performance | Warning |

## 2. Server Observability (Next.js 15 Instrumentation)

We leverage the stable `instrumentation.js` file for OpenTelemetry integration.

```javascript
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation.node');
  }
}

export async function onRequestError(err, request, context) {
  // Log to Sentry/Datadog
  Sentry.captureException(err);
}
```

## 3. Performance Monitoring (Vercel Speed Insights)

We track Core Web Vitals to ensure SEO and UX standards.

**Key Metrics:**
- **LCP (Largest Contentful Paint):** Target < 2.5s
- **INP (Interaction to Next Paint):** Target < 200ms
- **CLS (Cumulative Layout Shift):** Target < 0.1

**Dashboard:** Available in Vercel Project Analytics tab.

## 4. Product Analytics (Plausible)

Privacy-friendly analytics to track user engagement.

### Custom Events
1.  **Content Creation**
    - `artifact_created`: { wiki: "solo-leveling", type: "character" }
    - `edit_submitted`: { wiki: "arcane", ram_earned: 20 }

2.  **Gamification**
    - `ram_awarded`: { amount: 50, source: "signup" }
    - `rank_up`: { new_rank: "Operator" }

3.  **Social**
    - `theory_posted`: { wiki: "one-piece" }
    - `bounty_claimed`

### Key Dashboards
- **Growth:** Daily Active Users (DAU), Signups.
- **Engagement:** Average Session Duration, Pages per Session.
- **Contribution:** Ratio of Readers to Editors (Target: 1% Editors).

## 5. Uptime & Health Checks (BetterStack)

- **Probe Frequency:** Every 1 minute.
- **Locations:** US, EU, Asia.
- **Target:** `https://neuroarchive.com/api/health`
- **Status Page:** `status.neuroarchive.com` (Public facing).

## 6. Logging Policy

- **Development:** Console logs.
- **Production:**
  - **Access Logs:** Vercel Logs (Retention: 7 days).
  - **Application Logs:** Structured JSON logs sent to Axiom or Logtail.
  - **PII:** Never log email, password, or IP addresses (redact before logging).
