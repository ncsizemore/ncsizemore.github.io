'use client';
import { useState } from 'react';

interface HeaderLink {
    text: string;
    href: string;
    external?: boolean;
}

const headerLinks: HeaderLink[] = [
    {
        text: 'Email',
        href: 'mailto:ncsizemore@outlook.com'
    },
    {
        text: 'GitHub',
        href: 'https://github.com/ncsizemore',
        external: true
    },
    {
        text: 'Google Scholar',
        href: 'https://scholar.google.com/citations?user=7p4yFXAAAAAJ&hl=en&oi=sra',
        external: true
    }
];

export function Header() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
                Nicholas Sizemore
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Computational scientist specializing in mathematical modeling of complex biological systems.
            </p>

            <div className="space-x-3">
                {headerLinks.map(({ text, href, external }) => (
                    <a
                        key={text}
                        href={href}
                        onMouseEnter={() => setHoveredLink(text)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`inline-block font-mono text-sm p-1.5 border border-gray-100 rounded-sm transition-all duration-200
                            ${hoveredLink === text
                                ? 'bg-gray-50 text-gray-900 scale-[1.01]'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                            }`}
                        {...(external ? {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {})}
                    >
                        [{text}]
                    </a>
                ))}
            </div>
        </header>
    );
}