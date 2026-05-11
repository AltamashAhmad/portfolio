import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AvailabilityModal from './components/AvailabilityModal';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';

const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main>
          <Home />
          <Suspense fallback={<div className="flex items-center justify-center py-20 text-primary dark:text-gray-300">Loading section...</div>}>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <AvailabilityModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
