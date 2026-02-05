# Deployment & Infrastructure Guide

This document details the production infrastructure and deployment pipeline for Neuro-Archive.

## 1. Infrastructure Overview

| Component | Service | Tier/Spec | Region |
|-----------|---------|-----------|--------|
| **Frontend** | Vercel | Pro | Global (Edge) |
| **Backend** | Railway | Developer Plan (8GB RAM) | US-West |
| **Database** | MongoDB Atlas | M10 Cluster (General) | AWS US-West |
| **Cache** | Upstash Redis | Pay-as-you-go | AWS US-West |
| **Storage** | AWS S3 | Standard | US-East-1 |
| **CDN** | Cloudflare | Free/Pro | Global |

---

## 2. Configuration & Environment Variables

### Frontend (Vercel)
Set these in Vercel Project Settings:
```env
NEXT_PUBLIC_API_URL=https://api.neuroarchive.com
NEXT_PUBLIC_SOCKET_URL=wss://api.neuroarchive.com
NEXTAUTH_URL=https://neuroarchive.com
NEXTAUTH_SECRET=*** (Production Secret)
```

### Backend (Railway)
Set these in Railway Service Variables:
```env
PORT=8080
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/neuro_prod
REDIS_URL=redis://default:pass@cluster.upstash.io:6379
JWT_SECRET=*** (Production Secret)
AWS_S3_BUCKET=neuro-archive-prod
AWS_ACCESS_KEY_ID=***
AWS_SECRET_ACCESS_KEY=***
CORS_ORIGIN=https://neuroarchive.com
```

---

## 3. Deployment Pipeline (CI/CD)

We use **GitHub Actions** for CI/CD.

### Workflow: `production.yml`

**Trigger:** Push to `main` branch.

**Steps:**
1. **Test:** Run Unit & Integration Tests. (Must pass)
2. **Build:** Run `npm run build` to verify no compilation errors.
3. **Deploy Frontend:**
   - Uses `vercel/actions` to deploy to Vercel Production.
4. **Deploy Backend:**
   - Uses `railway app deploy` to push the new Docker image/code.

### Rollback Strategy

**If a deploy fails or introduces a critical bug:**

1. **Frontend:**
   - Go to Vercel Dashboard -> Deployments.
   - Find the last stable deployment.
   - Click "Instant Rollback".
2. **Backend:**
   - Go to Railway Dashboard.
   - Select the previous deployment.
   - Click "Rollback".
3. **Database:**
   - MongoDB Atlas backups are taken every 24 hours.
   - Point-in-time recovery is available for the last 7 days.

---

## 4. Scaling Strategy

- **Frontend:** Serverless (Vercel) scales automatically.
- **Backend:** Railway is configured to auto-scale from 1 to 5 instances based on CPU > 70%.
- **Database:** MongoDB Atlas auto-scaling is enabled for storage. Computational scaling requires manual upgrade to M20+.

## 5. Domain & SSL

- **DNS Managed by:** Cloudflare
- **Apex Domain:** `neuroarchive.com` (Points to Vercel CNAME)
- **API Subdomain:** `api.neuroarchive.com` (Points to Railway CNAME)
- **SSL:** Enforced by Cloudflare (Full Strict mode).

## 6. Monitoring & Alerts

- **Uptime:** BetterStack checks `https://neuroarchive.com` every minute.
- **Errors:** Sentry captures frontend and backend exceptions.
  - Alert: `> 1% User Impact`
- **Performance:** Vercel Speed Insights tracks Core Web Vitals.
