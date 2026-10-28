# FitForge — Architecture & System Design

## 1. Architectural Strategy: Modular Monolith

FitForge Fitness Tracker is architected as a **modular monolith** with a strict decoupling between the client presentation application (`frontend/`) and the application API service (`backend/`).

### Rationale for Modular Monolith

1. **Domain Cohesion & Simplicity**: High feature density (workouts, nutrition, analytics, subscriptions, community) benefits from a unified data layer without the operational latency, distributed transactions, and deployment complexity of microservices.
2. **Clear Feature Boundaries**: Business domains are structured as self-contained modules (`src/modules/*`), each encapsulating its routes, controllers, services, database models, validators, and contracts.
3. **Independent Deployability**: Frontend and backend are completely separate codebases with their own package manifests, dependencies, configurations, and build pipelines.

```
+--------------------------------------------------------------------------+
|                          FitForge Architecture                           |
+--------------------------------------------------------------------------+
                                     |
              +----------------------+----------------------+
              |                                             |
              v                                             v
     +-----------------+                           +-----------------+
     |    frontend/    |                           |    backend/     |
     | React + TS +    |                           | Express + TS +  |
     | Vite + Router   |                           | Mongoose + Zod  |
     +--------+--------+                           +--------+--------+
              |                                             |
              |            REST API (/api/v1)               |
              +============================================>+
                                                            |
                                                            v
                                                   +-----------------+
                                                   |     MongoDB     |
                                                   | Database Engine |
                                                   +-----------------+
```

---

## 2. Request Flow & Pipeline Sequence

All incoming client requests to the backend follow a deterministic, layered middleware pipeline:

```
[ Client Request ]
       |
       v
 [ Helmet Security Headers ]
       |
       v
 [ CORS Origin Validation ] (Explicit whitelist: http://localhost:5173)
       |
       v
 [ Body Parser / Size Limits ] (JSON & URL-encoded <= 10kb)
       |
       v
 [ Morgan Request Logger ] (Sanitized output; skipped in tests)
       |
       v
 [ Express Rate Limiter ] (100 requests per 15 min window)
       |
       v
 [ Versioned Router (/api/v1) ]
       |
       +---> [ Zod Request Validation Middleware ] (body / query / params)
       |        |
       |        v
       +---> [ Controller ] (Translates HTTP request to service call)
       |        |
       |        v
       +---> [ Service Layer ] (Executes pure business logic)
       |        |
       |        v
       +---> [ Mongoose Model ] (Data access & schema persistence)
       |
       v
 [ 404 Not Found Handler ] (Catches unmatched routes)
       |
       v
 [ Centralized Error Handler ] (Standard JSON error contracts, hides stack in prod)
       |
       v
[ Client Response ]
```

---

## 3. Separation of Responsibilities

### Frontend (`frontend/`)

- **`src/app/router/`**: Declarative routing via React Router DOM.
- **`src/app/providers/`**: Centralized application providers.
- **`src/app/layouts/`**: Presentation shells, navigation headers, and responsive footers.
- **`src/components/ui/`**: Atomic, reusable interface components (Button, Input, Card, Container, Badge).
- **`src/components/feedback/`**: System feedback indicators (Spinner, Alert, EmptyState).
- **`src/services/`**: Centralized API clients using environment-driven base URLs and typed response contracts.
- **`src/features/`**: Domain feature modules containing feature-specific views and hooks.

### Backend (`backend/`)

- **`src/app.ts`**: Express application factory configuring all middleware and routes. **Never starts a network listener directly**, ensuring fast integration testing via Supertest.
- **`src/server.ts`**: Process orchestrator. Validates configuration schemas at boot, handles MongoDB connection, starts the HTTP server, and registers graceful termination hooks (`SIGTERM`, `SIGINT`).
- **`src/config/env.ts`**: Strict environment variable validation using Zod schemas. Fails fast with descriptive diagnostics if configuration is invalid.
- **`src/database/connection.ts`**: Resilient Mongoose connection manager with lifecycle event monitoring and health reporting.
- **`src/common/errors/`**: Structured error hierarchy extending `AppError` (`NotFoundError`, `ValidationError`, `BadRequestError`, etc.).
- **`src/common/middleware/`**: Cross-cutting handlers for errors, 404s, rate limiting, logging, and validation.

---

## 4. Database Connection Lifecycle

1. **Startup**: `server.ts` calls `connectDatabase()`, establishing a pooled connection via Mongoose. If the initial connection fails, the error is logged and the server runs in a degraded state without process crashing.
2. **Runtime Events**: Active listeners monitor `connected`, `error`, and `disconnected` events.
3. **Health Reporting**: `getDatabaseHealth()` inspects `mongoose.connection.readyState` and returns a real-time status (`connected`, `connecting`, `disconnected`, or `disconnecting`).
4. **Graceful Shutdown**: On `SIGTERM` or `SIGINT`, the HTTP server stops accepting incoming traffic, and `disconnectDatabase()` cleanly closes all pooled sockets before terminating.

---

## 5. Security Boundaries

- **Zero Secret Exposure**: Passwords, connection strings, and tokens are forbidden from logs and client-side builds. The frontend only exposes variables prefixed with `VITE_`.
- **Strict Role & Entitlement Separation**:
  - **Roles**: Exactly `Admin` and `User`. Public registration cannot assign the `Admin` role.
  - **Subscription Tiers**: Exactly `Free` and `Premium`. Entitlements are enforced strictly on the backend.
  - Role and Subscription are completely separate dimensions.
- **CORS Whitelist**: Unrestricted (`*`) CORS is disallowed in production. Allowed origins are configured through environment variables.
- **Payload Limits**: Request bodies are capped at 10kb to mitigate denial-of-service attempts.
- **Rate Limiting**: Configured rate limits protect `/api/v1` routes against brute-force and resource exhaustion.
