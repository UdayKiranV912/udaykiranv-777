import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SevenX7Logo from './SevenX7Logo';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/apps' && location.pathname.startsWith('/app/'));
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
        isActive ? 'text-secondary' : 'text-light-text hover:text-secondary'
      }`}
    >
      {children}
    </Link>
  );
};

interface HeaderProps {
  onNewsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewsClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <SevenX7Logo onNewsClick={onNewsClick} />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apps">Our Apps</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/about">How It Works</NavLink>
              <NavLink to="/stats">Dashboard</NavLink>
              <NavLink to="/about-company">About Company</NavLink>
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            <div className="flex flex-col items-center space-y-1 w-full pt-4 mt-4 border-t border-primary/20">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apps">Our Apps</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/about">How It Works</NavLink>
              <NavLink to="/stats">Dashboard</NavLink>
              <NavLink to="/about-company">About Company</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;