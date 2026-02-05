# Development Setup Guide

This guide ensures you can set up the Neuro-Archive development environment in under 15 minutes.

## Prerequisites

- **Node.js**: v20.x LTS or higher
- **PackageManager**: npm (v10+)
- **Database**: 
  - MongoDB 7.x (Local or Atlas free tier)
  - Redis 7.x (Local or Upstash free tier)
- **Cloud Services**:
  - AWS CLI configured (for S3 storage emulation or dev bucket)

## Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourorg/neuro-archive.git
cd neuro-archive

# Install dependencies (Monorepo root)
npm install

# Install dependencies for specific apps (if not using workspaces)
cd apps/web && npm install
cd ../../apps/api && npm install
```

## Step 2: Environment Configuration

Create a `.env` file in the root (or respective app folders) based on `.env.example`.

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_SOCKET_URL=ws://localhost:4000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=development-secret-key-123
```

### Backend (.env)

```env
PORT=4000
# Database
MONGODB_URI=mongodb://localhost:27017/neuro_dev
REDIS_URL=redis://localhost:6379

# Auth
JWT_SECRET=development-secret-key-123
# For Google OAuth (Optional for local dev, can use mock)
GOOGLE_CLIENT_ID=mock
GOOGLE_CLIENT_SECRET=mock

# Storage
AWS_S3_BUCKET=neuro-archive-dev
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=mock
AWS_SECRET_ACCESS_KEY=mock
```

## Step 3: Database Seeding

We provide a seed script to populate the database with initial wikis and test users.

```bash
# From the backend directory or root script
npm run seed:dev
```

This will create:
- Admin User: `admin` / `password123`
- Wiki: `solo-leveling`
- Character: `sung-jin-woo`

## Step 4: Run Development Servers

We use `concurrently` (TurboRepo) to run both frontend and backend.

```bash
# From root
npm run dev
```

Or run individually:

**Terminal 1 (Backend):**
```bash
cd apps/api
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd apps/web
npm run dev
```

## Step 5: Verification

1. Open [http://localhost:3000](http://localhost:3000).
2. Login with the dev credentials.
3. Verify you can see the "Solo Leveling" wiki.

## Common Issues

- **MongoDB connection error**: Ensure your local MongoDB service is running (`mongod`).
- **Redis connection error**: Ensure Redis is running (`redis-server`).
- **3D model loading errors**: Check if the `public/models` folder has the placeholder assets.

## VS Code Extensions (Recommended)

- **ESLint**: For linting
- **Prettier**: For formatting
- **Tailwind CSS IntelliSense**: For styling
- **GLSL Literal**: For shader highlighting
