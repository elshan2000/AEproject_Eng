# MCP (Model Context Protocol) Explained for Claude Code (VS Code)

This document explains what MCP is, how it works in Claude Code, and how you can check if you're using it in VS Code.

---

# 1. What is MCP?

MCP (Model Context Protocol) allows Claude to connect to external tools and systems.

## Without MCP

Claude can only access your project files:

```
Claude
 \u2514\u2500\u2500 Reads code files only
```

It cannot access real systems like databases or GitHub.

---

## With MCP

Claude can connect to external tools:

```
Claude
 \u251c\u2500\u2500 Filesystem
 \u251c\u2500\u2500 PostgreSQL
 \u251c\u2500\u2500 GitHub
 \u251c\u2500\u2500 Browser (Playwright)
 \u251c\u2500\u2500 Docker
 \u2514\u2500\u2500 Kubernetes
```

This turns Claude into a **real engineering assistant**, not just a code generator.

---

# 2. Why MCP is important

Without MCP:
- Claude guesses database data
- Cannot test your app
- Cannot interact with GitHub
- Cannot validate real system behavior

With MCP:
- Claude can query real databases
- Test your application in a browser
- Read and manage GitHub repositories
- Debug infrastructure issues

---

# 3. Real examples

## PostgreSQL MCP

Without MCP:
Claude sees only schema:

```prisma
model Product {
  id Int
  name String
}
```

It cannot see data.

---

With MCP:

Claude can run:

```sql
SELECT COUNT(*) FROM products;
```

and return real results from your database.

---

## GitHub MCP

Without MCP:
Claude only sees local files.

With MCP:

Claude can:
- Read issues
- Create pull requests
- Analyze repository history

Example:

```
Show open issues in my repo
```

---

## Playwright MCP

Without MCP:
Claude cannot test UI.

With MCP:

Claude can:
- Open browser
- Fill forms
- Click buttons
- Test checkout flow

Example:

```
Test login page and report errors
```

---

# 4. How MCP works in VS Code (Claude Code)

Claude Code in VS Code runs as a client.

MCP servers are external tools connected to it.

Flow:

```
VS Code (Claude Code)
        \u2193
   MCP Client
        \u2193
Postgres / GitHub / Browser / Docker
```

---

# 5. How to check if MCP is installed

## Method 1: Terminal command

Run:

```bash
claude mcp list
```

If MCP is active, you will see something like:

```
filesystem
postgres
github
playwright
```

If nothing shows:

```
No MCP servers configured
```

---

## Method 2: Ask Claude directly

In VS Code chat:

```
What MCP tools do you have access to?
```

Claude will list available tools.

---

## Method 3: Diagnostic command

```bash
claude doctor
```

This may show MCP configuration details.

---

# 6. Default setup (most users)

If you just installed Claude Code:

You usually only have:

```
filesystem MCP
```

Meaning Claude can:
- Read files
- Edit files
- Create files

But NOT:
- Database access
- GitHub access
- Browser testing

---

# 7. Common MCP servers

## 1. Filesystem MCP (default)
- Reads project files
- Writes code
- Edits structure

---

## 2. PostgreSQL MCP
- Runs SQL queries
- Reads schema
- Debugs migrations
- Analyzes performance

---

## 3. GitHub MCP
- Reads repositories
- Creates PRs
- Reviews code
- Reads issues

---

## 4. Playwright MCP
- Opens browser
- Tests UI flows
- Simulates users
- Captures screenshots

---

## 5. Docker MCP
- Understands containers
- Helps debug services
- Works with local environments

---

## 6. Kubernetes MCP
- Inspects pods
- Reads logs
- Debugs cluster issues
- Analyzes deployments

---

# 8. How MCP is configured (example)

MCP servers are usually defined in a config file:

```json
{
  "mcpServers": {
    "postgres": {
      "command": "postgres-mcp",
      "env": {
        "DATABASE_URL": "postgresql://user:pass@localhost:5432/db"
      }
    },
    "github": {
      "command": "github-mcp",
      "env": {
        "GITHUB_TOKEN": "your_token"
      }
    }
  }
}
```

---

# 9. When you should use MCP

Use MCP when you need:

- Real database data
- Real API responses
- Real GitHub workflows
- UI testing
- Infrastructure debugging

---

# 10. When MCP is NOT needed

You do NOT need MCP for:

- Writing React components
- Writing functions
- Refactoring code
- Explaining concepts
- Generating boilerplate

---

# 11. Best setup for a shopping website

For a Next.js + PostgreSQL e-commerce project:

Recommended MCPs:

- Filesystem MCP (required)
- PostgreSQL MCP (very important)
- Playwright MCP (testing)
- GitHub MCP (collaboration)

Optional:
- Docker MCP
- Kubernetes MCP (for production DevOps)

---

# 12. Key idea

MCP turns Claude from:

> "a code generator"

into:

> "a real engineering assistant that works with your system"

---

# 13. Quick check

Run:

```bash
claude mcp list
```

If you see only filesystem \u2192 MCP is not fully set up.

If you see multiple tools \u2192 you're already using MCP.
