import React, { useState } from 'react';
import { Shield, Menu, X, ExternalLink, ArrowRight } from 'lucide-react';
import { ViewType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { view: ViewType; label: string }[] = [
    { view: 'home', label: 'Home' },
    { view: 'about', label: 'About' },
    { view: 'services', label: 'Services' },
    { view: 'features', label: 'Features' },
    { view: 'academy', label: 'Academy' },
    { view: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A1128]/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform p-1 border border-slate-800">
            <img src="/images/CompliSey-Logo.svg" alt="CompliSey Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent font-['Outfit']">
              CompliSey
            </span>
            <span className="block text-xs text-emerald-400 font-medium tracking-wide">
              KYC/AML Platform &amp; Advisory
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentView === item.view
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-inner'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 hover:from-emerald-400 hover:to-teal-500 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-800/80 text-slate-200 hover:text-white focus:outline-none border border-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1128] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                currentView === item.view
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
