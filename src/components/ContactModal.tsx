import { useState, useEffect, FormEvent } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSource?: string;
}

export default function ContactModal({ isOpen, onClose, initialSource = 'General Inquiry' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialSource,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({ ...prev, service: initialSource }));
      setIsSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialSource]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium submission sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0F2E]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 border border-royal-blue/10 flex flex-col max-h-[90vh]"
        style={{ animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        {/* Top Glow bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-bright-blue via-royal-blue to-purple-mid" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-deep-navy transition-colors p-1.5 rounded-full hover:bg-gray-100 z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <span className="font-display text-[10px] font-bold text-bright-blue tracking-[3px] uppercase block mb-1">GTM & Distribution Advisory</span>
                <h3 className="text-2xl font-bold font-display text-deep-navy tracking-tight">
                  Start Your Middle East Expansion
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Submit this brief inquiry and our Dubai-based advisory team will get back to you within 1 business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="font-display block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-bright-blue" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 text-deep-navy bg-gray-50/50"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="font-display block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-bright-blue" /> Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 text-deep-navy bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone field */}
                  <div>
                    <label className="font-display block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-bright-blue" /> Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 text-deep-navy bg-gray-50/50"
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label className="font-display block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-bright-blue" /> Brand / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Foods Ltd"
                      className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 text-deep-navy bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Service Select field */}
                <div>
                  <label className="font-display block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 text-deep-navy bg-gray-50/50"
                  >
                    <option value="GTM Advisory">GTM Advisory Consultation</option>
                    <option value="Market Management">Market Management & Distribution</option>
                    <option value="Ingredients & Solutions">Ingredients & Solutions (BLNDZ)</option>
                    <option value="MENA Market Report">MENA Market Report Inquiry</option>
                    <option value="General Inquiry">General B2B Inquiry</option>
                  </select>
                </div>

                {/* Message field */}
                <div>
                  <label className="font-display block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-bright-blue" /> Tell us about your brand / objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We are a food manufacturing brand seeking to expand our retail and HORECA footprint in Dubai, Saudi Arabia..."
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:border-bright-blue focus:outline-none focus:ring-1 focus:ring-bright-blue/30 text-deep-navy bg-gray-50/50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-bright-blue hover:bg-royal-blue text-white py-3 px-6 rounded-xl font-display font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-bright-blue/25 disabled:opacity-70 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Advisory Request</span>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 px-4 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display text-deep-navy tracking-tight mb-2">
                Advisory Request Received
              </h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8">
                Thank you, <strong className="text-deep-navy">{formData.name}</strong>. A FoodCloud principal in Dubai will review <strong className="text-deep-navy">{formData.company}</strong>'s inquiry about <strong className="text-deep-navy">{formData.service}</strong> and contact you shortly.
              </p>
              
              <div className="w-full bg-soft-white rounded-2xl p-4 text-left text-xs text-navy-mid space-y-2 mb-6 border border-royal-blue/5">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-400">Representative:</span>
                  <span className="font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-400">Inquiry Area:</span>
                  <span className="font-semibold">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Region Target:</span>
                  <span className="font-semibold">GCC / MENA</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="bg-deep-navy hover:bg-navy-mid text-white px-6 py-2.5 rounded-full font-display font-medium text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
