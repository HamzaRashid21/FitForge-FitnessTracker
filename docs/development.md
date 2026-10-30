# FitForge Fitness Tracker — Development Guide

## Overview

This guide describes the development standards, commands, and workflow for the FitForge Fitness Tracker project across both frontend and backend workspaces.

## Prerequisites

- Node.js (v18.x or v20.x recommended)
- npm (v9.x or later)
- MongoDB instance (local or MongoDB Atlas)

## Project Setup

1. Install root dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Root: copy `.env.example` to `.env` if using root-level tooling.
   - Backend: copy `backend/.env.example` to `backend/.env`.

## Development Commands

### Root Workspaces
- `npm run dev`: Runs frontend dev server.
- `npm run dev:all`: Concurrently runs frontend and backend dev servers.
- `npm run build`: Builds both frontend and backend.
- `npm run test`: Executes unit tests across workspaces.
- `npm run lint`: Runs code quality checks.

### Frontend (`frontend/`)
- `cd frontend && npm run dev`: Start Vite development server at `http://localhost:5173/`.
- `cd frontend && npm run build`: TypeScript verification (`tsc -b`) and Vite production bundle.
- `cd frontend && npm run preview`: Preview production build locally.

### Backend (`backend/`)
- `cd backend && npm run dev`: Start backend server with hot-reload via tsx.
- `cd backend && npm run build`: Compile TypeScript into `dist/`.
- `cd backend && npm run test`: Run backend Vitest suite.

## Architecture Guidelines

- **Public Website**: Located in `frontend/src/features/public-site/` with layout in `frontend/src/layouts/public/`.
- **Feature Modules**: Modular organization inside `frontend/src/features/<feature>/` and `backend/src/modules/<module>/`.
- **Styling**: Vanilla CSS and theme tokens in `frontend/src/styles/` and Orisa assets in `frontend/public/assets/`.
