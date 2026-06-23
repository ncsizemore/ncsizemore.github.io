const links = [
  { label: 'jheem.org', url: 'https://jheem.org', external: true },
  { label: 'GitHub', url: 'https://github.com/ncsizemore', external: true },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=7p4yFXAAAAAJ', external: true },
  { label: 'Email', url: 'mailto:nsizemo1@jh.edu', external: false },
];

export function Hero() {
  return (
    <header className="animate-rise rounded-xl border border-stone-200 bg-white grid-paper p-6 sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-700">Nicholas Sizemore</p>
        <div className="hidden sm:block text-right font-mono text-[11px] leading-relaxed text-stone-500 shrink-0">
          <div>Sr. Research Programmer Analyst</div>
          <div>Research software engineering · JHU Epidemiology</div>
        </div>
      </div>

      <h1 className="mt-7 font-display text-[2.1rem] sm:text-[3.25rem] font-semibold tracking-tight text-stone-900 leading-[1.04] max-w-3xl">
        I turn scientific models into reproducible systems and public tools.
      </h1>

      <p className="mt-6 text-lg text-stone-500 leading-relaxed max-w-2xl">
        Computational scientist and research software engineer working across modeling code,
        containers, cloud pipelines, and interactive software.
      </p>

      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        {links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            className="text-teal-700 hover:text-teal-900"
          >
            {l.label}
            {l.external ? ' ↗' : ''}
          </a>
        ))}
      </nav>
    </header>
  );
}
