'use client';

interface HeaderLink {
    text: string;
    href: string;
    external?: boolean;
}

const headerLinks: HeaderLink[] = [
    {
        text: 'Email',
        href: 'mailto:nicholas.sizemore@example.com'
    },
    {
        text: 'GitHub',
        href: 'https://github.com/ncsizemore',
        external: true
    },
    {
        text: 'CV - PDF',
        href: '/resume.pdf',
        external: true
    }
];

export function Header() {
    return (
        <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
                Nicholas Sizemore
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                Computational biologist working at the intersection of network science and
                biological systems.
            </p>

            <div className="space-x-3">
                {headerLinks.map(({ text, href, external }) => (
                    <a
                        key={text}
                        href={href}
                        className="inline-block font-mono text-sm p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm"
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