'use client';
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
  description: string;
  tech: string[];
  links: WorkLink[];
}

const items: WorkItem[] = selectedWork.items;
const isExternal = (url: string) => url.startsWith('http');

export function SelectedWork() {
  return (
    <section>
      <SectionHeading index="01" title="What I Build & Run" />
      <div className="space-y-8">
        {items.map((item) => (
          <article
            key={item.title}
            className="border-l-2 border-stone-200 pl-5 hover:border-teal-600 transition-colors"
          >
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-base font-semibold leading-snug text-stone-900 flex items-center gap-2">
                {item.title}
                {item.live && (
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-teal-700 bg-teal-50 rounded px-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    live
                  </span>
                )}
              </h3>
              <span className="font-mono text-xs text-stone-500">{item.role}</span>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mt-2">{item.description}</p>

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
