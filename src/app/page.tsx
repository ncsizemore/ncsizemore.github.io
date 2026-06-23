import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Trajectory } from './components/Trajectory';
import { Skills } from './components/Skills';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-24">
        <Hero />
        <main className="mt-20 space-y-20">
          <SelectedWork />
          <Trajectory />
          <Skills />
          <Publications />
          <Contact />
        </main>
        <footer className="mt-24 pt-8 border-t border-stone-100 font-mono text-xs text-stone-400">
          © 2026 Nicholas Sizemore
        </footer>
      </div>
    </div>
  );
}
