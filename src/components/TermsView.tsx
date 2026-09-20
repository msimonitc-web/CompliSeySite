import React from 'react';
import { ViewType } from '../types';

interface TermsViewProps {
  onNavigate: (view: ViewType) => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase inline-block">
            Legal Terms
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
            Website terms
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Using complisey.com
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed">
          <p className="text-base">
            These terms cover the public marketing site at <strong>complisey.com</strong>. They do not sell the on-premise KYC product or Academy seats.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Information on this site</h2>
            <p>
              Pages describe CompliSey software, advisory, and training in general terms. They are not legal advice. Requests for a quote, demo, or trial are made through the <button onClick={() => onNavigate('contact')} className="text-blue-600 underline font-medium">contact form</button>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Separate contracts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>CompliSey Academy prepaid seats: <a href="https://academy.complisey.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">academy.complisey.com</a></li>
              <li>On-premise software: the licence and EULA supplied with the installer</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Contact</h2>
            <p>
              Complisanc Consulting Services (SEY), trading as CompliSey. Website: <a href="https://complisey.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">complisey.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
