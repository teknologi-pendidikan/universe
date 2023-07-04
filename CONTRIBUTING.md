# Contributing to the project

## Package Installation

If you're **comfortable with monorepos, we recommend pnpm**. It's faster and offers some useful CLI options like `--filter`.

## Installing packages

When you first clone or create your monorepo, you'll need to:

1. Make sure you're in the root directory of your monorepo
2. Run the install command:

```bash
pnpm install
```


You'll now see `node_modules` folders appear in the root of your repository, and in each workspace.

## Adding/removing/upgrading packages

You can add, remove and upgrade packages from within your monorepo using your package manager's built-in commands:

**Install a package in a workspace**
```bash
pnpm add <package> --filter <workspace>
```

Example:
```bash
pnpm add react --filter web
```

**Remove a package from a workspace**
```bash
pnpm uninstall <package> --filter <workspace>
```

Example:
```bash
pnpm uninstall react --filter web
```

**Upgrade a package in a workspace**
```bash
pnpm update <package> --filter <workspace>
```

Example:
```bash
pnpm update react --filter web
```
