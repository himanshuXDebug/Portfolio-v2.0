'use client';
import { Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#FAF8F5] dark:bg-[#0D0D0D] shadow-2xl flex items-center justify-between gap-3 animate-slide-up">
      <div className="flex items-center gap-2.5 text-xs font-mono">
        <Info size={16} className="text-[#C2410C] dark:text-[#F97316] shrink-0" />
        <span className="text-[#1C1917] dark:text-[#EDEDED]">{message}</span>
      </div>
      <button onClick={onClose} className="p-1 rounded hover:bg-[#F2EFE9] dark:hover:bg-[#161616]">
        <X size={14} />
      </button>
    </div>
  );
}