import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';
import StatsPage from './pages/StatsPage';
import RegistrationPage from './pages/RegistrationPage';
import AboutCompany from './pages/AboutCompany';
import Welcome from './pages/Welcome';
import AppsListPage from './pages/AppsListPage';
import GrocesphereApp from './pages/apps/GrocesphereApp';
import MyStoreApp from './pages/apps/MyStoreApp';
import MyPartnerApp from './pages/apps/MyPartnerApp';
import NewsModal from './components/NewsModal';


// =================================================================================
// FEATURE FLAGS
// Use this object to easily enable or disable major features during development or for testing.
// To toggle a feature, simply change its value to `true` or `false`.
// =================================================================================
const FEATURE_FLAGS = {
  // Toggles the initial splash screen. Set to `false` to go directly to the homepage.
  enableWelcomeScreen: true,
  // Toggles the privacy consent modal. Set to `false` to disable it for all users.
  enablePrivacyModal: true,
};


const App: React.FC = () => {
  // Initialize state based on the welcome screen feature flag.
  const [showWelcome, setShowWelcome] = useState(FEATURE_FLAGS.enableWelcomeScreen);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  useEffect(() => {
    // This effect respects the welcome screen feature flag.
    // It only checks for a previously viewed welcome screen if the feature is enabled.
    if (FEATURE_FLAGS.enableWelcomeScreen && sessionStorage.getItem('welcomeScreenViewed') === 'true') {
      setShowWelcome(false);
    }
  }, []);

  useEffect(() => {
    // This effect respects the privacy modal feature flag.
    // If the modal is disabled, this effect exits immediately.
    if (!FEATURE_FLAGS.enablePrivacyModal) return;

    // Show privacy modal only after the welcome screen is dismissed (or if it was never enabled)
    if (!showWelcome) {
      const privacyAccepted = localStorage.getItem('privacyAccepted');
      if (!privacyAccepted) {
        setShowPrivacyModal(true);
      }
    }
  }, [showWelcome]);

  const handleEnter = () => {
    sessionStorage.setItem('welcomeScreenViewed', 'true');
    setShowWelcome(false);
  };

  const handleAcceptPrivacy = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setShowPrivacyModal(false);
  };
  
  const handleNewsClick = () => setIsNewsModalOpen(true);
  const handleCloseNewsModal = () => setIsNewsModalOpen(false);

  // The Welcome screen is only rendered if its feature flag is enabled AND its state is true.
  if (FEATURE_FLAGS.enableWelcomeScreen && showWelcome) {
    return <Welcome onEnter={handleEnter} />;
  }

  return (
    <HashRouter>
      <div className="bg-dark-bg min-h-screen font-sans antialiased relative overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>
        <div className="relative z-10">
          <Header onNewsClick={handleNewsClick} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-company" element={<AboutCompany />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/apps" element={<AppsListPage />} />
              <Route path="/app/grocesphere" element={<GrocesphereApp />} />
              <Route path="/app/my-store" element={<MyStoreApp />} />
              <Route path="/app/my-partner" element={<MyPartnerApp />} />
            </Routes>
          </main>
          <Footer onNewsClick={handleNewsClick} />
        </div>
        {/* The Privacy Modal is only rendered if its feature flag is enabled AND its state is true. */}
        {FEATURE_FLAGS.enablePrivacyModal && showPrivacyModal && <PrivacyModal onAccept={handleAcceptPrivacy} />}
        <NewsModal isOpen={isNewsModalOpen} onClose={handleCloseNewsModal} />
      </div>
    </HashRouter>
  );
};

export default App;