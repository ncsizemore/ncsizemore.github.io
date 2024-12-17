'use client';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import projectsData from '../../content/research-projects.json';

interface Project {
  title: string;
  date: string;
  slug: string;
  status: string;
  abstract: string;
  softwareLink: string;
  bibliography: string[];
  rawContent: string;
}

interface ProjectText {
  type: 'Abstract' | 'Content';
  text: string;
}

// Type the projectsData
const projects: { [key: string]: Project } = projectsData;

export function ResearchProjects() {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleProject = (slug: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  const formatCitations = (text: string): string => {
    return text.replace(/@(\w+)/g, '[$1]');
  };

  const formatFootnotes = (text: string): string => {
    return text.replace(/\[\^(\w+)\]/g, '($1)');
  };

  const extractProjectContent = (rawContent: string): ProjectText => {
    const contentWithoutFrontmatter = rawContent.replace(/^---\n[\s\S]*?\n---\n/, '');
    const abstractMatch = contentWithoutFrontmatter.match(/## Abstract\n>\s*([\s\S]*?)(?=\n##|$)/);

    if (abstractMatch && abstractMatch[1]) {
      const processed = formatFootnotes(formatCitations(abstractMatch[1].trim()));
      return {
        type: 'Abstract',
        text: processed
      };
    }

    const contentMatch = contentWithoutFrontmatter.match(/\*\*Status:\*\*.*?\n\n([\s\S]*)/);
    const content = contentMatch ? contentMatch[1].trim() : 'No content available.';
    return {
      type: 'Content',
      text: formatFootnotes(formatCitations(content))
    };
  };

  const parseSoftwareLink = (link: string) => {
    if (!link) return null;
    const matches = link.match(/\[(.*?)\]\((.*?)\)/);
    return matches ? { text: matches[1], url: matches[2] } : null;
  };

  const cleanPreviewText = (text: string): string => {
    let cleaned = text.replace(/#{1,6}\s+/g, '');
    cleaned = cleaned.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    cleaned = cleaned.replace(/(\*\*|__)(.*?)\1/g, '$2');
    cleaned = cleaned.replace(/(\*|_)(.*?)\1/g, '$2');
    cleaned = cleaned.replace(/\$[^$]+\$/g, '');
    cleaned = cleaned.replace(/^>\s*/gm, '');
    cleaned = cleaned.replace(/\s+/g, ' ').trim();
    return cleaned;
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Research</h2>
      <div className="space-y-6">
        {Object.entries(projects).map(([slug, project]) => {
          const projectContent = extractProjectContent(project.rawContent);
          const softwareLink = parseSoftwareLink(project.softwareLink);
          const previewText = cleanPreviewText(projectContent.text);

          return (
            <article key={slug} className="border border-gray-100 rounded-md">
              <button
                onClick={() => toggleProject(slug)}
                className="w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-mono text-sm mt-0.5 text-gray-500">
                  {expandedProjects[slug] ? '[−]' : '[+]'}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-bold leading-snug mb-1">
                    {project.title}
                  </h3>
                  {!expandedProjects[slug] && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {previewText.slice(0, 160)}...
                    </p>
                  )}
                </div>
              </button>

              {expandedProjects[slug] && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="mb-3 text-sm">
                    <ReactMarkdown
                      components={{
                        strong: ({ ...props }) => <span className="font-semibold" {...props} />
                      }}
                    >
                      {`**Status:** ${project.status}`}
                    </ReactMarkdown>
                  </div>

                  <div className="prose prose-sm max-w-none text-gray-600 mb-4">
                    <ReactMarkdown
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                      components={{
                        h1: ({ ...props }) => <h1 className="text-base font-bold mt-6 mb-2" {...props} />,
                        h2: ({ ...props }) => <h2 className="text-base font-bold mt-4 mb-2" {...props} />,
                        h3: ({ ...props }) => <h3 className="text-sm font-bold mt-3 mb-1" {...props} />,
                        p: ({ ...props }) => <p className="text-sm leading-relaxed my-2" {...props} />,
                        ul: ({ ...props }) => <ul className="text-sm my-2 space-y-1 list-disc pl-4" {...props} />,
                        li: ({ ...props }) => <li className="text-sm leading-relaxed" {...props} />,
                        a: ({ ...props }) => (
                          <a
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {projectContent.text}
                    </ReactMarkdown>
                  </div>

                  {softwareLink && (
                    <div className="pt-3 border-t border-gray-100">
                      <a
                        href={softwareLink.url}
                        className="inline-block font-mono text-sm p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [{softwareLink.text}]
                      </a>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}