/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { FeaturesView } from './components/FeaturesView';
import { AcademyView } from './components/AcademyView';
import { ContactView } from './components/ContactView';
import { PrivacyView } from './components/PrivacyView';
import { TermsView } from './components/TermsView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [requestType, setRequestType] = useState<'more_info' | 'quotation' | 'demo' | 'trial'>('quotation');

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
  };

  const handleSelectRequestType = (type: 'more_info' | 'quotation' | 'demo' | 'trial') => {
    setRequestType(type);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Outfit',sans-serif] flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectRequestType={handleSelectRequestType}
          />
        )}
        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onSelectRequestType={handleSelectRequestType}
          />
        )}
        {currentView === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onSelectRequestType={handleSelectRequestType}
          />
        )}
        {currentView === 'features' && (
          <FeaturesView
            onNavigate={handleNavigate}
            onSelectRequestType={handleSelectRequestType}
          />
        )}
        {currentView === 'academy' && (
          <AcademyView
            onNavigate={handleNavigate}
            onSelectRequestType={handleSelectRequestType}
          />
        )}
        {currentView === 'contact' && (
          <ContactView
            initialRequestType={requestType}
            onNavigate={handleNavigate}
          />
        )}
        {currentView === 'privacy' && (
          <PrivacyView onNavigate={handleNavigate} />
        )}
        {currentView === 'terms' && (
          <TermsView onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
