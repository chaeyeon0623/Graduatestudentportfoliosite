import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
}
