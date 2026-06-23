# Claude Code Context Management

## What is `/compact`?

Claude Code has a limited context window. As conversations become longer, more of the available context is consumed.

You may see messages such as:

```text
58% context used \u2014 click to compact
42% context remaining until auto-compact
```

The `/compact` command compresses the conversation history into a shorter summary so that more context becomes available for future work.

---

## What happens during compact?

Claude will:

* Keep important project decisions
* Keep architecture discussions
* Keep implementation plans
* Keep known issues and resolutions
* Remove less important conversational details

This allows long-running projects to continue without hitting context limits.

---

## Important Limitation

Compact is not a permanent memory system.

Some detailed discussions, code snippets, and historical reasoning may be removed during compaction.

For this reason, important project knowledge should be stored inside the repository.

---

## Recommended Project Memory Files

### CLAUDE.md

Create a file in the project root:

```bash
touch CLAUDE.md
```

Example:

```md
# Project Memory

## Architecture
- Next.js 15 App Router
- PostgreSQL
- Prisma ORM

## Upload System
- Files are stored in public/uploads
- Database stores paths as /uploads/<filename>

## Authentication
- JWT via jose
- Password hashing with bcrypt

## Deployment
- Docker Compose
- Nginx Reverse Proxy
```

Claude Code automatically uses this file as persistent project guidance.

---

### docs/

For larger projects, create documentation files:

```text
docs/
\u251c\u2500\u2500 architecture.md
\u251c\u2500\u2500 deployment.md
\u251c\u2500\u2500 database.md
\u251c\u2500\u2500 decisions.md
\u251c\u2500\u2500 troubleshooting.md
\u2514\u2500\u2500 roadmap.md
```

Recommended contents:

* Architecture diagrams
* Database design
* Deployment procedures
* Technical decisions
* Known bugs
* Future plans

---

## Before Running `/compact`

Ask Claude to generate a project summary:

```text
Summarize this project into CLAUDE.md
```

or

```text
Create a project memory file
```

Review and save the generated content.

---

## Best Practice

Do not rely on chat history as the only source of project knowledge.

Store important information in:

* README.md
* CLAUDE.md
* docs/*
* Architecture documents
* Deployment guides

This ensures that Claude Code can quickly recover project context even after compaction, session restarts, or new conversations.
