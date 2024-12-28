'use client';
import { useState } from 'react';

interface Presentation {
    title: string;
    type: 'talk' | 'poster' | 'slides';
    url: string;
    relatedProject?: string;
}

const presentationsData = {
    items: [
        {
            title: "HLB Model: Disease Spread and Control Strategies",
            type: "talk",
            url: "/presentations/hlb/hlb.html",
            relatedProject: "hlb-model"
        },
        {
            title: "Quantum-inspired Biological Embeddings",
            type: "slides",
            url: "/presentations/qb_embed/qb_embed.html"
        }
    ]
};

export function Presentations() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 font-sans tracking-tight">Presentations</h2>

            <div className="space-y-4">
                {presentationsData.items.map((presentation) => (
                    <div key={presentation.title} className="flex items-baseline justify-between gap-6">
                        <div className="space-y-1">
                            <div className="font-sans font-medium text-gray-900">
                                {presentation.title}
                            </div>
                            {presentation.relatedProject && (
                                <div className="text-sm text-gray-600">
                                    Related: {presentation.relatedProject}
                                </div>
                            )}
                        </div>

                        href={presentation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredLink(presentation.title)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`inline-block font-mono text-sm p-1.5 border border-gray-100 rounded-sm transition-all duration-200
                                ${hoveredLink === presentation.title
                                ? 'bg-gray-50 text-gray-900 scale-[1.01]'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                            }`}
                        >
                        [{presentation.type}]
                    </a>
                    </div>
                ))}
        </div>
        </section >
    );
}