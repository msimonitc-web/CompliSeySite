import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, Search, BarChart3, FileText, Lock, ExternalLink, ChevronDown, Award, Users } from 'lucide-react';
import { ViewType } from '../types';
import { FAQ_LIST } from '../data/content';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectRequestType: (type: 'more_info' | 'quotation' | 'demo' | 'trial') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectRequestType }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleAction = (type: 'more_info' | 'quotation' | 'demo' | 'trial', view?: ViewType) => {
    onSelectRequestType(type);
    if (view) {
      onNavigate(view);
    } else {
      onNavigate('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-20 lg:py-28 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase">
                KYC/AML Platform
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                Compliance Awareness
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                Comprehensive Training
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight font-['Outfit']">
              Compliance software on your infrastructure
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Sanctions screening, risk scoring, and reporting in one workspace. You keep the data; we help you deploy and run it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleAction('quotation')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:from-emerald-400 hover:to-teal-500 transition-all flex items-center justify-center gap-3"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('features')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Features</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300 font-medium">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>OFAC · UN · EU · UK Lists</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>On-Premise Deployment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Audit-Ready Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Three Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-['Outfit']">
            Advanced Software, Compliance Awareness &amp; Comprehensive Training
          </h2>
          <p className="text-slate-600 text-base">
            Our three-pillar approach — bridging regulatory theory and practical application for regulated firms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">Advanced Software</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sanctions and PEP screening, risk scoring, and audit-ready reporting. We deploy and support the CompliSey platform on your infrastructure — you set the policies; the software supports your AML/CFT programme.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('features')}
                className="text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:text-blue-700"
              >
                <span>Platform Features</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">Compliance Awareness</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Briefings for boards and management on regulatory change, including fintech, virtual assets, and international AML/CFT/PF standards.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('services')}
                className="text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:text-blue-700"
              >
                <span>Advisory &amp; Intelligence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">Comprehensive Training</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                AML/CFT training that pairs policy with day-to-day practice, delivered by our compliance and technical team through CompliSey Academy.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  onNavigate('academy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-indigo-600 font-semibold text-sm flex items-center gap-1.5 hover:text-indigo-700 cursor-pointer"
              >
                <span>Explore Academy (Coming Soon)</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-700 px-1.5 py-0.5 rounded font-bold">Soon</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-['Outfit']">
              What you get
            </h2>
            <p className="text-slate-600 text-base">
              Screening, workflows, and reporting in one unified workspace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Automated Sanctions Screening</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Screen customers against OFAC, UN, EU, and UK sanctions lists automatically with operational refresh and on-demand checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Risk Assessment &amp; Scoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dynamic risk scoring based on jurisdiction, entity type, PEP status, and transaction patterns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Document Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Secure document upload, verification, and storage with entity-specific checklists and AES-256 encryption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Workflow Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Streamlined approval workflows with four-eye approval for high-risk cases and automated escalation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Compliance Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive reports with dataset version tracking. Export to PDF, CSV, and Excel formats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Role-based access control, audit logging, and data encryption. Security controls designed in line with ISO 27001 principles.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('features')}
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              <span>See all platform features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-['Outfit']">
            Common questions
          </h2>
          <p className="text-slate-600 text-base">
            Short answers below. For anything else, use the contact form.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A1128] via-[#0F1D36] to-[#0A1128] rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.15),transparent_60%)]"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit']">
              Ready to get started?
            </h2>
            <p className="text-slate-300 text-base">
              Request a quote or book a demo through our secure contact form.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleAction('quotation')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all"
              >
                Request a Quote
              </button>
              <button
                onClick={() => handleAction('demo')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
