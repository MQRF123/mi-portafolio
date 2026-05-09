# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| Creating a PR, opening a PR, preparing changes for review | branch-pr | /home/michael-quispe/.claude/skills/branch-pr/SKILL.md |
| Writing Go tests, using teatest, adding test coverage | go-testing | /home/michael-quispe/.claude/skills/go-testing/SKILL.md |
| Creating a GitHub issue, reporting a bug, requesting a feature | issue-creation | /home/michael-quispe/.claude/skills/issue-creation/SKILL.md |
| "judgment day", "judgment-day", "review adversarial", "dual review", "doble review", "juzgar", "que lo juzguen" | judgment-day | /home/michael-quispe/.claude/skills/judgment-day/SKILL.md |
| Creating a new skill, adding agent instructions, documenting patterns for AI | skill-creator | /home/michael-quispe/.claude/skills/skill-creator/SKILL.md |
| Designing pages/components, choosing colors/fonts/styles, reviewing UI, accessibility, UX, animation, charts | ui-ux-pro-max | /home/michael-quispe/VisualStudio/mi-portafolio/.agents/skills/ui-ux-pro-max/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### branch-pr
- Every PR MUST link an approved issue (`Closes #N`, `Fixes #N`, or `Resolves #N`)
- Every PR MUST have exactly one `type:*` label — no exceptions
- Branch naming: `type/description` (lowercase, regex: `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$`)
- Commits: conventional format `type(scope): description` — no `Co-Authored-By` trailers
- Run `shellcheck scripts/*.sh` before pushing any script changes
- PR body MUST include: linked issue, type checkbox, summary, changes table, test plan
- Blank PRs without issue linkage are blocked by GitHub Actions

### go-testing
- Use table-driven tests for all function tests: `tests := []struct{ name, input, expected string; wantErr bool }{ ... }`
- Test both success AND error cases when function returns an error
- Bubbletea state: test `Model.Update()` directly for state transitions
- Bubbletea full flow: use `teatest.NewTestModel(t, m)` + `tm.Send(tea.KeyMsg{...})`
- Visual output: use golden files in `testdata/` with `-update` flag support
- System/exec: use `t.TempDir()` for file ops; use interfaces + mocks for `os/exec`
- Integration tests that hit real commands: guard with `--short` skip

### issue-creation
- Blank issues are disabled — MUST use a template (bug_report.yml or feature_request.yml)
- Issues get `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, NOT issues
- Bug report requires: pre-flight checks, description, steps to reproduce, expected/actual behavior, OS, agent/client, shell
- Feature request requires: pre-flight checks, problem description, proposed solution, affected area
- Search for duplicates BEFORE creating any issue

### judgment-day
- Launch BOTH judges in parallel (async/delegate) — never sequential, never do review yourself
- Both judges receive identical prompts and the same target — no cross-contamination
- Inject `## Project Standards (auto-resolved)` into BOTH judge prompts AND the fix agent prompt
- Classify every WARNING: (real) = normal user can trigger it; (theoretical) = requires contrived/malicious scenario → report as INFO, do NOT fix, do NOT re-judge
- Confirmed = found by both agents → fix immediately; Suspect = found by one only → triage
- Round 1: present verdict, ASK user before fixing. Round 2+: only re-judge for confirmed CRITICALs
- APPROVED = 0 confirmed CRITICALs + 0 confirmed real WARNINGs (theoretical warnings may remain)
- After 2 fix iterations with remaining issues: ASK user to continue or escalate

### skill-creator
- Skill lives at `skills/{skill-name}/SKILL.md` with optional `assets/` and `references/` dirs
- Frontmatter required: `name`, `description` (includes Trigger text), `license: Apache-2.0`, `metadata.author`, `metadata.version`
- `references/` must point to LOCAL file paths — never web URLs
- DO NOT add a Keywords section — agent searches frontmatter, not body
- DO NOT duplicate existing docs — reference them instead
- After creating, register the skill in `AGENTS.md`
- Only create when pattern is reusable — not for one-off tasks

### ui-ux-pro-max
- Use `--design-system` first for any new page/component — generates style + color + typography + effects
- CLI: `python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system [-p "Project Name"]`
- Domain search: `--domain <ux|style|color|typography|chart|landing|product|react|web|google-fonts>`
- Accessibility CRITICAL: contrast 4.5:1, min touch target 44×44pt, visible focus rings, aria-labels on icon-only buttons
- Animation: 150–300ms duration, transform/opacity only (never width/height), respect prefers-reduced-motion
- Layout: mobile-first, 4/8dp spacing rhythm, min-h-dvh not 100vh, no horizontal scroll on mobile
- Typography: base 16px body, line-height 1.5–1.75, semantic color tokens (no raw hex in components)
- No emojis as icons — use SVG (Heroicons, Lucide); consistent icon family + stroke width throughout
- Forms: visible labels (not placeholder-only), errors below the field, inline validation on blur
- Navigation: bottom nav max 5 items, back behavior predictable, modals must have clear dismiss affordance
- Dark mode: test contrast independently — don't infer from light mode; use desaturated tonal variants not inverted

### next-js (project convention)
- This is Next.js with breaking changes — read `node_modules/next/dist/docs/` before writing ANY Next.js code
- Stack: Next.js App Router, React 19, TypeScript strict, Tailwind 4, Three.js/R3F, Lenis, React Compiler
- Dynamic imports for all Three.js/R3F components (SSR incompatible)
- Flat component structure under `src/components/`
- React Compiler active — avoid manual `useMemo`/`useCallback`
- Tailwind 4 uses PostCSS plugin, not `tailwind.config.js`
- No test runner installed; no formatter installed; lint via `eslint`; type check via `npx tsc --noEmit`

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| CLAUDE.md | /home/michael-quispe/VisualStudio/mi-portafolio/CLAUDE.md | Index — references AGENTS.md |
| AGENTS.md | /home/michael-quispe/VisualStudio/mi-portafolio/AGENTS.md | Next.js breaking changes — read `node_modules/next/dist/docs/` before writing code |
