'use client';

import { useState } from 'react';

export function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <header className={`${isExpanded ? 'mb-10' : 'mb-4'}`}>
            <h1 className="text-4xl font-bold mb-8 font-sans tracking-tight text-gray-900">
                Nicholas Sizemore
            </h1>

            <div className={`pl-4 border-l-2 transition-all duration-500 ease-in-out ${isExpanded ? 'border-gray-200' : 'border-transparent'} ${isExpanded ? 'space-y-4' : 'space-y-2'}`}>
                {/* Current Position (always visible) */}
                <div className="relative text-lg">
                    {isExpanded && <div className="absolute -left-[1.25rem] top-2 w-2.5 h-2.5 rounded-full bg-gray-400"></div>}
                    <div className="flex justify-between items-baseline">
                        <span className="font-sans text-xl font-bold tracking-tight text-gray-900">Sr. Research Programmer Analyst</span>
                        {isExpanded && <span className="font-sans text-lg font-medium text-gray-500 ml-6">2025–</span>}
                    </div>
                    <div className="font-serif text-gray-600">Department of Epidemiology</div>
                    <div className="font-serif text-gray-600">Johns Hopkins University</div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex items-center gap-2"
                    aria-label={isExpanded ? "Show less" : "Show more"}
                >
                    <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                    {!isExpanded && <span className="text-sm">Previous positions</span>}
                </button>

                {/* Past Positions */}
                <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
                    <div className="space-y-4">
                        {/* Postdoc */}
                        <div className="relative">
                            <div className="absolute -left-[1.25rem] top-2 w-2.5 h-2.5 rounded-full bg-gray-400 timeline-dot"></div>
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-base font-semibold tracking-tight text-gray-700">Postdoctoral Scholar</span>
                                <span className="font-sans text-base text-gray-500 ml-6">2021–2024</span>
                            </div>
                            <div className="font-serif text-gray-600">Department of Medicine</div>
                            <div className="font-serif text-gray-600">University of Chicago</div>
                        </div>

                        {/* Data Analyst */}
                        <div className="relative">
                            <div className="absolute -left-[1.25rem] top-2 w-2.5 h-2.5 rounded-full bg-gray-400 timeline-dot"></div>
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-base font-semibold tracking-tight text-gray-700">Data Analyst</span>
                                <span className="font-sans text-base text-gray-500 ml-6">2018–2021</span>
                            </div>
                            <div className="font-serif text-gray-600">Department of Emergency Medicine</div>
                            <div className="font-serif text-gray-600">University of Florida</div>
                        </div>

                        {/* PhD */}
                        <div className="relative">
                            <div className="absolute -left-[1.25rem] top-2 w-2.5 h-2.5 rounded-full bg-gray-400 timeline-dot"></div>
                            <div className="flex justify-between items-baseline">
                                <span className="font-sans text-base font-semibold tracking-tight text-gray-700">Ph.D. in Mathematics</span>
                                <span className="font-sans text-base text-gray-500 ml-6">2015–2021</span>
                            </div>
                            <div className="font-serif text-gray-600">University of Florida</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}