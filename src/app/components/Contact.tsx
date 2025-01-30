'use client';

interface ContactInfo {
    email?: string;
    department?: string;
    institution?: string;
    address?: string[];
    notice?: string;
    github?: string;
    googleScholar?: string;
}

const contactData: ContactInfo = {
    email: "nsizemo1@jh.edu",
    github: "ncsizemore",
    googleScholar: "7p4yFXAAAAAJ",
    // Commented out for future use:
    // department: "Department of ...",
    // institution: "University ...",
    // address: [
    //   "Building Name/Number",
    //   "Street Address",
    //   "City, State ZIP"
    // ]
};

export function Contact() {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-6 font-sans tracking-tight text-gray-900">Contact</h2>
            <div className="text-sm space-y-4">
                {contactData.notice ? (
                    <p className="text-gray-600 italic">
                        {contactData.notice}
                    </p>
                ) : (
                    <>
                        <div className="flex flex-wrap gap-4">
                            {contactData.email && (
                                <a
                                    href={`mailto:${contactData.email}`}
                                    className="inline-flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors rounded"
                                >
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span className="font-mono">Email</span>
                                </a>
                            )}
                            {contactData.googleScholar && (
                                <a
                                    href={`https://scholar.google.com/citations?user=${contactData.googleScholar}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors rounded"
                                >
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                                    </svg>
                                    <span className="font-mono">Google Scholar</span>
                                </a>
                            )}
                            {contactData.github && (
                                <a
                                    href={`https://github.com/${contactData.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:bg-gray-100 p-2 transition-colors rounded"
                                >
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="font-mono">GitHub</span>
                                </a>
                            )}
                        </div>

                        {(contactData.department || contactData.institution || contactData.address) && (
                            <div className="space-y-1 text-gray-600">
                                {contactData.department && (
                                    <p>{contactData.department}</p>
                                )}
                                {contactData.institution && (
                                    <p>{contactData.institution}</p>
                                )}
                                {contactData.address && (
                                    <div className="mt-2">
                                        {contactData.address.map((line, index) => (
                                            <p key={index}>{line}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}