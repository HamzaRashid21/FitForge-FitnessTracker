# FitForge — Development Workflow & Commands

This guide documents day-to-day development operations, quality validation steps, and troubleshooting procedures for the FitForge Fitness Tracker project.

---

## 1. Initial Installation

FitForge uses standard npm dependency management with dedicated lockfiles for each application tier.

From the repository root, install dependencies for all layers:

```bash
# 1. Install root orchestration dependencies (concurrently, prettier)
npm install

# 2. Install backend dependencies
npm install --prefix backend

# 3. Install frontend dependencies
npm install --prefix frontend
```

---

## 2. Development Commands

### Concurrent Execution (Root)

To run both backend and frontend development servers concurrently:

```bash
npm run dev
```

- **Backend API**: Starts with `tsx watch` at `http://localhost:5000` (live reloading).
- **Frontend App**: Starts with `vite` at `http://localhost:5173` (HMR enabled).

### Independent Execution

You can also run each tier independently from the root or from its own folder:

```bash
# From root directory:
npm run dev:backend
npm run dev:frontend

# Or directly from the application directories:
cd backend && npm run dev
cd frontend && npm run dev
```

---

## 3. Code Quality: Linting & Formatting

### Linting (ESLint Flat Config)

Both projects use ESLint with strict TypeScript rules:

```bash
# Run ESLint across both backend and frontend:
npm run lint

# Run backend or frontend independently:
npm run lint:backend
npm run lint:frontend
```

### Formatting (Prettier)

The project utilizes a unified `.prettierrc.json` file at the root:

```bash
# Verify formatting compliance across all files:
npm run format:check

# Automatically fix formatting issues across the workspace:
npm run format
```

---

## 4. Automated Testing (Vitest)

Both tiers use Vitest for fast, modern TypeScript execution.

```bash
# Run all test suites across backend and frontend:
npm run test

# Run backend tests only (Supertest integration + unit tests):
npm run test:backend

# Run frontend tests only (Testing Library component + smoke tests):
npm run test:frontend
```

To run tests in watch mode during development:

```bash
cd backend && npm run test:watch
cd frontend && npm run test:watch
```

---

## 5. Production Build Verification

Verify that TypeScript compilation and asset bundling succeed without type errors:

```bash
# Build both tiers:
npm run build

# Build backend (compiles TypeScript to dist/ via tsc):
npm run build:backend

# Build frontend (type checks and bundles to dist/ via vite build):
npm run build:frontend
```

To run the compiled backend production server:

```bash
npm start --prefix backend
# Runs: node dist/server.js
```

---

## 6. Common Troubleshooting Steps

### 1. Port 5000 or 5173 Already in Use

- **Issue**: `EADDRINUSE: address already in use :::5000`
- **Solution**: Identify and terminate the lingering process:
  - Windows:
    ```powershell
    Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force
    ```
  - Linux / macOS:
    ```bash
    lsof -ti:5000 | xargs kill -9
    ```

### 2. MongoDB Unreachable at Startup

- **Issue**: Backend reports `MongoDB could not be connected at startup. The server will start in degraded mode.`
- **Diagnostics**:
  - Check whether the local MongoDB service is active (`Get-Service MongoDB` on Windows).
  - Test port connectivity: verify MongoDB is listening on `127.0.0.1:27017`.
  - The health endpoint (`/api/v1/health`) will report `status: "degraded"` with HTTP status 503 until connection is restored.

### 3. Missing Dependencies or Clean Reinstall

If package installations become desynchronized:

```bash
# Windows PowerShell:
Remove-Item -Recurse -Force node_modules, backend\node_modules, frontend\node_modules
npm install; npm install --prefix backend; npm install --prefix frontend
```
