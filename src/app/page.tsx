'use client';

import { ResearchProjects } from './components/ResearchProjects';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Teaching } from './components/Teaching';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-8 py-16">
        <div className="bg-[#fdfbf7] rounded-2xl shadow-sm border border-gray-100/50 p-10">
          <Header />
          <main className="mt-10 space-y-10">
            <ResearchProjects />
            <Teaching />
            <Publications />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}