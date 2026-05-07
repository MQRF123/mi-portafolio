# Skill Registry — mi-portafolio

Generated: 2026-05-02

## Project Convention Files

| File | Purpose |
|------|---------|
| `AGENTS.md` | Next.js version warning — read `node_modules/next/dist/docs/` before writing code |
| `CLAUDE.md` | References AGENTS.md |

## User Skills

| Skill | Trigger Context |
|-------|----------------|
| `branch-pr` | Creating a pull request, opening a PR, preparing changes for review |
| `go-testing` | Writing Go tests, using teatest, adding test coverage |
| `issue-creation` | Creating a GitHub issue, reporting a bug, requesting a feature |
| `judgment-day` | Adversarial dual review ("judgment day", "review adversarial") |
| `skill-creator` | Creating a new skill, adding agent instructions, documenting patterns |

## Compact Rules

### AGENTS.md — Next.js Version Warning
**Rule**: This project uses Next.js 16.2.4. APIs, conventions, and file structure differ from training data. ALWAYS read `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed deprecation notices.

### Project Conventions
**Stack**: Next.js 16 App Router, React 19, TypeScript strict, Tailwind 4, Three.js/R3F, Lenis, React Compiler
**Patterns**:
- Dynamic imports for all Three.js/R3F components (SSR incompatible)
- Flat component structure under `src/components/`
- React Compiler active — avoid manual `useMemo`/`useCallback`
- Tailwind 4 uses PostCSS plugin, not `tailwind.config.js`

### Quality
- Lint: `eslint`
- Type check: `npx tsc --noEmit`
- No formatter installed
- No test runner installed
