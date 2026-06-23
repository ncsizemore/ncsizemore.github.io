import { SectionHeading } from './SectionHeading';

const skillGroups = [
  {
    label: 'Modeling',
    items: ['Compartmental / ODE models', 'Stochastic simulation', 'Sensitivity analysis', 'Applied & generative ML'],
  },
  {
    label: 'Scientific computing',
    items: ['Reproducible environments', 'Versioned data', 'Provenance', 'Numerical verification'],
  },
  {
    label: 'Systems',
    items: ['Data pipelines', 'APIs', 'Interactive applications', 'Config-driven architecture'],
  },
  {
    label: 'Infrastructure',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Linux / RHEL', 'Self-hosted runners'],
  },
  { label: 'Languages', items: ['R', 'Python', 'TypeScript / JavaScript', 'Shell'] },
];

export function Skills() {
  return (
    <section>
      <SectionHeading index="03" title="Capabilities" />
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
