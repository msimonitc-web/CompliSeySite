import React from 'react';
import { Shield, Award, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { ViewType } from '../types';
import { FOUNDERS, LEGAL_INFO } from '../data/content';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectRequestType: (type: 'more_info' | 'quotation' | 'demo' | 'trial') => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onSelectRequestType }) => {
  const handleAction = (type: 'more_info' | 'quotation' | 'demo' | 'trial') => {
    onSelectRequestType(type);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header / Hero */}
      <section className="bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase inline-block">
            About CompliSey
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
            About us
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Complisanc Consulting Services (SEY) — trading as <strong>CompliSey</strong> for our compliance technology products and services.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Software Mission */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            Software mission (CompliSey platform)
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            Our mission for the <strong>CompliSey software</strong> is to give compliance and front-office teams one transparent workspace for KYC and AML: screening, risk assessment, approvals, and investigations—with an <strong>audit trail</strong> that connects policy to everyday execution. We integrate and support the platform in your environment.
          </p>
        </div>

        {/* About Us & Systems Integrator */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            About us
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            <strong>Complisanc Consulting Services (SEY)</strong> is a <strong>systems integrator</strong> for KYC/AML compliance technology—not a software publisher. We trade as <strong>CompliSey</strong> for our compliance technology products and services. We deploy and support the <strong>CompliSey platform</strong>, run awareness briefings, and deliver training alongside implementation.
          </p>
          <p className="text-slate-700 leading-relaxed text-base">
            Our work sits between regulatory requirements and day-to-day operations: software that fits your environment, and people who can explain both the rule and the workflow.
          </p>
          <p className="text-sm text-slate-500 italic pt-2 border-t border-slate-100">
            Summaries on this page describe who we are and how we work. For advice tailored to your organisation, please <button onClick={() => onNavigate('contact')} className="text-blue-600 underline font-medium">contact us</button>.
          </p>
        </div>

        {/* Meet the Founders */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
              Meet the Founders
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Decades of combined international expertise in technical infrastructure and financial regulation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {FOUNDERS.map((founder, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">{founder.name}</h3>
                    <p className="text-blue-700 font-medium text-sm mt-0.5">{founder.role}</p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 inline-block w-fit">
                    {founder.tagline}
                  </span>
                </div>

                <p className="text-slate-700 leading-relaxed text-base">
                  {founder.bio}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Expertise &amp; Background</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((spec, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            What We Do
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Advanced Software</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                As a systems integrator, we deploy, configure, and support the <strong>CompliSey</strong> compliance <strong>platform</strong> for your organisation. We deliver implementation, training, and operational support—from sanctions and PEP screening with operational refresh to automated risk-scoring—so controls work in your environment.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Compliance Awareness</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Regulatory change moves quickly. We brief boards and senior management on developments that matter to fintech, virtual assets, and international AML standards.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Comprehensive Training</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Training covers AML/CFT theory and practice. Eric brings policy depth; Malcolm brings implementation experience. Sessions are built around how your team actually works.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Entity */}
        <div className="bg-gradient-to-br from-slate-900 to-[#0A1128] text-white p-8 sm:p-10 rounded-2xl shadow-md space-y-6 border border-slate-800">
          <div>
            <h2 className="text-2xl font-bold font-['Outfit'] mb-2">Legal entity</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>{LEGAL_INFO.legalName}</strong> is registered in the Republic of Seychelles, trades as <strong>{LEGAL_INFO.tradeName}</strong> for its compliance technology products and services, and operates as a <strong>systems integrator</strong> for compliance technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs text-slate-400 block">Trading name</span>
              <span className="font-semibold text-white">{LEGAL_INFO.tradeName}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs text-slate-400 block">Business Registration Number (BRN)</span>
              <span className="font-semibold text-white">{LEGAL_INFO.brn}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs text-slate-400 block">Trade Licence</span>
              <span className="font-semibold text-white">{LEGAL_INFO.tradeLicence}</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-xs text-slate-400 block">Activity</span>
              <span className="font-semibold text-white">Systems integration &amp; compliance technology, Awareness and Training</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <span className="text-xs text-slate-400">Web: www.complisey.com</span>
            <button
              onClick={() => handleAction('quotation')}
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-all flex items-center gap-2"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
