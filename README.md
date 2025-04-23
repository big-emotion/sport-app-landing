# Sport App Landing

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Development Guidelines

### Code Quality

This project uses ESLint and TypeScript for code quality and type safety. For detailed information about our linting and TypeScript configuration, please refer to the [Linting Documentation](docs/LINTING.md).

Key features:
- Strict TypeScript checking
- ESLint with Next.js recommended rules
- Prettier for consistent formatting
- VS Code integration
- Pre-push linting checks

To check your code:
```bash
# Run linting
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Git Hooks

This project uses Husky to enforce code quality before pushing:
- Pre-push hook runs linting
- Push is blocked if linting fails
- Automatic fixes can be applied with `npm run lint -- --fix`

### VS Code Setup

For the best development experience:
1. Install recommended extensions (ESLint, Prettier)
2. Use VS Code's integrated terminal
3. Enable format on save (already configured in workspace settings)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
