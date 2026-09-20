import React, { useState } from 'react';
import { Search, Shield, Users, FileText, CheckCircle2, ShieldAlert, BarChart3, FolderKanban, RefreshCw, Clock, Activity, BookOpen, Lock, ScrollText, Network, Database, ArrowRight } from 'lucide-react';
import { ViewType, FeatureItem } from '../types';
import { FEATURES_LIST } from '../data/content';

interface FeaturesViewProps {
  onNavigate: (view: ViewType) => void;
  onSelectRequestType: (type: 'more_info' | 'quotation' | 'demo' | 'trial') => void;
}

export const FeaturesView: React.FC<FeaturesViewProps> = ({ onNavigate, onSelectRequestType }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'advanced' | 'security'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAction = (type: 'more_info' | 'quotation' | 'demo' | 'trial') => {
    onSelectRequestType(type);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredFeatures = FEATURES_LIST.filter((feature) => {
    const matchesCategory = activeCategory === 'all' || feature.category === activeCategory;
    const matchesSearch =
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-blue-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-amber-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-purple-600" />;
      case 'FolderKanban': return <FolderKanban className="w-6 h-6 text-sky-600" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-blue-700" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-700" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-700" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-indigo-700" />;
      case 'Lock': return <Lock className="w-6 h-6 text-rose-600" />;
      case 'ScrollText': return <ScrollText className="w-6 h-6 text-slate-700" />;
      case 'Network': return <Network className="w-6 h-6 text-blue-500" />;
      case 'Database': return <Database className="w-6 h-6 text-indigo-500" />;
      default: return <Shield className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0A1128] via-[#101E38] to-[#0A1128] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 tracking-wide uppercase inline-block">
            Platform Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] tracking-tight">
            KYC/AML platform features
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tools to support onboarding, screening, monitoring, and reporting—your policies and regulators define the obligations; the software assists.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Features ({FEATURES_LIST.length})
            </button>
            <button
              onClick={() => setActiveCategory('core')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === 'core'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Core Onboarding
            </button>
            <button
              onClick={() => setActiveCategory('advanced')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === 'advanced'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Advanced Compliance
            </button>
            <button
              onClick={() => setActiveCategory('security')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === 'security'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Security &amp; Audit
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFeatures.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-base">No features found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feat) => (
              <div
                key={feat.id}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {getIconComponent(feat.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-2">
                      {feat.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-['Outfit']">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">CompliSey Platform</span>
                  <button
                    onClick={() => handleAction('quotation')}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Advanced Capabilities / Versioning */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 shadow-lg">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit']">Advanced Capabilities &amp; Auditability</h2>
            <p className="text-slate-300 text-sm">Enterprise-grade compliance controls designed for regulatory scrutiny.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">Compliance versioning</h3>
              <p className="text-slate-300 text-leading">Screening reports include dataset version metadata so you can see exactly which sanctions list versions were used.</p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">Cross-verification of lists</h3>
              <p className="text-slate-300 text-leading">Verify local sanctions list counts against official sources and document verification status for audits.</p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">FATF Black &amp; Grey List tracking</h3>
              <p className="text-slate-300 text-leading">View and update FATF high-risk and monitored jurisdictions from the FATF source with jurisdiction risk warnings.</p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base">GDPR-aligned handling</h3>
              <p className="text-slate-300 text-leading">Approved documents are viewable and printable only; download is restricted to minimise copies of personal data.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
