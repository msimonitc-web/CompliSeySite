import React from 'react';
import { Shield, ExternalLink, Mail, MapPin } from 'lucide-react';
import { ViewType } from '../types';
import { LEGAL_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (view: ViewType) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1F] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Legal Entity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center shadow-md p-1 border border-slate-800">
                <img src="/images/CompliSey-Logo.svg" alt="CompliSey Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
                {LEGAL_INFO.tradeName}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              On-premise KYC/AML software — deployed and supported by {LEGAL_INFO.legalName}.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
              <p><strong>BRN:</strong> {LEGAL_INFO.brn}</p>
              <p><strong>Trade Licence:</strong> {LEGAL_INFO.tradeLicence}</p>
              <p><strong>Jurisdiction:</strong> {LEGAL_INFO.jurisdiction}</p>
            </div>
          </div>

          {/* Col 2: Product & Features */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product & Platform
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Platform Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Services &amp; Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('academy')}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>CompliSey Academy</span>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">Soon</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Request a Trial
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  About Us &amp; Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Contact &amp; Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('privacy')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('terms')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Website Terms
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Republic of Seychelles</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Enquiries via contact form</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-900/50 hover:bg-blue-800/60 text-white font-medium text-xs border border-blue-800 transition-all text-center"
                >
                  Open Contact Form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-950 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; 2026 {LEGAL_INFO.legalName}. CompliSey is a trade name. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-slate-400">
              Privacy
            </button>
            <button onClick={() => handleLinkClick('terms')} className="hover:text-slate-400">
              Terms
            </button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-slate-400">
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
