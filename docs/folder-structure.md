# FitForge — Repository & Folder Structure

This document describes the actual codebase organization of **FitForge Fitness Tracker**, outlining the responsibilities of each directory.

```text
FitForge-FitnessTracker/
├── .editorconfig              # Code formatting rules for editors
├── .gitignore                 # Root Git exclusion rules
├── .prettierrc.json           # Prettier configuration
├── .prettierignore            # Files excluded from Prettier checks
├── package.json               # Root orchestrator scripts (concurrently, prettier)
├── package-lock.json          # Root lockfile
├── README.md                  # Project overview and operational guide
├── fitforge.md                # Master requirements and 17-phase implementation roadmap
│
├── docs/                      # Architectural and operational documentation
│   ├── api-conventions.md     # REST API standards, schemas, and response formats
│   ├── architecture.md        # Modular monolith system architecture and request flow
│   ├── development-workflow.md# Setup, test, build, and lint commands
│   ├── environment-setup.md   # Environment variable guide and database configurations
│   ├── folder-structure.md    # Repository directory layout and responsibilities
│   └── phase-roadmap.md       # Approved phase status and progression roadmap
│
├── frontend/                  # React + TypeScript client application
│   ├── .env.example           # Client environment template (VITE_ prefixed)
│   ├── eslint.config.js       # ESLint flat configuration for React & TypeScript
│   ├── index.html             # HTML5 entry template with viewport and meta tags
│   ├── package.json           # Frontend dependencies, scripts, and build tools
│   ├── tsconfig.json          # TypeScript strict configuration for application code
│   ├── tsconfig.node.json     # TypeScript configuration for build tool files
│   ├── vite.config.ts         # Vite bundler configuration with path aliases
│   ├── vitest.config.ts       # Vitest unit & component test configuration
│   │
│   ├── public/                # Static public assets (favicon.svg, icons)
│   │
│   └── src/
│       ├── App.tsx            # Application root composing Providers and Router
│       ├── main.tsx           # React DOM root mounting into #root
│       ├── vite-env.d.ts      # TypeScript ambient declarations for Vite environment
│       │
│       ├── app/
│       │   ├── layouts/       # Presentation shells (RootLayout header, navigation, footer)
│       │   ├── providers/     # Centralized application providers (AppProviders)
│       │   └── router/        # React Router routes definition (Root, 404, future paths)
│       │
│       ├── assets/            # Static imagery and logos (logo.svg)
│       │
│       ├── components/
│       │   ├── ui/            # Atomic reusable UI components (Button, Card, Input, Badge, Container)
│       │   ├── feedback/      # User feedback components (Alert, Spinner, EmptyState)
│       │   └── forms/         # Form layout primitives (FormGroup)
│       │
│       ├── features/          # Domain feature modules (placeholders with architectural READMEs)
│       │   ├── admin/         # Phase 16: Admin Panel
│       │   ├── ai-assistant/  # Phase 9: AI Fitness Assistant
│       │   ├── auth/          # Phase 2: Authentication & Security
│       │   ├── community/     # Phase 12: Social & Community
│       │   ├── dashboard/     # Phase 3: User Dashboard
│       │   ├── exercises/     # Phase 4: Exercise Library
│       │   ├── gamification/  # Phase 10: Gamification & Challenges
│       │   ├── notifications/ # Phase 11: Notifications & Smart Reminders
│       │   ├── nutrition/     # Phase 7: Nutrition & Hydration
│       │   ├── onboarding/    # Phase 3: Profiles & Onboarding
│       │   ├── progress/      # Phase 8: Measurements & Analytics
│       │   ├── reports/       # Phase 13: Reports & Data Export
│       │   ├── settings/      # Phase 15: Settings & Privacy
│       │   ├── subscriptions/ # Phase 14: Subscriptions & Billing
│       │   ├── support/       # Phase 15: Help & Support
│       │   └── workouts/      # Phase 5 & 6: Workout Builder & Tracking
│       │
│       ├── hooks/             # Custom React hooks (useHealthCheck)
│       ├── lib/               # Client configuration helpers (env.ts)
│       ├── pages/             # Page route views (HomePage, NotFoundPage)
│       ├── services/          # HTTP service layer (apiClient, healthService)
│       ├── styles/            # CSS tokens and global base styles (variables.css, global.css)
│       ├── types/             # Domain TypeScript contracts (api, auth, subscription)
│       └── utils/             # Formatters and date utilities (formatters.ts)
│
└── backend/                   # Node.js + Express + TypeScript API service
    ├── .env.example           # Backend environment template with safe defaults
    ├── eslint.config.js       # ESLint flat configuration for Node.js TypeScript
    ├── package.json           # Backend dependencies, scripts, and build tools
    ├── tsconfig.json          # TypeScript strict configuration for Node.js
    ├── vitest.config.ts       # Vitest backend integration test configuration
    │
    ├── src/
    │   ├── app.ts             # Express application factory (middleware, routes, error handlers)
    │   ├── server.ts          # Process lifecycle entry point (DB connection, HTTP listen, shutdown)
    │   │
    │   ├── config/
    │   │   └── env.ts         # Zod environment variable parsing and configuration export
    │   │
    │   ├── database/
    │   │   └── connection.ts  # Mongoose connection manager and lifecycle hooks
    │   │
    │   ├── common/
    │   │   ├── constants/     # Core system constants (roles.ts, subscriptions.ts)
    │   │   ├── errors/        # Custom error classes (AppError, httpErrors)
    │   │   ├── middleware/    # Cross-cutting middleware (error, 404, rateLimiter, logger, validator)
    │   │   ├── utils/         # Standard response helpers (apiResponse) and sanitized logger
    │   │   └── validators/    # Common Zod validation schemas (pagination, mongoId)
    │   │
    │   └── modules/           # Modular domain packages
    │       ├── health/        # System health inspection module (controller, service, routes, types)
    │       ├── admin/         # Phase 16 architectural specification
    │       ├── ai-assistant/  # Phase 9 architectural specification
    │       ├── auth/          # Phase 2 architectural specification
    │       ├── community/     # Phase 12 architectural specification
    │       ├── exercises/     # Phase 4 architectural specification
    │       ├── gamification/  # Phase 10 architectural specification
    │       ├── goals/         # Phase 8 architectural specification
    │       ├── notifications/ # Phase 11 architectural specification
    │       ├── nutrition/     # Phase 7 architectural specification
    │       ├── onboarding/    # Phase 3 architectural specification
    │       ├── progress/      # Phase 8 architectural specification
    │       ├── reports/       # Phase 13 architectural specification
    │       ├── settings/      # Phase 15 architectural specification
    │       ├── subscriptions/ # Phase 14 architectural specification
    │       ├── support/       # Phase 15 architectural specification
    │       ├── users/         # Phase 3 architectural specification
    │       └── workouts/      # Phase 5 & 6 architectural specification
    │
    └── tests/                 # Automated backend test suites
        ├── integration/       # Supertest HTTP integration tests (health, errorHandling)
        └── unit/              # Isolated unit tests (env configuration, constants)
```
