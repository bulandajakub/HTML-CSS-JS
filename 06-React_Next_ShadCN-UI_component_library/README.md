# 🚀 React + Next.js + ShadCN UI Setup

This project uses [pnpm](https://pnpm.io/) and [ShadCN UI](https://ui.shadcn.com/) component library in a Next.js environment.

> **ℹ️ Warning**  
> If you run into Tailwind CLI binary issues with **pnpm**, it’s often simpler to redo the setup with **npm** instead — the ShadCN docs and Tailwind v4 upgrade guide currently assume npm.  
> (Use `npm create next-app`, `npm install`, etc.)

**⚙️ Requirements**

- Node.js (v18 or higher recommended)
- pnpm (via Corepack)

## 🔧 Initial Setup (Ubuntu)

If you're setting this project up from scratch on a new system:

```bash
# 1. Install Corepack (if not already available)
sudo npm install --global corepack@latest

# 2. Enable Corepack
corepack enable

# 3. Prepare and activate pnpm
corepack prepare pnpm@latest --activate
```

## 🚀 Start a new ShadCN UI project

Inside your project directory:

```bash
pnpm dlx shadcn@latest init
```

Follow the prompts to configure your project.
