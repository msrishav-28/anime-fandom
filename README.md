# Anime Fandom (Neuro-Archive)

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&logoColor=white)

## Overview

This project is a Proof of Concept (PoC) for a next-generation, immersive 3D wiki platform tailored for anime fandoms. It moves away from static text pages to "bio-digital" experiences, featuring 3D interactive artifacts, gamified reading mechanics, and real-time social features.

The architecture follows a monorepo structure containing a Next.js frontend and an Express backend.

## Architecture

The project is structured as a Monorepo:

- **apps/web**: Next.js 15 application (Frontend)
  - Uses React Three Fiber (R3F) for 3D elements.
  - Tailwind CSS for styling.
  - Framer Motion for animations.
  - NextAuth.js for authentication.

- **apps/api**: Express application (Backend)
  - REST API for data retrieval.
  - Socket.io for real-time features.
  - MongoDB (Mongoose) for data persistence.

## Features

### Immersive UI
- **HoloCard**: Interactive 3D cards that respond to mouse movement.
- **Liquid Grid**: Dynamic WebGL background.
- **Decrypt Text**: Cyberpunk-style text decoding animations.

### Gamification
- **RAM System**: Users earn "RAM" (currency) by reading articles.
- **Rank**: Progression system based on earned RAM.

### Functional Wiki
- **Dynamic Routing**: Supports any wiki slug and artifact slug.
- **Backend Integration**: Fetches data from a MongoDB database.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)

## Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/msrishav-28/anime-fandom.git
    cd anime-fandom
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Environment Setup**

    Create a `.env` file in the root directory or configure environment variables as per `docs/DEVELOPMENT_SETUP.md`.

    For the backend (`apps/api`), ensure you have a valid MongoDB connection string.

4.  **Run Development Server**

    This command starts both the frontend and backend concurrently.

    ```bash
    npm run dev
    ```

    - Frontend: http://localhost:3000
    - Backend: http://localhost:8080

## Documentation

Comprehensive documentation can be found in the `docs/` directory:

- [API Documentation](docs/API_DOCUMENTATION.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contribution Guide](docs/CONTRIBUTION_GUIDE.md)

## License

This project is licensed under the MIT License.
