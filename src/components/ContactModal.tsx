'use client';
import { useState, useEffect } from 'react';
import { X, Send, Mail, User, MessageSquare, Check } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactModalProps {
  onClose: () => void;
  showToast: (msg: string) => void;
}

export default function ContactModal({ onClose, showToast }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        'service_s9v5jdv',
        'template_a12yjub',
        emailParams,
        'pxb5XrEIIwvchazBy'
      );

      await emailjs.send(
        'service_s9v5jdv',
        'template_yn2mgd8',
        emailParams,
        'pxb5XrEIIwvchazBy'
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      showToast("Message sent successfully via EmailJS!");

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('EmailJS error:', error);
      showToast('Failed to send message via EmailJS. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-xl border border-[#E5E0D8] dark:border-[#262626] bg-[#FAF8F5] dark:bg-[#0D0D0D] p-6 sm:p-8 flex flex-col gap-6 shadow-xl"
      >
        <div className="flex items-start justify-between border-b border-[#E5E0D8] dark:border-[#262626] pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#1C1917] dark:text-[#EDEDED] flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#C2410C] dark:text-[#F97316]" />
              Get In Touch
            </h2>
            <p className="text-xs font-mono text-stone-500 mt-1">Send a direct message (typically responds within 24 hours)</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg border border-[#E5E0D8] dark:border-[#262626] hover:bg-[#F2EFE9] dark:hover:bg-[#161616]"
          >
            <X size={18} />
          </button>
        </div>

        {isSuccess && (
          <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
            <Check size={16} />
            <span>Message sent successfully! I will get back to you soon.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-mono font-medium mb-1.5 text-[#1C1917] dark:text-[#EDEDED]">
              <User className="inline w-3.5 h-3.5 mr-1" /> Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="Your full name"
              className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#F2EFE9] dark:bg-[#161616] text-sm focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-[#E5E0D8] dark:border-[#262626] focus:border-[#C2410C] dark:focus:border-[#F97316]'
              }`}
            />
            {errors.name && <p className="text-red-500 text-[11px] mt-1 font-mono">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono font-medium mb-1.5 text-[#1C1917] dark:text-[#EDEDED]">
              <Mail className="inline w-3.5 h-3.5 mr-1" /> Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="your.email@example.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#F2EFE9] dark:bg-[#161616] text-sm focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-[#E5E0D8] dark:border-[#262626] focus:border-[#C2410C] dark:focus:border-[#F97316]'
              }`}
            />
            {errors.email && <p className="text-red-500 text-[11px] mt-1 font-mono">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-mono font-medium mb-1.5 text-[#1C1917] dark:text-[#EDEDED]">
              <MessageSquare className="inline w-3.5 h-3.5 mr-1" /> Message *
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: '' });
              }}
              placeholder="Tell me about your project or opportunity..."
              className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#F2EFE9] dark:bg-[#161616] text-sm focus:outline-none resize-none ${
                errors.message ? 'border-red-500' : 'border-[#E5E0D8] dark:border-[#262626] focus:border-[#C2410C] dark:focus:border-[#F97316]'
              }`}
            />
            {errors.message && <p className="text-red-500 text-[11px] mt-1 font-mono">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`w-full py-3 rounded-lg bg-[#C2410C] text-white dark:bg-[#F97316] dark:text-[#0D0D0D] font-medium text-sm flex items-center justify-center gap-2 transition-opacity ${
              isSubmitting || isSuccess ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
            }`}
          >
            {isSubmitting ? (
              <span>Sending Email...</span>
            ) : isSuccess ? (
              <>
                <Check size={16} /> Sent!
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}