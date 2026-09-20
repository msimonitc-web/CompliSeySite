import React from 'react';
import { BookOpen, ExternalLink, Award, CheckCircle2, Shield, Users, ArrowRight, Sparkles } from 'lucide-react';
import { ViewType } from '../types';
import { ACADEMY_COURSES } from '../data/content';

interface AcademyViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectRequestType: (type: 'more_info' | 'quotation' | 'demo' | 'trial') => void;
}

export const AcademyView: React.FC<AcademyViewProps> = ({ onNavigate, onSelectRequestType }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Training Portal: academy.complisey.com</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Outfit']">
              CompliSey Academy: Staff AML/CFT Certification
            </h1>
            <p className="text-indigo-200 text-lg leading-relaxed">
              Reporting entities are legally mandated to train their staff in anti-money laundering and combating the financing of terrorism. CompliSey Academy provides structured 12-month prepaid course seats with unit quizzes, final exams, and verified certificates.
            </p>
            <div className="flex items-center gap-4 pt-4 flex-wrap">
              <a
                href="https://academy.complisey.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-sm shadow-lg flex items-center gap-2 transition-all"
              >
                <span>Visit academy.complisey.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => onSelectRequestType('quotation')}
                className="px-6 py-3.5 rounded-xl bg-indigo-800/80 hover:bg-indigo-700 text-white font-semibold text-sm border border-indigo-700/50 transition-all"
              >
                Request Corporate Seats Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Portal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">Individual Enrolment &amp; Corporate Packs are Live</h2>
            <p className="text-slate-600 text-sm">Access the live training portal now for immediate course registration and seat allocation.</p>
          </div>
          <a
            href="https://academy.complisey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow flex items-center gap-2 transition-all shrink-0"
          >
            <span>Open Academy Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Course Catalogue Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">Curriculum &amp; Course Catalogue</h2>
          <p className="text-slate-600 text-base">
            Designed for reporting entities in the Seychelles and international jurisdictions. Practical, exam-backed compliance training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACADEMY_COURSES.map((course, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                    {course.level}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{course.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">{course.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{course.description}</p>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Key Syllabus Modules</span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {course.topics.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">12-Month Prepaid Seat Access</span>
                <a
                  href="https://academy.complisey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold text-xs flex items-center gap-1"
                >
                  <span>Enrol at academy.complisey.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certification & Exam Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Exams, Quizzes &amp; Certificates</h3>
              <p className="text-slate-600 text-sm">Rigorous verification for regulatory audit readiness</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Unit Quizzes</h4>
              <p className="text-slate-600 text-xs leading-relaxed">Interactive checkpoint quizzes test comprehension after each learning module before unlocking subsequent chapters.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">80% Pass Threshold</h4>
              <p className="text-slate-600 text-xs leading-relaxed">Final certification exams require a score of 80% or higher to demonstrate genuine competence and compliance understanding.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">CompliSey Certificate</h4>
              <p className="text-slate-600 text-xs leading-relaxed">Successful graduates receive a verifiable CompliSey Certificate of Completion suitable for annual staff training files.</p>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-indigo-200/60">
            <span className="text-xs text-slate-600 font-medium">Platform: academy.complisey.com</span>
            <a
              href="https://academy.complisey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow transition-all"
            >
              <span>Go to academy.complisey.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
