import { SectionHeading } from './SectionHeading';

interface ContactInfo {
    email?: string;
    department?: string;
    institution?: string;
    address?: string[];
    notice?: string;
}

const contactData: ContactInfo = {
    email: "nsizemo1@jh.edu",
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
            <SectionHeading index="05" title="Contact" />
            <div className="text-sm space-y-4">
                {contactData.notice ? (
                    <p className="text-stone-600 italic">
                        {contactData.notice}
                    </p>
                ) : (
                    <>
                        <p className="max-w-2xl text-stone-600 leading-relaxed">
                            I&apos;m interested in conversations about scientific software,
                            computational modeling, and reproducible research infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {contactData.email && (
                                <a
                                    href={`mailto:${contactData.email}`}
                                    className="inline-flex items-center gap-2 hover:bg-stone-100 p-2 transition-colors rounded"
                                >
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span className="font-mono">Email</span>
                                </a>
                            )}
                        </div>

                        {(contactData.department || contactData.institution || contactData.address) && (
                            <div className="space-y-1 text-stone-600">
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
