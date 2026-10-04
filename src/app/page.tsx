'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen">
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenContact={() => setContactOpen(true)} 
      />

      <main>
        <Hero 
          onOpenContact={() => setContactOpen(true)} 
          showToast={showToast} 
        />
        <About />
        <Experience />
        <Skills />
        <Projects showToast={showToast} />
        <Education />
      </main>

      <Footer />

      {contactOpen && (
        <ContactModal 
          onClose={() => setContactOpen(false)} 
          showToast={showToast} 
        />
      )}

      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </div>
  );
}