import React from 'react';

interface SevenX7LogoProps {
  size?: 'small' | 'large';
  isWelcome?: boolean;
  onXClick?: () => void;
  onNewsClick?: () => void;
}

const NewsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16v18M9 12h6"/>
    <path d="M9 16h6"/>
    <path d="M9 8h6"/>
  </svg>
);


const SevenX7Logo: React.FC<SevenX7LogoProps> = ({ size = 'small', isWelcome = false, onXClick, onNewsClick }) => {
  const sizeClasses = size === 'large' ? 'text-6xl md:text-8xl lg:text-9xl' : 'text-xl sm:text-2xl md:text-3xl';
  
  const xContainerClasses = `relative inline-block glitch-glow mx-1 transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.7)] ${isWelcome ? 'animate-glow-pulse' : ''} ${onXClick ? 'cursor-pointer' : ''}`;

  return (
    <div className="flex items-center space-x-3">
      <div className={`font-black tracking-wider text-white select-none flex items-center ${sizeClasses}`} style={{fontFamily: "'system-ui', sans-serif"}}>
        <style>{`
          .glitch-glow {
            text-shadow: 0 0 5px rgba(0, 240, 255, 0.4), 0 0 10px rgba(106, 13, 173, 0.4);
          }
          @keyframes sevenx7-cyber-glitch {
            0%, 100% { transform: translate(0, 0) skew(0); clip-path: inset(45% 0 45% 0); }
            10% { transform: translate(-1.5px, 1.5px) skew(3deg); clip-path: inset(80% 0 10% 0); }
            30% { transform: translate(1.5px, -1.5px) skew(-3deg); clip-path: inset(30% 0 50% 0); }
            50% { transform: translate(0, 0) skew(0); clip-path: inset(90% 0 5% 0); }
            70% { transform: translate(-2px, 1px) skew(2deg); clip-path: inset(15% 0 75% 0); }
            90% { transform: translate(2px, -1px) skew(-2deg); clip-path: inset(60% 0 20% 0); }
          }
          .animate-cyber-glitch {
            animation: sevenx7-cyber-glitch 4s linear infinite;
          }
          @keyframes glow-pulse {
            0%, 100% {
              transform: scale(1);
              filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.7));
            }
            50% {
              transform: scale(1.05);
              filter: drop-shadow(0 0 35px rgba(0, 240, 255, 1));
            }
          }
          .animate-glow-pulse {
            animation: glow-pulse 2.5s ease-in-out infinite;
          }
        `}</style>
        <span>SEVEN</span>
        <div className={xContainerClasses} onClick={onXClick}>
          <span
            className="absolute inset-0 text-brand-cyan animate-cyber-glitch"
            aria-hidden="true"
          >
            X
          </span>
          <span
            className="absolute inset-0 text-brand-red animate-cyber-glitch"
            aria-hidden="true"
            style={{ animationDirection: 'reverse' }}
          >
            X
          </span>
          <span className="relative opacity-90">
            X
          </span>
        </div>
        <span>7</span>
      </div>
      {!isWelcome && onNewsClick && (
         <button 
            onClick={onNewsClick} 
            className="relative text-dark-text hover:text-secondary transition-colors" 
            aria-label="View latest news"
          >
            <NewsIcon />
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
            </span>
         </button>
      )}
    </div>
  );
};

export default SevenX7Logo;