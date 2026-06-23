# Nicholas Sizemore — Personal Site

Work-led portfolio for a computational scientist and research software engineer.
The site emphasizes scientific software, reproducible modeling infrastructure,
current modeling work, and selected publications.

## Local Development

Run the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── types.ts           # TypeScript type definitions
└── app/
    ├── components/    # React components
    │   ├── Hero.tsx
    │   ├── SelectedWork.tsx
    │   ├── Trajectory.tsx
    │   ├── Skills.tsx
    │   ├── Publications.tsx
    │   └── Contact.tsx
    ├── content/       # Structured site content
    │   ├── selected-work.json
    │   ├── publications.json
    ├── page.tsx       # Main page component
    └── layout.tsx     # Root layout
```

## Content management

- `src/content/selected-work.json`: flagship systems and active research
- `src/content/publications.json`: publication record
- `public/presentations/`: archived HTML presentations and assets

## Development notes

- Built with Next.js 15 and TypeScript
- Styled using Tailwind CSS
- Static export for GitHub Pages
- HTML presentations retained as static assets

## Deployment

The site is deployed to GitHub Pages using GitHub Actions.

## Original Template

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). For more information about Next.js features, see their [documentation](https://nextjs.org/docs).
