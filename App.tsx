import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';
import { Contact } from './components/Contact';
import { Moon, Sun, Github, Linkedin, ArrowUp, Twitter } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize theme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle scroll for sticky nav shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md border-b border-neutral-200 dark:border-neutral-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-serif font-bold text-blue-600 dark:text-blue-500 tracking-wider">PT</span>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Main Column */}
            <div className="lg:col-span-8">
              <MainContent />
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4">
              <Sidebar />
            </div>

          </div>
        </div>

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Parthasaradhi Terugu. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/teruguparthasaradhi" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/terugup/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/Im_Pardhu" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-sky-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      {scrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 animate-fade-in"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;