import React, { useState } from 'react';
import SevenX7Logo from '../components/SevenX7Logo';

interface WelcomeProps {
  onEnter: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnterClick = () => {
    setIsExiting(true);
    // Wait for the animation to finish before calling onEnter
    setTimeout(onEnter, 600); 
  };

  return (
    <div className={`fixed inset-0 bg-dark-bg flex flex-col items-center justify-center z-50 animate-fade-in overflow-hidden ${isExiting ? 'animate-scale-out-fade' : ''}`}>
      <style>{`
        @keyframes subtle-stardust-pan {
          from {
            background-position: 0% 0%;
          }
          to {
            background-position: -25% 15%;
          }
        }
        .animate-subtle-stardust-pan {
          animation: subtle-stardust-pan 180s linear infinite alternate;
        }
      `}</style>
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0 animate-subtle-stardust-pan"></div>
      <div className="relative z-10 text-center">
        <SevenX7Logo size="large" isWelcome={true} onXClick={handleEnterClick} />
      </div>
    </div>
  );
};

export default Welcome;