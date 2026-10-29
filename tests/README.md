# Portfolio Tests

Use Node.js 24 LTS, then run `npm install` and `npm test`.

- `portfolio.test.mjs` checks content completeness, category and technology search, work history, download assets, and production widget configuration.
- `app.test.mjs` builds the React app into the ignored `.cache` directory and checks navigation, filters, search dialogs, theme persistence, mobile focus containment, and clipboard success/failure states in jsdom.

The tests do not contact external services. The widget configuration check does not verify the MemoLink service or its answers.

jsdom does not render layouts or implement native dialog behaviour. Verify desktop/mobile layouts, native dialog focus restoration, contrast, and the live widget in a real browser before publishing.

Run `npm run dev` and open `http://localhost:5173/portfolio/` for a local preview. Vite selects another port if 5173 is occupied; use the URL it prints.

Run `npm run build` for the deployable output. For validation without touching the repository's legacy tracked `dist/index.html`, use `npm run build -- --outDir .cache/production-build`.
