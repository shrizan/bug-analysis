# bug-analysis

A minimal Express app with **intentional flaws** used to test static-analysis tools, secrets scanners, accessibility checkers, and dependency auditors.

## Project structure

```
.
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── routes/
    │   └── auth.js
    └── utils/
        ├── api.js
        ├── config.js
        └── dom.js
```

## Running locally

```bash
npm install
npm start
```

## Branches

| Branch | Description |
|--------|-------------|
| `main` | All 6 issues present |
| `partial-fix` | Issues 1, 4, 5 fixed; issues 2, 3, 6 remain |

See [ISSUES.md](./ISSUES.md) for the full list of flaws, their exact file + line, and which are fixed on `partial-fix`.

## Detected by

| Tool type | Issues caught |
|-----------|---------------|
| Secrets scanner (e.g. truffleHog, gitleaks) | #1 |
| AST / Semgrep rules | #2, #3, #5 |
| Accessibility (axe-core) | #4 |
| `npm audit` | #6 |
