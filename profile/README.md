# Millions Dollar Project

> Private org of kenzot25 + invited collaborators. AI-augmented dev tooling, content automation, and shared agent config.

## Repositories

| Repo | What | Stack |
|---|---|---|
| [social-content-automation](./social-content-automation) | Electron desktop app for trend radar, AI content gen, multi-platform publishing. | Electron, TS, React, SQLite |
| [ai-video-studio](./ai-video-studio) | Prompt to short-form video (script, voice, B-roll, captions). Originated from MoneyPrinterTurbo. | Python, FastAPI, FFmpeg |
| [ai-task-orchestrator](./ai-task-orchestrator) | AI agent fleet for taking a task list and shipping the code. Originated from OpenHands. | Python, FastAPI, React, Docker |
| [ai-workspace](./ai-workspace) | Shared AI rules, skills, docs, MCP, and coding configs. Org-wide source of truth. | Markdown, JSON, YAML |
| [.github](./.github) | Org profile, templates, shared governance. | — |

## How to add a new repo

1. Create the repo under this org (private by default).
2. Add a row to the table above in this README.
3. Add description + topics: `gh repo edit millions-dollar-project/<name> --description "..." --add-topic ...`
4. Add the standard hygiene files (CONTRIBUTING, LICENSE, SECURITY, etc.) — see an existing repo.

## Conventions

- All repos **private**, MIT-licensed.
- Branch: `main`. Linear history (squash-merge).
- 1 approval required to merge (when org upgrades past Free).
- CODEOWNERS points to @kenzot25 until teams are added.
- No CI/CD on this org yet. Manual review only.
- All work happens on a branch + PR, no direct pushes to `main`.

## AI assistance policy

AI-generated code is welcome. Disclose the model in every PR body. The
canonical rules + skills live in [`ai-workspace`](./ai-workspace).
