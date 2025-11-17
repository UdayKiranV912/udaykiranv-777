

import React from 'react';
import AppPageLayout from '../../components/AppPageLayout';

const HowItWorksGraphic = () => {
  return (
    <div className="max-w-3xl mx-auto my-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Your Order, Your Way</h2>
      <div className="relative p-8 bg-slate-800/30 rounded-xl border border-primary/20 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-around items-center text-light-text text-center gap-4">
            <div className="w-full sm:w-auto">
                <span className="text-5xl">🏪</span>
                <p className="font-semibold mt-2">1. Order from Store</p>
            </div>
            <div className="text-secondary text-4xl font-black transform rotate-90 sm:rotate-0">&rarr;</div>
            <div className="flex flex-row sm:flex-col items-center gap-4">
                <div className="w-full sm:w-auto">
                    <span className="text-5xl">🛵</span>
                    <p className="font-semibold mt-2">Fast Delivery</p>
                </div>
                <div className="text-dark-text font-bold text-xl my-2 sm:my-4">OR</div>
                <div className="w-full sm:w-auto">
                    <span className="text-5xl">🛍️</span>
                    <p className="font-semibold mt-2">Easy Pickup</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};


const GrocesphereApp: React.FC = () => {
    const features = [
        {
            icon: '🛒',
            title: 'Effortless Browsing',
            description: 'Explore a vast selection of products from all your favorite neighborhood stores in one place.'
        },
        {
            icon: '📍',
            title: 'Real-Time Updates',
            description: 'Watch your delivery in real-time, or get instant notifications when your order is ready for in-store pickup.'
        },
        {
            icon: '💳',
            title: 'Secure Payments',
            description: 'Pay with confidence using our secure and seamless in-app payment system.'
        },
    ];

    return (
        <AppPageLayout 
            appName={<>Groce<span className="text-secondary">sphere</span></>}
            tagline="Your local market, delivered. The ultimate convenience for customers."
            appIcon='🛍️'
            features={features}
            status="Coming Soon"
            ctaLink="/"
            ctaText="Return to Home"
        >
          <HowItWorksGraphic />
        </AppPageLayout>
    );
};

export default GrocesphereApp;