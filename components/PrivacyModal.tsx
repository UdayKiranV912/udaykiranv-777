
import React from 'react';

interface PrivacyModalProps {
  onAccept: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-slate-800 rounded-lg shadow-xl p-6 max-w-md w-full border border-primary/50">
        <h2 className="text-2xl font-bold text-light-text mb-4">Privacy & Terms</h2>
        <p className="text-dark-text mb-6">
          We use cookies and other tracking technologies to improve your browsing experience on our website, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.
        </p>
        <button
          onClick={onAccept}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Accept and Continue
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;
