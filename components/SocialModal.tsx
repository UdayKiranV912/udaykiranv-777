
import React from 'react';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TwitterIcon = () => <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5c1.6 0 2.5 1.2 2.5 2.5 0 1.3-1 2.5-2.5 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1-2 4-2c3 0 5 3 5 8v7h-5v-8c0-1-1-2-2-2z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>;

const SocialModal: React.FC<SocialModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg shadow-xl p-8 max-w-sm w-full border border-primary/50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-dark-text hover:text-light-text text-2xl leading-none">&times;</button>
        <h2 className="text-2xl font-bold text-light-text mb-6 text-center">Join Our Community</h2>
        <p className="text-dark-text mb-8 text-center">
            Follow us on our social channels to stay updated with the latest news and announcements.
        </p>
        <div className="flex justify-center space-x-8">
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
  );
};

export default SocialModal;
