import React from 'react';
import { ViewType } from '../types';

interface PrivacyViewProps {
  onNavigate: (view: ViewType) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase inline-block">
            Legal Notice
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
            Privacy Policy — this website
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Complisanc Consulting Services (SEY), trading as CompliSey
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed">
          <p className="text-base">
            This notice covers <strong>complisey.com</strong> only: public pages and the contact form. It is not the on-premise KYC product notice and it is not the Academy training-account notice.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">What we collect on this site</h2>
            <p>
              If you use the contact form, we receive the details you submit (name, organisation email, company, optional phone and sizing fields, and your message) so we can reply to a quote, demo, trial, or information request. We do not use advertising cookies on this site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Who sees it</h2>
            <p>
              Enquiries are handled by Complisanc. The form is sent through our email processor so the message reaches us. We do not sell website enquiry lists.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Other CompliSey services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>CompliSey Academy accounts &amp; portal: <button onClick={() => { onNavigate('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 underline font-medium cursor-pointer">Launching soon (view academy)</button></li>
              <li>On-premise CompliSey software: the notice supplied with your installation and licence</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <p className="text-sm">
              Questions about this website notice: use the <button onClick={() => onNavigate('contact')} className="text-blue-600 underline font-medium">contact form</button>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
