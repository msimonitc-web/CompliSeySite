import React from 'react';
import { Shield, ExternalLink, ArrowRight, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { ViewType } from '../types';
import { ACADEMY_COURSES } from '../data/content';

interface ServicesViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectRequestType: (type: 'more_info' | 'quotation' | 'demo' | 'trial') => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate, onSelectRequestType }) => {
  const handleAction = (type: 'more_info' | 'quotation' | 'demo' | 'trial') => {
    onSelectRequestType(type);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase inline-block">
            Services &amp; Training
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
            Services and CompliSey Academy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            On-premise KYC/AML software, regulatory advisory, and structured AML/CFT staff training.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* On-premise platform */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              01
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">On-premise platform</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-base">
            We deploy and support the CompliSey KYC/AML workspace on your infrastructure: screening, risk, approvals, and an audit trail. Customer data stays under your control.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleAction('quotation')}
              className="text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:text-blue-700"
            >
              <span>Request deployment quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Advisory and awareness */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              02
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">Advisory and awareness</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-base">
            Board and management briefings on regulatory change, including virtual assets and international AML/CFT/PF standards. Briefings are not a substitute for legal advice.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleAction('more_info')}
              className="text-blue-600 font-semibold text-sm flex items-center gap-1.5 hover:text-blue-700"
            >
              <span>Enquire about advisory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CompliSey Academy */}
        <div id="academy" className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                03
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">CompliSey Academy</h2>
            </div>
            <button
              onClick={() => {
                onNavigate('academy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs flex items-center gap-1.5 shadow transition-all cursor-pointer"
            >
              <span>Explore Academy (Coming Soon)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-slate-700 leading-relaxed text-base">
            Reporting entities must train their staff in AML/CFT. CompliSey Academy is a private academy for that duty: prepaid twelve-month seats, unit quizzes, a final exam at 80% or above, and a CompliSey certificate for each course you pass. You pay for the seat (the current catalogue), not for certificates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {ACADEMY_COURSES.map((course, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                    {course.level}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{course.subtitle}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">{course.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Key Topics</span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {course.topics.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/70 p-6 rounded-xl border border-blue-200/80 text-sm text-slate-700 space-y-2">
            <p>
              Level 1 — Foundations assumes no prior AML course: money laundering, terrorist financing, and the Seychelles AML/CFT/PF map. Level 2 — Controls assumes that picture and teaches the file: customer due diligence, targeted financial sanctions, and transaction monitoring with suspicious reports. Courses are recommended in that order; they are not locked behind each other.
            </p>
            <p className="text-xs text-slate-600 pt-1 font-medium">
              Corporate packs and individual enrolment for CompliSey Academy are launching soon. Use this form if you need a licence discussion first.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-4 flex-wrap">
            <button
              onClick={() => {
                onNavigate('academy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Academy (Coming Soon)</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleAction('quotation')}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm transition-all"
            >
              Contact Us for Licence Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
