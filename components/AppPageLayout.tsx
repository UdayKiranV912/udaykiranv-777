

import React from 'react';
import { Link } from 'react-router-dom';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AppPageLayoutProps {
  appName: React.ReactNode;
  tagline: string;
  appIcon: string;
  features: Feature[];
  ctaLink: string;
  ctaText: string;
  status: 'Live' | 'Coming Soon';
  children?: React.ReactNode; // Allow custom sections to be passed in
}

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-primary/20 backdrop-blur-sm transition-transform hover:-translate-y-1 h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-light-text mb-2">{title}</h3>
        <p className="text-dark-text">{description}</p>
    </div>
);

const AppPageLayout: React.FC<AppPageLayoutProps> = ({ appName, tagline, appIcon, features, ctaLink, ctaText, status, children }) => {
    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
                    <div className="flex justify-center items-center mb-6 space-x-4">
                        <div className="text-5xl">{appIcon}</div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
                           {appName}
                        </h1>
                    </div>
                    <p className="mt-6 text-lg text-dark-text">{tagline}</p>
                     <span className={`inline-block mt-4 text-sm font-semibold px-4 py-1.5 rounded-full ${status === 'Live' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                        {status}
                    </span>
                </div>

                {/* Features Section */}
                <div className="max-w-5xl mx-auto mb-20">
                     <h2 className="text-3xl font-bold text-center mb-12 text-white animate-fade-in-up">Key Features</h2>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                           <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
                             <FeatureCard {...feature} />
                           </div>
                        ))}
                    </div>
                </div>

                {/* Custom Content Section */}
                {children}

                {/* CTA Section */}
                <div className="text-center animate-fade-in mt-20">
                    <Link to={ctaLink} className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-transform transform hover:scale-105 text-lg inline-block">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppPageLayout;