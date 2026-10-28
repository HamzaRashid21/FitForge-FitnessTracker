# FitForge — Environment Setup Guide

This guide details the prerequisites, configuration parameters, and database setup instructions required to run the FitForge Fitness Tracker platform locally.

---

## 1. Prerequisites & Software Versions

| Dependency  | Minimum Version | Verified Version         | Notes                               |
| :---------- | :-------------- | :----------------------- | :---------------------------------- |
| **Node.js** | `>= 18.0.0`     | `v24.14.0`               | Active LTS or Current recommended   |
| **npm**     | `>= 9.0.0`      | `11.9.0`                 | Bundled with Node.js                |
| **MongoDB** | `>= 6.0.0`      | `v7.0+` (Service active) | Local Community Server or Atlas URI |
| **Git**     | `>= 2.30.0`     | `2.4x`                   | Version control system              |

---

## 2. Backend Environment Variables (`backend/.env`)

Create `backend/.env` by copying `backend/.env.example`:

```bash
cp backend/.env.example backend/.env
```

### Configuration Keys & Defaults

| Variable                  | Type      | Default                                  | Description                                                            |
| :------------------------ | :-------- | :--------------------------------------- | :--------------------------------------------------------------------- |
| `NODE_ENV`                | `string`  | `development`                            | Application runtime environment (`development`, `test`, `production`). |
| `PORT`                    | `number`  | `5000`                                   | Port for the Express HTTP server listener.                             |
| `API_PREFIX`              | `string`  | `/api/v1`                                | URL version prefix for all REST API endpoints.                         |
| `CORS_ORIGIN`             | `string`  | `http://localhost:5173`                  | Comma-separated list of allowed client origins.                        |
| `RATE_LIMIT_WINDOW_MS`    | `number`  | `900000` (15 mins)                       | Duration window for the API rate limiter in milliseconds.              |
| `RATE_LIMIT_MAX_REQUESTS` | `number`  | `100`                                    | Max permitted requests per window per IP.                              |
| `MONGODB_URI`             | `string`  | `mongodb://127.0.0.1:27017/fitforge_dev` | MongoDB connection string.                                             |
| `MONGODB_DEBUG`           | `boolean` | `false`                                  | When `true`, logs verbose Mongoose query operations.                   |

---

## 3. Frontend Environment Variables (`frontend/.env`)

Create `frontend/.env` by copying `frontend/.env.example`:

```bash
cp frontend/.env.example frontend/.env
```

### Configuration Keys & Defaults

| Variable        | Type     | Default                        | Description                                                       |
| :-------------- | :------- | :----------------------------- | :---------------------------------------------------------------- |
| `VITE_API_URL`  | `string` | `http://localhost:5000/api/v1` | Base URL used by the centralized API client for backend requests. |
| `VITE_APP_ENV`  | `string` | `development`                  | Environment label displayed in client diagnostics.                |
| `VITE_APP_NAME` | `string` | `"FitForge Fitness Tracker"`   | Application name displayed in headings and title.                 |

> **Security Note:** In Vite applications, only variables prefixed with `VITE_` are bundled into client-side JavaScript. Never place backend secrets or private database keys in frontend environment files.

---

## 4. Database Setup

### Option A: Local MongoDB Community Server (Recommended for Development)

1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
2. Start the MongoDB service:
   - **Windows**: Verify service status via PowerShell:
     ```powershell
     Get-Service MongoDB
     ```
   - **macOS / Linux**:
     ```bash
     brew services start mongodb-community
     # or
     sudo systemctl start mongod
     ```
3. Set `MONGODB_URI` in `backend/.env`:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/fitforge_dev
   ```

### Option B: MongoDB Atlas (Cloud Cluster)

1. Log in to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free tier (M0) cluster.
2. Under **Database Access**, create a database user with read/write privileges.
3. Under **Network Access**, whitelist your IP address (or `0.0.0.0/0` for sandbox testing).
4. Click **Connect -> Drivers** and copy the connection string.
5. Set `MONGODB_URI` in `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://<db_user>:<db_password>@<cluster-url>.mongodb.net/fitforge_dev?retryWrites=true&w=majority
   ```

---

## 5. Safe Local Configuration Practices

- Never commit `.env` files to Git. The `.gitignore` file enforces exclusion of `.env`, `.env.local`, and related secrets.
- Use safe placeholder credentials in `.env.example` documents.
- Keep development and test database names separate (e.g. `fitforge_dev` vs `fitforge_test`).
- The application automatically starts in degraded mode if MongoDB is unreachable, preventing unhandled boot crashes.
