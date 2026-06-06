# Millions Dollar Project

> Open-source toolkit for trend-aware, multi-platform social content
> publishing. Built as a polyrepo of small, focused services.

## What we're building

A desktop app + plugin system that helps creators:

- **Spot trends** — radar across platforms, surfaces rising topics.
- **Draft content** — AI-assisted copy + media picks.
- **Publish everywhere** — Facebook, Instagram, Threads, X, TikTok from one
  inbox.

## Architecture (one slide)

```
mdp-app  ──┐                       (Electron desktop)
mdp-shell ─┴─ loads plugins ──▶  mdp-module-facebook
                                 mdp-module-instagram
                                 mdp-module-threads
                                 mdp-module-tiktok
                                 mdp-module-x
                                 ...
                                 (each = Vite IIFE plugin + Go/Gin backend)

Shared:   @mdp-private/kit-ui, @mdp-private/kit-ipc (mdp-kit)
CLI:      mdp  (scaffold, sync, run, release)
AI:       ai-workspace  (rules, skills, MCP, coding configs)
Docs:     mdp-wiki  (architecture, AI flow, git rules)
```

## Repos (public)

| Repo | What | Stack |
|---|---|---|
| [mdp-cli](https://github.com/millions-dollar-project/mdp-cli) | Polyrepo orchestrator CLI (scaffold, run, release). | Go, Cobra |
| [mdp-kit](https://github.com/millions-dollar-project/mdp-kit) | Shared TS + Go libraries used by every module. | TS, Go |
| [mdp-app](https://github.com/millions-dollar-project/mdp-app) | Main desktop app — wires shell + modules + onboarding. | Electron, React, TS |
| [mdp-shell](https://github.com/millions-dollar-project/mdp-shell) | Host shell that loads plugin IIFE bundles. | Electron, React, TS |
| [mdp-wiki](https://github.com/millions-dollar-project/mdp-wiki) | Development wiki — public mirror of architecture. | VitePress, Vue |
| [ai-workspace](https://github.com/millions-dollar-project/ai-workspace) | Shared AI rules, skills, MCP configs. | Markdown, JSON |

Module repos (`mdp-module-*`) and `.github-private` are members-only.

## Getting started

```bash
# Clone all public repos to the current dir
gh repo list millions-dollar-project --limit 100 --json name -q '.[] | select(.name | test("^(mdp|ai-workspace)")) | .name' \
  | xargs -I{} gh repo clone millions-dollar-project/{}
```

Full setup guide: [mdp-wiki/guide/getting-started](https://github.com/millions-dollar-project/mdp-wiki/blob/main/docs/guide/getting-started.md).

## License

MIT. See [/LICENSE](/LICENSE).

## Maintainers

Members of `@millions-dollar-project/core`. Open an issue on `mdp-wiki` for
anything that isn't a code bug.
