'use client';

import { useState } from 'react';

export function Teaching() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const institutions = [
    {
      name: "University of Florida",
      url: "https://www.ufl.edu/",
      role: "Graduate Student Instructor",
      description: "As a graduate student at UF, I taught classes as the primary instructor (responsible for all course content), and as a teaching assistant.",
      courses: [
        "MAC 1140: Precalculus Algebra",
        "MAC 1147: Precalculus Algebra & Trigonometry",
        "MAC 2311: Calculus I",
        "MAC 2312: Calculus II",
        "MAC 2313: Calculus III"
      ]
    },
    {
      name: "Western Carolina University",
      url: "https://www.wcu.edu/",
      role: "Lecturer",
      description: "At WCU, I worked as a Lecturer, teaching the following courses (multiple sections, ~30 students per section):",
      courses: [
        "MATH 130: College Algebra",
        "MATH 146: Precalculus",
        "MATH 153: Calculus I"
      ]
    }
  ];

  return (
    <section className="border-t border-gray-200/75">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Teaching</h2>

      <div className="space-y-8">
        <p className="text-sm text-gray-600 leading-relaxed">
          While I am not currently teaching any courses, I have several years of experience
          as an instructor through appointments at the following institutions.
        </p>

        <div className="space-y-10">
          {institutions.map((institution, index) => (
            <article key={index} className="space-y-3">
              <h3 className="text-base font-bold leading-snug">
                <a
                  href={institution.url}
                  onMouseEnter={() => setHoveredLink(institution.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`font-mono text-sm px-1.5 py-0.5 rounded-sm inline-block transition-all duration-200
                    ${hoveredLink === institution.name
                      ? 'bg-gray-100 text-gray-900 scale-[1.01]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-800'
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{institution.name}]
                </a>
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed pl-5">
                {institution.description}
              </p>

              <ul className="text-sm space-y-1.5 list-disc marker:text-gray-300 pl-10">
                {institution.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="text-sm leading-relaxed text-gray-500">
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}