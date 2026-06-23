import selectedWork from '../../content/selected-work.json';
import { SectionHeading } from './SectionHeading';

interface WorkLink {
  label: string;
  url: string;
}

interface WorkItem {
  title: string;
  role: string;
  live?: boolean;
  status?: string;
  description: string;
  evidence?: string[];
  tech: string[];
  links: WorkLink[];
}

const items: WorkItem[] = selectedWork.items;
const isExternal = (url: string) => url.startsWith('http');

export function SelectedWork() {
  return (
    <section>
      <SectionHeading index="01" title="Selected Work" />
      <div className="space-y-8">
        {items.map((item) => (
          <article
            key={item.title}
            className="border-l-2 border-stone-200 pl-5 hover:border-teal-600 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold leading-snug text-stone-900 flex items-center gap-2">
                  {item.title}
                  {(item.live || item.status) && (
                    <span className="inline-flex items-center gap-1 whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-teal-700 bg-teal-50 rounded px-1.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {item.live ? 'live' : item.status}
                    </span>
                  )}
                </h3>
              </div>
              <div className="mt-1 font-mono text-xs text-stone-500">{item.role}</div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mt-2">{item.description}</p>

            {item.evidence && item.evidence.length > 0 && (
              <ul className="mt-3 grid gap-1.5 text-sm text-stone-600 sm:grid-cols-2">
                {item.evidence.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" className="font-mono text-teal-600">
                      +
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="font-mono text-xs text-stone-400 mt-3">{item.tech.join('  ·  ')}</div>

            {item.links.length > 0 && (
              <div className="flex flex-wrap gap-5 mt-2.5 font-mono text-xs">
                {item.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={isExternal(link.url) ? '_blank' : undefined}
                    rel={isExternal(link.url) ? 'noopener noreferrer' : undefined}
                    className="text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
