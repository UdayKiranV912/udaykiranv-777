import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const [storeCount, setStoreCount] = useState(770); // Default for demo
  const limit = 777;

  useEffect(() => {
    if (isOpen) {
      // Fetch the count from localStorage, consistent with RegistrationPage
      const count = parseInt(localStorage.getItem('storeRegistrationsCount') || '770', 10);
      setStoreCount(count);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const percentage = Math.min((storeCount / limit) * 100, 100);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full border-2 border-primary/50 relative overflow-hidden animate-scale-in"
        style={{ backgroundImage: "radial-gradient(circle at center, rgba(106, 13, 173, 0.1), transparent 70%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-dark-text hover:text-light-text text-3xl leading-none z-20">&times;</button>
        
        <div className="text-center">
            <span className="inline-block bg-brand-red/80 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider animate-badge-pulse">
                Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white my-4">
                FREE Registration For The First <span className="text-secondary">777</span> Stores!
            </h2>
            <p className="text-dark-text mb-6 max-w-md mx-auto">
                Join the SevenX7 network now and get your store online with zero setup fees. This exclusive offer is ending soon!
            </p>

            {/* Progress Bar */}
            <div className="my-8">
                <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>

            <Link 
                to="/register" 
                onClick={onClose}
                className="w-full block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-4 rounded-lg transition-all transform hover:scale-105 text-lg"
            >
                Secure Your FREE Spot Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;