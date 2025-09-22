import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AvailabilityModal from './components/AvailabilityModal';
import Skills from './components/Skills';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <AvailabilityModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
