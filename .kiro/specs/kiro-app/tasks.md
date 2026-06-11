# Tasks: Kiro App

## Task 1: Project Setup
- [ ] Install dependencies: `typescript`, `express`, `@types/express`, `@types/node`, `ts-node`
- [ ] Create `tsconfig.json` with `target: ES2020`, `module: CommonJS`, `outDir: ./dist`, `rootDir: ./src`, `strict: true`
- [ ] Add `build` script (`tsc`) and `start` script (`node dist/server.js`) to `package.json`

## Task 2: Express Server
- [ ] Create `src/server.ts`
- [ ] Configure Express to serve static files from the `public/` directory
- [ ] Start the server on port 3000
- [ ] Log `Server running at http://localhost:3000` on startup

## Task 3: Frontend Page
- [ ] Create `public/index.html`
- [ ] Add `<h1>` with text "Welcome to Kiro App"
- [ ] Add `<input type="text">` with id `nameInput` and placeholder "Enter your name"
- [ ] Add `<button>` with id `submitBtn` and label "Submit"
- [ ] Add `<p>` with id `greeting` (initially empty) to display the result

## Task 4: Greeting Logic
- [ ] Add inline `<script>` in `index.html`
- [ ] On `submitBtn` click, read `nameInput.value`
- [ ] If non-empty, set `greeting.textContent` to `Hello, [Name]!`
- [ ] If empty, clear `greeting.textContent`

## Task 5: Build & Verify
- [ ] Run `npm run build` to compile TypeScript
- [ ] Start the server and confirm it serves `index.html` at `http://localhost:3000`
