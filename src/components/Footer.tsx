import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E5E0D8] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-sm font-semibold">
            Himanshu
          </p>
          <p className="text-xs text-stone-500">Built with Next.js, React, JavaScript & Tailwind CSS.</p>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-stone-500">
          <span>© {new Date().getFullYear()} Himanshu</span>
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-[#E5E0D8] dark:border-[#262626] bg-[#F2EFE9] dark:bg-[#161616] hover:border-[#C2410C] transition-colors"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}