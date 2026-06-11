# Kiro Playwright Demo

A end-to-end testing demo project built with **Playwright**, **TypeScript**, and **Express**. Demonstrates a complete QA automation setup including UI tests, API tests, Page Object Model, and CI/CD via GitHub Actions.

---

## Tech Stack

| Layer | Technology |
|---|---|
| App server | Node.js + Express |
| Language | TypeScript |
| Testing | Playwright Test |
| CI/CD | GitHub Actions |

---

## Project Structure

```
kiro-playwright-demo/
├── src/
│   └── server.ts             # Express server serving the frontend
├── public/
│   └── index.html            # Single-page frontend app
├── tests/
│   ├── pages/
│   │   └── KiroAppPage.ts    # Page Object Model
│   ├── kiro-app.spec.ts      # UI tests
│   └── api.spec.ts           # API / server tests
├── .github/
│   └── workflows/
│       └── playwright.yml    # CI pipeline
└── playwright.config.ts      # Playwright configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Build the server

```bash
npm run build
```

### Run the app locally

```bash
npm start
# App available at http://localhost:3000
```

---

## Running Tests

Playwright automatically starts the server before running tests (configured via `webServer` in `playwright.config.ts`).

```bash
npm test
```

To view the interactive HTML report after a run:

```bash
npx playwright show-report
```

---

## Test Coverage

### UI Tests (`tests/kiro-app.spec.ts`)

Uses the **Page Object Model** pattern via `KiroAppPage` to keep tests readable and maintainable.

| Test | Description |
|---|---|
| Page title | Verifies the browser tab title |
| Main heading | Checks the H1 heading text |
| Input placeholder | Validates placeholder attribute |
| Submit via button | Greeting appears on button click |
| Submit via Enter key | Greeting appears on Enter keypress |
| Empty input | No greeting shown for blank submission |
| Update greeting | Greeting updates on re-submission |
| Whitespace input | Whitespace-only input treated as empty |

### API Tests (`tests/api.spec.ts`)

Tests the Express server at the HTTP level without a browser.

| Test | Description |
|---|---|
| 200 on root | Server responds successfully |
| Content-Type | Returns `text/html` |
| 404 on unknown route | Handles missing routes correctly |
| HTML body | Response contains expected markup |

---

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/playwright.yml`) runs on every **push** and **pull request** to `main`/`master`:

1. Installs Node.js 20 and dependencies
2. Builds the TypeScript server
3. Installs Chromium via Playwright
4. Runs the full test suite
5. Uploads the HTML test report as a build artifact (retained 30 days)

---

## Page Object Model

The `KiroAppPage` class in `tests/pages/KiroAppPage.ts` encapsulates all selectors and user interactions. Tests import and use this class rather than interacting with the page directly — making tests shorter, more readable, and easier to maintain when the UI changes.

```typescript
const appPage = new KiroAppPage(page);
await appPage.goto();
await appPage.submitName('Nageshwari');
await expect(appPage.greetingOutput).toHaveText('Hello, Nageshwari!');
```

---

## Author

Nageshwari — [github.com/enageshwari](https://github.com/enageshwari)
