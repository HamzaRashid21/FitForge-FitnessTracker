# FitForge Fitness Tracker

> **A production-oriented, full-stack fitness and lifestyle tracking platform built with React, TypeScript, Express, and MongoDB.**

[![Build & Type-Check](https://img.shields.io/badge/Build-Passing-brightgreen)](<>)
[![Backend Tests](https://img.shields.io/badge/Backend%20Tests-6%20Passed-brightgreen)](<>)
[![Frontend Tests](https://img.shields.io/badge/Frontend%20Tests-5%20Passed-brightgreen)](<>)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Mode-blue)](<>)
[![Phase](https://img.shields.io/badge/Phase-Phase%200%20Complete-emerald)](<>)

---

## 1. Project Overview

**FitForge** is an elite full-stack fitness analytics and lifestyle management platform engineered for everyday lifters, endurance athletes, and platform administrators. It establishes a resilient modular foundation that unifies workout scheduling, live tracking, granular macronutrient logging, body measurement progression, AI fitness insights, community challenges, and subscription management.

The repository is structured as a **modular monolith** with clean separation between the React client (`frontend/`) and Express REST API service (`backend/`).

---

## 2. Technology Stack

### Frontend (`frontend/`)

- **Core**: React 18 with TypeScript in strict mode
- **Build & Dev Tooling**: Vite with ESM bundling
- **Routing**: React Router DOM (v6) with declarative route architecture
- **Design System Foundation**: Custom CSS custom-property tokens, accessible atomic UI components (`Button`, `Input`, `Card`, `Container`, `Badge`, `Spinner`, `Alert`, `EmptyState`)
- **Icons**: Lucide React
- **Quality & Testing**: ESLint (Flat Config), Prettier, Vitest, React Testing Library, and jsdom

### Backend (`backend/`)

- **Runtime**: Node.js (`>= 18.0.0`) with TypeScript in strict mode
- **Web Framework**: Express.js with ES Modules
- **Database & ODM**: MongoDB with Mongoose ODM (lifecycle connection pooling, typed schemas)
- **Validation**: Zod schema validation for environment variables and HTTP requests
- **Security Middleware**: Helmet security headers, CORS origin whitelisting, Express Rate Limit, body parsing limits (10kb)
- **Logging**: Morgan HTTP request logging (sanitized) and custom structured logger
- **Testing**: Vitest with Supertest for HTTP integration and unit testing

### System Constraints

- **Application Roles**: Exactly `Admin` and `User`.
- **Subscription Tiers**: Exactly `Free` and `Premium`.
- **Package Manager**: npm with committed lockfiles.

---

## 3. High-Level Architecture

```
FitForge-FitnessTracker/
├── frontend/             # React + Vite + TypeScript client
├── backend/              # Node.js + Express + TypeScript API
├── docs/                 # Architectural & operational documentation
├── package.json          # Workspace development scripts
└── README.md
```

- **Separation of Concerns**: In `backend/src/app.ts`, the Express application is initialized with middleware and routes without listening on a port. `backend/src/server.ts` manages environment validation, database connection, HTTP listening, and graceful termination hooks (`SIGTERM`, `SIGINT`).
- **Resilient Database Layer**: Mongoose connection management handles initial failures gracefully, enabling the server to run in degraded mode if MongoDB is temporarily unavailable.
- **Unified Contracts**: Strict JSON response contracts (`StandardSuccessResponse` and `StandardErrorResponse`) ensure client-server consistency.

---

## 4. Prerequisites

- **Node.js**: `v18.0.0` or higher (verified on `v24.14.0`)
- **npm**: `v9.0.0` or higher (verified on `11.9.0`)
- **MongoDB**: `v6.0.0` or higher running locally on port 27017 or a valid MongoDB Atlas cluster URI.

---

## 5. Installation Instructions

Clone the repository and install dependencies:

```bash
# 1. Install root orchestration dependencies
npm install

# 2. Install backend dependencies
npm install --prefix backend

# 3. Install frontend dependencies
npm install --prefix frontend
```

---

## 6. Environment Setup

Create environment configuration files for both tiers:

```bash
# Backend configuration
cp backend/.env.example backend/.env

# Frontend configuration
cp frontend/.env.example frontend/.env
```

### Key Environment Variables

#### `backend/.env`

```env
NODE_ENV=development
PORT=5000
API_PREFIX=/api/v1
CORS_ORIGIN=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
MONGODB_URI=mongodb://127.0.0.1:27017/fitforge_dev
MONGODB_DEBUG=false
```

#### `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_APP_ENV=development
VITE_APP_NAME="FitForge Fitness Tracker"
```

For full setup instructions, see the [Environment Setup Guide](docs/environment-setup.md).

---

## 7. Running the Application

### Development Mode (Concurrent)

To start both backend and frontend development servers concurrently:

```bash
npm run dev
```

- **Frontend App**: Available at [http://localhost:5173](http://localhost:5173)
- **Backend API**: Available at [http://localhost:5000/api/v1](http://localhost:5000/api/v1)

### Independent Execution

```bash
# Run backend development server only (tsx watch)
npm run dev:backend

# Run frontend development server only (vite)
npm run dev:frontend
```

---

## 8. Automated Tests, Linting & Builds

All quality assurance checks can be executed from the repository root:

| Command                 | Action                                                              |
| :---------------------- | :------------------------------------------------------------------ |
| `npm run test`          | Executes all 11 automated test suites (Backend + Frontend).         |
| `npm run test:backend`  | Executes backend Supertest integration & unit test suites.          |
| `npm run test:frontend` | Executes frontend Testing Library & smoke test suites.              |
| `npm run lint`          | Runs ESLint across all TypeScript files.                            |
| `npm run format:check`  | Verifies code style compliance using Prettier.                      |
| `npm run format`        | Automatically formats files across the repository.                  |
| `npm run build`         | Compiles backend (`tsc`) and builds frontend bundle (`vite build`). |

---

## 9. Health & Diagnostics Endpoint

The backend provides a standardized system health endpoint:

```http
GET /api/v1/health
```

### Example Response (200 OK)

```json
{
  "success": true,
  "message": "System health report",
  "data": {
    "status": "ok",
    "timestamp": "2026-10-29T02:13:57.357Z",
    "uptimeSeconds": 14,
    "environment": "development",
    "version": "0.1.0",
    "services": {
      "database": {
        "status": "connected",
        "readyState": 1,
        "host": "127.0.0.1",
        "name": "fitforge_dev"
      }
    }
  },
  "timestamp": "2026-10-29T02:13:57.357Z"
}
```

If the database is disconnected or unreachable, the endpoint returns HTTP `503 Service Unavailable` with `status: "degraded"` while masking internal credentials and connection details.

---

## 10. Project Documentation Index

- [Architecture & System Design](docs/architecture.md) — Modular monolith structure, middleware flow, and database lifecycle.
- [Repository Folder Structure](docs/folder-structure.md) — Complete folder breakdown and tier responsibilities.
- [Environment Setup Guide](docs/environment-setup.md) — Configuration guide for Node.js, MongoDB local, and MongoDB Atlas.
- [Development Workflow](docs/development-workflow.md) — Operations, scripts, testing guidelines, and troubleshooting.
- [API Conventions](docs/api-conventions.md) — Versioning, response shapes, error contracts, and pagination.
- [Phase Implementation Roadmap](docs/phase-roadmap.md) — Official status of all 18 project phases.
- [Master Specification](fitforge.md) — Comprehensive requirements and architectural breakdown.

---

## 11. Current Implementation Status

- [x] **Phase 0: Project Foundation & Architecture** (COMPLETED)
- [ ] **Phase 1: Design System, Application Layout & Public Pages** (Planned)
- [ ] **Phase 2: Authentication & Account Security** (Planned)
- [ ] **Phases 3–17**: Refer to the [Phase Roadmap](docs/phase-roadmap.md) for full progression milestones.

> **Scope Note**: In adherence to Phase 0 scope discipline, no business logic, fake database models, or premature mock authentication has been implemented.
