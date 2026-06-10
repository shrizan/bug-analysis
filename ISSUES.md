# Known Issues

This project intentionally contains 6 detectable flaws for static-analysis and audit testing.

## All 6 Issues

| # | Category | File | Line | Description |
|---|----------|------|------|-------------|
| 1 | Secrets scanner | `src/utils/config.js` | 3 | Hardcoded API key `sk-prod-...` assigned directly in source |
| 2 | AST / Semgrep | `src/routes/auth.js` | 8 | `eval()` called on user-supplied `req.body.username` |
| 3 | AST / Semgrep | `src/utils/dom.js` | 4 | `innerHTML` assigned from unsanitised `userInput` |
| 4 | Accessibility (axe) | `public/index.html` | 10 | `<img>` tag has no `alt` attribute |
| 5 | AST | `src/utils/api.js` | 4 | `fetch()` chain has no `.catch()` or `try/catch` |
| 6 | npm audit | `package.json` | 13 | `lodash@4.17.4` — prototype-pollution CVE-2019-10744 |

---

## Fixes Applied on `partial-fix` Branch

Issues **1, 4, and 5** are fixed on the `partial-fix` branch. Issues 2, 3, and 6 remain unfixed.

| # | Fixed? | What changed |
|---|--------|--------------|
| 1 | YES | API key moved to `process.env.API_KEY`; a `.env.example` note added |
| 2 | NO | `eval()` still present |
| 3 | NO | `innerHTML` still present |
| 4 | YES | `alt="Company logo"` added to the `<img>` tag |
| 5 | YES | `.catch()` handler added to the `fetch()` chain |
| 6 | NO | `lodash` still pinned to `4.17.4` |
