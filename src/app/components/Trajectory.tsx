'use client';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

interface Stage {
  period: string;
  role: string;
  where: string;
  detail: string;
  proof?: { label: string; url: string };
}

const stages: Stage[] = [
  {
    period: '2025 —',
    role: 'Research Software Engineer',
    where: 'Johns Hopkins · Epidemiology',
    detail:
      'Design and operate the platforms and infrastructure behind HIV-policy modeling — from containerized, reproducible models to the public tools at jheem.org.',
    proof: { label: 'jheem.org', url: 'https://jheem.org' },
  },
  {
    period: '2021 – 2024',
    role: 'Applied-ML Postdoc',
    where: 'University of Chicago · Medicine',
    detail:
      'Built novel generative-AI methods for biomedicine, including a digital twin of the infant microbiome that predicts neurodevelopmental risk.',
    proof: { label: 'Science Advances (2024)', url: 'https://doi.org/10.1126/sciadv.adj0400' },
  },
  {
    period: '2015 – 2021',
    role: 'Mathematics PhD',
    where: 'University of Florida',
    detail:
      'Group theory and computational algebra, plus a spatially-explicit stochastic simulation of citrus-disease spread across Florida.',
    proof: { label: 'Group partitions (2018)', url: 'https://doi.org/10.32037/agta-2018-004' },
  },
];

export function Trajectory() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <SectionHeading index="02" title="Trajectory" />

      <div className="rounded-xl border border-stone-200 bg-white grid-paper p-6 sm:p-8">
        <p className="font-mono text-xs sm:text-sm text-stone-500 mb-8">
          mathematics<span className="text-teal-600 px-1">→</span>machine learning
          <span className="text-teal-600 px-1">→</span>epidemiology
          <span className="text-teal-600 px-1">→</span>production systems
        </p>

        <ol className="relative border-l border-stone-200 ml-1">
          {stages.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.period} className="relative pl-6 pb-7 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-colors ${
                    isOpen ? 'bg-teal-600 border-teal-600' : 'bg-white border-stone-300'
                  }`}
                />
                <button onClick={() => setOpen(isOpen ? null : i)} className="text-left w-full group">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <span className="font-semibold text-stone-900 group-hover:text-teal-800 transition-colors">
                      {s.role}
                    </span>
                    <span className="font-mono text-xs text-stone-500">{s.period}</span>
                  </div>
                  <div className="text-sm text-stone-500">{s.where}</div>
                </button>

                {isOpen && (
                  <div className="mt-2 text-sm text-stone-600 leading-relaxed max-w-2xl">
                    <p>{s.detail}</p>
                    {s.proof && (
                      <a
                        href={s.proof.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 font-mono text-xs text-teal-700 hover:text-teal-900"
                      >
                        → {s.proof.label}
                      </a>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
