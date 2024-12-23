# Nicholas Sizemore - Academic Website

Personal academic website built with Next.js, focusing on research projects in computational biology and network science.

## Local Development

Run the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── components/         # React components
│   ├── Header.tsx     # Site header with navigation
│   ├── Publications.tsx
│   ├── ResearchProjects.tsx
│   └── Teaching.tsx
├── content/           # JSON data files
│   ├── publications.json
│   └── research-projects.json
├── page.tsx           # Main page component
└── layout.tsx         # Root layout

public/               # Static assets
```

## Content Management

Research projects and publications are managed through JSON files in the `content` directory:
- `research-projects.json`: Individual research project details
- `publications.json`: Academic publications data

## Development Notes

- Built with Next.js 14 and TypeScript
- Styled using Tailwind CSS
- Mathematics rendered using KaTeX
- Markdown content processed with ReactMarkdown
- Development logging available for content debugging

## Deployment

The site is deployed to GitHub Pages using GitHub Actions. The deployment workflow automatically builds and deploys changes pushed to the main branch.

## Original Template

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). For more information about Next.js features, see their [documentation](https://nextjs.org/docs).