'use client';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenContact: () => void;
}

export default function Header({ darkMode, setDarkMode, onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform-gpu ${
      scrolled 
        ? 'py-3.5 bg-[#FAF8F5]/95 dark:bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#E5E0D8] dark:border-[#262626] shadow-sm' 
        : 'py-5 bg-[#FAF8F5]/0 dark:bg-[#0D0D0D]/0 border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#1C1917] text-[#FAF8F5] dark:bg-[#EDEDED] dark:text-[#0D0D0D] flex items-center justify-center font-mono font-bold text-base transition-transform group-hover:scale-105">
            H
          </div>
          <span className="font-mono font-semibold tracking-tight text-base sm:text-lg">
            Himanshu
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium hover:text-[#C2410C] dark:hover:text-[#F97316] transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={onOpenContact}
            className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#C2410C] text-white dark:bg-[#F97316] dark:text-[#0D0D0D] hover:opacity-90 transition-opacity"
          >
            Contact
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] hover:border-[#C2410C] dark:hover:border-[#F97316] transition-colors"
          >
            {darkMode ? <Sun size={18} className="text-[#F97316]" /> : <Moon size={18} className="text-[#C2410C]" />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616]"
          >
            {darkMode ? <Sun size={18} className="text-[#F97316]" /> : <Moon size={18} className="text-[#C2410C]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="p-2 rounded-lg border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E0D8] dark:border-[#262626] bg-[#FAF8F5] dark:bg-[#0D0D0D] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-2 font-medium text-base border-b border-[#E5E0D8]/50 dark:border-[#262626]/50"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="w-full py-3 mt-2 rounded-lg bg-[#C2410C] text-white dark:bg-[#F97316] dark:text-[#0D0D0D] font-medium text-center"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}