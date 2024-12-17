'use client';

interface ContactInfo {
    email?: string;
    department?: string;
    institution?: string;
    address?: string[];
    notice?: string;
}

const contactData: ContactInfo = {
    notice: "Updated contact information coming soon.",
    // Commented out for future use:
    // email: "nicholas.sizemore@example.com",
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
            <h2 className="text-xl font-bold mb-6">Contact</h2>
            <div className="text-sm space-y-4">
                {contactData.notice ? (
                    <p className="text-gray-600 italic">
                        {contactData.notice}
                    </p>
                ) : (
                    <>
                        {contactData.email && (
                            <div>
                                <a
                                    href={`mailto:${contactData.email}`}
                                    className="font-mono text-sm hover:bg-gray-100 p-1 transition-colors"
                                >
                                    [{contactData.email}]
                                </a>
                            </div>
                        )}

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