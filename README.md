# Claude Code Developer Guide
## Building Better Software with Claude Code

This guide explains the most important concepts, tools, and workflows for using Claude Code effectively on real-world projects such as e-commerce websites, SaaS platforms, internal tools, and APIs.

---

# Table of Contents

1. Skills
2. CLAUDE.md
3. Project Specification
4. TODO.md
5. Planning Mode
6. Self Review
7. MCP Servers
8. Context Engineering
9. Git Workflow
10. Architecture Documents
11. Testing
12. Recommended Workflow
13. DevOps Comparison

---

# 1. Skills

## What are Skills?

Skills are reusable packages of knowledge, workflows, examples, and best practices that Claude can use while generating code.

Think of them as:

- Expert consultants
- Coding playbooks
- Best-practice libraries

Example:

```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

This installs a frontend design skill.

Claude can then automatically apply:

- Responsive design
- Mobile-first layouts
- Better UI patterns
- Accessibility improvements
- Modern frontend practices

---

## Without Skills

Prompt:

```text
Create a homepage.
```

Claude generates something basic.

---

## With Skills

Prompt:

```text
Create a homepage.
```

Claude can generate:

- Responsive layouts
- Better navigation
- Accessibility support
- Professional UI structure

---

## DevOps Comparison

| DevOps | Claude Code |
|----------|----------|
| Ansible Role | Skill |
| Helm Chart | Skill |
| Terraform Module | Skill |

---

# 2. CLAUDE.md

## What is CLAUDE.md?

A special file containing project rules and coding standards.

Example:

```md
# Project Rules

Use TypeScript only.

Use PostgreSQL.

Use Prisma ORM.

Use Tailwind CSS.

Mobile-first design.

Avoid code duplication.

Keep components small.
```

---

## Why?

Claude automatically reads this file and follows its instructions.

---

## DevOps Comparison

| DevOps | Claude Code |
|----------|----------|
| ansible.cfg | CLAUDE.md |
| .gitlab-ci.yml | CLAUDE.md |
| terraform.tfvars | CLAUDE.md |

---

# 3. Project Specification

## What is it?

A document describing exactly what you're building.

File:

```text
docs/project-spec.md
```

Example:

```md
# Flower Shop

Features:

- Product catalog
- Product categories
- Product search
- Shopping cart
- User authentication
- Admin panel

Requirements:

- Mobile-first
- SEO optimized
- Responsive
```

---

## Why?

Without specifications:

```text
Build a flower shop.
```

Claude must guess.

With specifications:

```text
Read docs/project-spec.md
```

Claude understands the project clearly.

---

# 4. TODO.md

## What is it?

A task list for the project.

Example:

```md
- [ ] Project setup
- [ ] Database setup
- [ ] Authentication
- [ ] Product CRUD
- [ ] Shopping cart
- [ ] Checkout
- [ ] Admin panel
```

---

## Why?

Instead of:

```text
Build everything.
```

You can say:

```text
Work on the next unchecked task.
```

Claude stays focused.

---

## DevOps Comparison

Like:

- Jira Tickets
- ClickUp Tasks
- Azure DevOps Work Items

---

# 5. Planning Mode

## Bad Workflow

```text
Build authentication.
```

Claude immediately starts coding.

---

## Better Workflow

```text
Create an implementation plan.

Do not write code.

Wait for approval.
```

---

## Result

Claude explains:

- Files to create
- Files to modify
- Database changes
- API routes
- Risks
- Security considerations

before coding.

---

## DevOps Comparison

Like creating infrastructure design before deployment.

---

# 6. Self Review

## What is it?

After implementation:

```text
Review your own code.
```

Claude analyzes:

- Bugs
- Security issues
- Performance issues
- TypeScript issues
- Accessibility issues

---

## Why?

AI-generated code is not always perfect.

Self-review often catches mistakes.

---

## DevOps Comparison

Like:

```bash
terraform plan
```

before:

```bash
terraform apply
```

---

# 7. MCP Servers

## What is MCP?

MCP stands for:

**Model Context Protocol**

It allows Claude to interact with external systems.

---

## Without MCP

Claude can only see files.

---

## With MCP

Claude can:

- Access databases
- Access GitHub
- Open browsers
- Run automated tests

---

## Useful MCP Servers

### PostgreSQL MCP

Allows Claude to:

- Read schema
- Execute queries
- Analyze database structure

---

### GitHub MCP

Allows Claude to:

- Read issues
- Analyze repositories
- Create pull requests

---

### Playwright MCP

Allows Claude to:

- Open browser
- Click buttons
- Fill forms
- Test user journeys

---

### Filesystem MCP

Allows Claude to:

- Read files
- Analyze projects
- Modify source code

---

## DevOps Comparison

Like Jenkins plugins.

---

# 8. Context Engineering

## What is Context Engineering?

Giving Claude all relevant project information.

---

## Bad Example

```text
Create a cart.
```

---

## Better Example

```text
Read:

- CLAUDE.md
- architecture.md
- project-spec.md
- TODO.md

Then create the shopping cart.
```

---

## Why?

More context = better decisions.

---

## DevOps Comparison

Like providing:

- Inventory
- Variables
- Roles
- Playbooks

to Ansible.

---

# 9. Git Workflow

## Commit Frequently

Example:

```bash
git add .
git commit -m "Add shopping cart"
```

---

## Why?

Claude can occasionally generate incorrect code.

Git provides safe rollback points.

---

## Recovery Example

```bash
git reset --hard HEAD
```

---

## Recommended Rule

Commit after every completed feature.

---

# 10. Architecture Documents

Create:

```text
docs/architecture.md
```

Example:

```md
Frontend:
- Next.js

Backend:
- Next.js API Routes

Database:
- PostgreSQL

ORM:
- Prisma

Authentication:
- Better Auth
```

---

## Why?

Claude understands:

- Project structure
- Data flow
- Technology choices
- Architectural decisions

---

# 11. Testing

## Ask Claude to Generate Tests

Prompt:

```text
Generate tests for this feature.
```

---

## Types of Tests

### Unit Tests

Tests individual functions.

---

### Integration Tests

Tests interactions between systems.

Examples:

- API + Database
- API + Authentication

---

### End-to-End Tests

Tests complete user workflows.

Example:

```text
User opens product page

Adds item to cart

Completes checkout
```

---

# 12. Recommended Workflow

For every feature:

### Step 1

```text
Read:

- CLAUDE.md
- architecture.md
- project-spec.md
- TODO.md
```

---

### Step 2

```text
Analyze repository.
```

---

### Step 3

```text
Create implementation plan.

Wait for approval.
```

---

### Step 4

```text
Implement feature.
```

---

### Step 5

```text
Review your own implementation.
```

---

### Step 6

```text
Generate tests.
```

---

### Step 7

```bash
git add .
git commit -m "Feature completed"
```

---

# 13. Master Prompt

Use this at the start of major tasks:

```text
You are a senior staff software engineer.

Before writing code:

1. Read CLAUDE.md
2. Read project-spec.md
3. Read architecture.md
4. Analyze repository
5. Create implementation plan
6. Explain tradeoffs
7. Wait for approval

When coding:

- Follow project standards
- Use TypeScript
- Write production-grade code
- Consider security
- Consider performance
- Consider accessibility
- Consider SEO
- Avoid duplication

After coding:

- Perform self-review
- Suggest improvements
- Generate tests
- Update TODO.md
```

---

# DevOps Comparison Summary

| DevOps Concept | Claude Code Equivalent |
|---------------|------------------------|
| Ansible Role | Skill |
| Terraform Module | Skill |
| Jira Ticket | TODO.md |
| Design Document | project-spec.md |
| Architecture Diagram | architecture.md |
| CI/CD Rules | CLAUDE.md |
| Jenkins Plugin | MCP |
| terraform plan | Implementation Plan |
| Code Review | Self Review |
| VM Snapshot | Git Commit |

---

# Golden Rules

1. Never ask Claude to build everything at once.
2. Always maintain a project specification.
3. Always maintain architecture documentation.
4. Always use TODO.md.
5. Ask for plans before code.
6. Use self-review after implementation.
7. Commit to Git frequently.
8. Use MCP servers whenever possible.
9. Give Claude as much context as possible.
10. Treat Claude as a senior engineer, not a code generator.
