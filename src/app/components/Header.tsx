'use client';

export function Header() {
    return (
        <header className="mb-10">
            <h1 className="text-4xl font-bold mb-8 font-sans tracking-tight">
                Nicholas Sizemore
            </h1>

            <div className="relative border-l-2 border-gray-200 pl-4">
                <div className="space-y-4">
                    {/* Current Position */}
                    <div className="text-lg relative">
                        <div className="absolute -left-[1.25rem] top-2 w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                        <div className="flex justify-between items-baseline">
                            <span className="font-sans text-xl font-bold tracking-tight text-gray-900">Sr. Research Programmer Analyst</span>
                            <span className="font-sans text-lg font-medium text-gray-900 ml-6">2025–</span>
                        </div>
                        <div className="font-serif text-gray-800">Department of Epidemiology</div>
                        <div className="font-serif text-gray-800">Johns Hopkins University</div>
                    </div>

                    {/* Past Positions */}
                    <div className="relative">
                        <div className="absolute -left-[1.25rem] top-2 w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="flex justify-between items-baseline">
                            <span className="font-sans text-base font-semibold tracking-tight text-gray-700">Postdoctoral Scholar</span>
                            <span className="font-sans text-base text-gray-600 ml-6">2021–2024</span>
                        </div>
                        <div className="font-serif text-gray-600">Department of Medicine</div>
                        <div className="font-serif text-gray-600">University of Chicago</div>
                    </div>

                    {/* Overlapping positions */}
                    <div className="space-y-3">
                        <div className="relative">
                            <div className="absolute -left-[1.25rem] top-2 w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-base font-semibold tracking-tight text-gray-700">Data Analyst</span>
                                <span className="font-sans text-base text-gray-600 ml-6">2018–2021</span>
                            </div>
                            <div className="font-serif text-gray-600">Department of Emergency Medicine</div>
                            <div className="font-serif text-gray-600">University of Florida</div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-[1.25rem] top-2 w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-base font-semibold tracking-tight text-gray-700">Ph.D. in Mathematics</span>
                                <span className="font-sans text-base text-gray-600 ml-6">2015–2021</span>
                            </div>
                            <div className="font-serif text-gray-600">University of Florida</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}