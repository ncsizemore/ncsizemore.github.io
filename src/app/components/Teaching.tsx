'use client';

import { useState } from 'react';

export function Teaching() {
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
    <section>
      <h2 className="text-2xl font-bold mb-6 font-sans tracking-tight text-gray-900">Teaching</h2>

      <div className="space-y-8">
        <p className="text-sm text-gray-600 leading-relaxed">
          While I am not currently teaching any courses, I have several years of experience
          as an instructor through appointments at the following institutions.
        </p>

        {institutions.map((institution) => (
          <div key={institution.name} className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="font-sans font-medium text-gray-900">{institution.role}</span>
              <a
                href={institution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-sm p-1.5 border border-gray-100 rounded-sm transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              >
                [{institution.name}]
              </a>
            </div>
            <p className="text-sm text-gray-600">{institution.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
              {institution.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}