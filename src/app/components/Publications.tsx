'use client';
import { useState } from 'react';
import publicationsData from '../../content/publications.json';

interface Publication {
    title: string;
    authors: string[];
    journal: string;
    volume?: string;
    number?: string;
    pages?: string;
    year: number;
    doi?: string;
    bibtex?: string;
}

export function Publications() {
    const [expandedBibtex, setExpandedBibtex] = useState<number | null>(null);
    const papers: Publication[] = publicationsData.papers;

    const toggleBibtex = (index: number) => {
        setExpandedBibtex(expandedBibtex === index ? null : index);
    };

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <div className="space-y-8">
                {papers.map((pub, index) => (
                    <article key={index} className="space-y-2">
                        <h3 className="text-base font-bold leading-snug">
                            {pub.title}
                        </h3>

                        <div className="text-sm text-gray-600">
                            {pub.authors.join(", ")}
                        </div>

                        <div className="text-sm">
                            <span className="italic">{pub.journal}</span>
                            {pub.volume && <span>, {pub.volume}</span>}
                            {pub.number && <span>({pub.number})</span>}
                            {pub.pages && <span>, {pub.pages}</span>}
                            {pub.year && <span>, {pub.year}</span>}
                        </div>

                        <div className="space-x-3 font-mono text-xs">
                            {pub.doi && (
                                <a
                                    href={pub.doi}
                                    className="inline-block p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    [DOI]
                                </a>
                            )}
                            {pub.bibtex && (
                                <button
                                    onClick={() => toggleBibtex(index)}
                                    className="inline-block p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm font-mono"
                                >
                                    [BibTeX]
                                </button>
                            )}
                        </div>

                        {expandedBibtex === index && pub.bibtex && (
                            <pre className="mt-3 p-3 bg-gray-50 text-xs font-mono overflow-x-auto rounded border border-gray-100 whitespace-pre-wrap">
                                {pub.bibtex}
                            </pre>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}