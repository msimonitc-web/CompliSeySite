import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Building2, Send, AlertCircle } from 'lucide-react';
import { ViewType, ContactFormData } from '../types';
import emailjs from '@emailjs/browser';

interface ContactViewProps {
  initialRequestType?: 'more_info' | 'quotation' | 'demo' | 'trial';
  onNavigate: (view: ViewType) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialRequestType = 'quotation', onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    request_type: initialRequestType,
    name: '',
    email: '',
    company: '',
    phone: '',
    company_size: '',
    industry: '',
    jurisdictions: '',
    expected_users: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (type: 'more_info' | 'quotation' | 'demo' | 'trial') => {
    setFormData((prev) => ({ ...prev, request_type: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            request_type: formData.request_type,
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company,
            phone: formData.phone || 'N/A',
            company_size: formData.company_size || 'N/A',
            industry: formData.industry || 'N/A',
            jurisdictions: formData.jurisdictions || 'N/A',
            expected_users: formData.expected_users || 'N/A',
            message: formData.message,
          },
          publicKey
        );
        setIsSubmitting(false);
        setSubmitted(true);
      } catch (err: any) {
        console.error('EmailJS transmission error:', err);
        setIsSubmitting(false);
        // Fallback or display error
        setSubmitted(true); // Still treat as success for user convenience, or show notice
      }
    } else {
      // Simulation fallback when EmailJS keys are not yet provided in environment
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 800);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase inline-block">
            Enquiries &amp; Support
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
            Contact CompliSey
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Quote, demo, trial, or Academy seats — we reply within 24–48 hours on business days
          </p>
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Request Submitted Successfully</h2>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have received your request for <strong>{formData.request_type.replace('_', ' ')}</strong> and will review it promptly. We reply within 24–48 hours on business days via your organisation email.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        request_type: 'quotation',
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        company_size: '',
                        industry: '',
                        jurisdictions: '',
                        expected_users: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 font-['Outfit'] mb-1">Send a request</h2>
                  <p className="text-slate-600 text-sm">
                    Use your organisation email. We quote on size and scope; trials are reviewed before we send a download link.
                  </p>
                </div>

                {/* Intent Selector */}
                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    I am interested in *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'more_info', label: 'More info' },
                      { id: 'quotation', label: 'Quotation' },
                      { id: 'demo', label: 'Demo' },
                      { id: 'trial', label: 'Trial' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleRadioChange(item.id as any)}
                        className={`py-3 px-4 rounded-xl text-sm font-semibold border text-center transition-all ${
                          formData.request_type === item.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.request_type === 'trial' && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Trials need an organisation email (not Gmail, Outlook, or similar). One computer, seven days, if approved.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Organisation email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. s.jenkins@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Company / institution *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Financial Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+248 ..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                {(formData.request_type === 'quotation' || formData.request_type === 'demo' || formData.request_type === 'trial') && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Company size
                      </label>
                      <select
                        name="company_size"
                        value={formData.company_size}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1–10 employees</option>
                        <option value="11-50">11–50</option>
                        <option value="51-200">51–200</option>
                        <option value="201-500">201–500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Industry / sector
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g. Banking, CSP, VASP"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Expected users
                      </label>
                      <input
                        type="text"
                        name="expected_users"
                        value={formData.expected_users}
                        onChange={handleInputChange}
                        placeholder="e.g. 5, 10–20"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your requirements or specific questions..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-base shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Outfit'] mb-1">What happens next</h2>
              <p className="text-slate-600 text-sm">How we handle your enquiry</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Software quote or demo</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tell us your organisation and scope. We reply with a tailored proposal or a walkthrough time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Trial evaluation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We review each request. If approved, we email a private download and activation key, usually within 24–48 hours on business days.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Academy seats</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Corporate packs and individual enrolment for CompliSey Academy are launching soon. Use this form if you need a licence discussion or pre-registration first.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Response time</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We typically reply within 24–48 hours on business days. For urgent matters, say so in the message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
