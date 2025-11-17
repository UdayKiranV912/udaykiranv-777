import React from 'react';
import SevenX7Logo from './SevenX7Logo';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.028 3.746 3.846-1.011.451.273zm9.084-7.197c-.18-.315-.367-.504-.56-.534-.193-.03-1.088-.534-1.258-.604-.17-.07-.291-.104-.412.104-.121.208-.474.588-.584.708-.11.121-.22.137-.41.07-.19-.07-1.157-.424-2.203-1.356-.819-.71-1.371-1.586-1.537-1.859-.164-.273-.01-."/></svg>
);

const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5c1.6 0 2.5 1.2 2.5 2.5 0 1.3-1 2.5-2.5 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1-2 4-2c3 0 5 3 5 8v7h-5v-8c0-1-1-2-2-2z"></path></svg>
);
const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
);

interface FooterProps {
  onNewsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNewsClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-bg/50 border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <SevenX7Logo onNewsClick={onNewsClick} />
            <p className="mt-4 text-dark-text text-sm max-w-xs mx-auto md:mx-0">Local Commerce, Reimagined.</p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold text-light-text">Contact Us</h3>
            <div className="flex items-center space-x-4 mt-4">
              <a href="mailto:support@sevenx7.com" className="text-dark-text hover:text-secondary transition-colors" aria-label="Email">
                <MailIcon />
              </a>
              <a href="https://wa.me/910123456789?text=Hello%2C%2I%20need%20support%20regarding%20the%20SevenX7%20platform." target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-secondary transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          
          {/* Column 3: Social Media */}
          <div className="flex flex-col items-center md:items-end">
             <h3 className="text-lg font-semibold text-light-text">Follow Us</h3>
             <div className="flex items-center space-x-4 mt-4">
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-secondary transition-colors" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-secondary transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark-text hover:text-secondary transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 border-t border-primary/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-dark-text text-sm gap-4">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} SevenX7. All rights reserved.</p>
          <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-dark-text hover:text-secondary transition-colors"
              aria-label="Back to top"
            >
              <UpArrowIcon />
              <span>Back to Top</span>
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;