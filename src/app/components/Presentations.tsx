'use client';

import { useState } from 'react';
import type { Presentation } from '@/types';

// Add map of slugs to friendly titles
const projectTitles: Record<string, string> = {
    "hlb-model": "Stochastic Model of HLB Disease Spread",
    "microbiome": "Quantified Microbiome Analysis"
};

const presentationsData: { items: Presentation[] } = {
    items: [
        {
            title: "A Multiscale Stochastic Model of Statewide HLB Spread in Florida",
            type: "slides",
            url: "/presentations/hlb-spread-model/index.html",
            relatedProject: "hlb-model"
        },
        {
            title: "Qbiome: Reverse-engineering the Infant Microbiome To Predict Severe Neurodevelopmental Deficits",
            type: "slides",
            url: "/presentations/microbiome-embedding/index.html",
            relatedProject: "microbiome"
        }
    ]
};

export function Presentations() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const presentations: Presentation[] = presentationsData.items;

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 font-sans tracking-tight text-gray-900">Presentations</h2>

            <div className="space-y-4">
                {presentations.map((presentation) => (
                    <div key={presentation.title} className="flex items-baseline justify-between gap-6">
                        <div className="space-y-1">
                            <div className="font-sans font-medium text-gray-900">
                                {presentation.title}
                            </div>
                            {presentation.relatedProject && (
                                <div className="text-sm text-gray-600">
                                    Related: {projectTitles[presentation.relatedProject]}
                                </div>
                            )}
                        </div>

                        <a
                            href={presentation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-mono text-sm p-1.5 border border-gray-100 rounded-sm transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                        >
                            [slides]
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}