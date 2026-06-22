'use client';
import { SectionHeading } from './SectionHeading';

const skillGroups = [
  { label: 'Languages', items: ['R', 'Python', 'TypeScript / JavaScript', 'Shell'] },
  { label: 'Web', items: ['Next.js', 'React', 'Astro', 'Tailwind'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (S3, ECR)', 'Docker', 'GitHub Actions', 'Serverless Framework', 'Linux / RHEL administration'],
  },
  {
    label: 'Reproducible computing',
    items: ['renv', 'Containerization', 'Versioned data releases', 'CI/CD pipelines'],
  },
  {
    label: 'Modeling & science',
    items: ['Compartmental / ODE epidemic models', 'Stochastic spatial simulation', 'Bayesian methods', 'Applied & generative ML'],
  },
];

export function Skills() {
  return (
    <section>
      <SectionHeading index="03" title="Skills" />
      <dl className="space-y-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-5">
            <dt className="font-mono text-xs uppercase tracking-wider text-stone-500 sm:w-44 sm:shrink-0 mb-1 sm:mb-0 sm:pt-0.5">
              {group.label}
            </dt>
            <dd className="text-sm text-stone-700 leading-relaxed">{group.items.join('  ·  ')}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
