# FitForge – Onboarding Page

Standalone, dependency-free onboarding flow (HTML + CSS + vanilla JS).

## Run
Open `index.html` in a browser, or serve the folder:

    npx serve .

## Files
- `index.html` – page shell (header, main mount point, progress dots)
- `styles.css` – design tokens (dark/light via CSS variables) and components
- `script.js` – step definitions, state, validation, rendering
- `assets/logo.svg` – placeholder logo. Replace with your real logo file.

## Steps
Welcome → Goal → Experience → Equipment (skippable) → Body stats → Weekly schedule → Plan (Free/Premium) → Finish

## Integrating with React + Express
- Answers live in the `S` object in `script.js`.
- On "Go to dashboard", the page fires `window` event `onboarding:complete` with the answers in `event.detail`.
  In your app: POST them to the backend (e.g. `/api/onboarding`), then redirect to `/dashboard`.
- Progress is cached in `localStorage` (`ff_onb`) so a refresh resumes; replace with API persistence.

## Known limitations
- Pricing and payment are not connected. Premium must only be granted by backend-verified subscription status.
- Logo is an SVG approximation, not the original artwork.
- Fonts load from Google Fonts (Inter) with system fallbacks.
