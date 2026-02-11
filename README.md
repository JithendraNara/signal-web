# product-analytics-dashboard

Frontend analytics application for business and engineering users.

## What This Demonstrates
- Role-ready React + TypeScript dashboard implementation.
- API-driven KPI visualization, experiment reporting, and alert workflows.
- Clean separation between API client layer and presentational components.

## Role Positioning
- Primary fit: Frontend Engineer, Software Engineer, Full-Stack Engineer
- Showcase focus: React architecture, API integration, responsive analytics UI
- Resume mapping: see `PROOF.md` and `RESUME_BULLETS.md`

## Views
- KPI Overview
- Funnel + Experiments
- Reliability + Alerts
- Alert evaluation control with API integration

## Stack
- React + TypeScript + Vite

## Architecture
- `src/lib/api.ts`: API client and typed response models.
- `src/components/`: reusable KPI and table UI blocks.
- `src/pages/App.tsx`: dashboard composition and state management.
- `src/styles/app.css`: visual system and responsive layout.

## Repository Layout
```text
src/lib/                # API client + types
src/components/         # Reusable UI components
src/pages/              # Page-level orchestration
src/styles/             # Styling
```

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Environment
- `VITE_API_BASE` (optional): backend base URL, defaults to `http://localhost:8080`.

## CI
GitHub Actions runs install + production build on push/PR:
- `.github/workflows/ci.yml`

## Development Trail
- Roadmap: `ROADMAP.md`
- Changelog: `CHANGELOG.md`
- Proof mapping: `PROOF.md`
- Resume bullets: `RESUME_BULLETS.md`
