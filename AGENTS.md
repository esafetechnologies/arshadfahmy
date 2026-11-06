# Repository Guidelines

## Project Structure & Module Organization
This repository contains Arshad Fahmy's single-page portfolio, built with React and Vite using JavaScript ES modules.
- `src/main.jsx` mounts the application; `src/App.jsx` contains page sections, navigation, and small UI helpers.
- `src/styles.css` defines global styles, design tokens, and responsive layouts.
- `src/assets/` holds portraits and other imported images.
- `design/` contains concept images and desktop/mobile QA screenshots.
- `index.html` and `vite.config.js` configure the entry page and build tooling. `dist/` contains generated production output.

## Build, Test, and Development Commands
- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: generate the production site in `dist/`.
- `npm run preview`: serve the built site for local verification.

There are no configured test, lint, or formatting scripts. Do not assume `npm test` or `npm run lint` exists.

## Coding Style & Naming Conventions
Match the existing two-space indentation, single-quoted JavaScript strings, and omitted semicolons. Use function components and React hooks, PascalCase component names, and camelCase variables and handlers. JSX attributes use double quotes.

Use descriptive kebab-case CSS classes and existing modifier patterns such as `button--lime`. Reuse the CSS custom properties in `:root` for colors and fonts. Keep image assets in `src/assets/` and import them through JavaScript. Preserve semantic elements, descriptive image alternatives, navigation labels, and visible keyboard focus.

## Testing Guidelines
No automated testing framework or coverage threshold is configured. For application changes, run `npm run build`, then inspect the site using `npm run preview`. Check desktop and mobile layouts, portrait positioning, section scrolling, external links, and menu opening/closing, including body scroll restoration. Check the browser console for errors. Compare visual changes with references in `design/` and capture updated screenshots when appropriate.

## Commit & Pull Request Guidelines
History uses short, informal subjects such as `Update Site source`; no enforced commit convention is evident. Write concise, action-oriented subjects describing the actual change, and keep commits focused.

Pull requests should describe the change, link any relevant issue, and list verification performed. Include desktop/mobile screenshots for visual changes. Review generated output separately and avoid unrelated dependency-cache changes, publishing archives, or existing working-tree edits.
