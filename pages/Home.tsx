
import React from 'react';
import { Link } from 'react-router-dom';
import EcosystemShowcase from '../components/EcosystemShowcase';

const Hero = () => {
  return (
    <section className="relative text-center pt-32 md:pt-48 pb-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-primary/10 to-dark-bg z-0"></div>
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0 animate-bg-pan"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider opacity-0 animate-fade-in">
          Seven<span className="text-secondary">X</span>7
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-dark-text max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Local Commerce, Reimagined.
        </p>
      </div>
    </section>
  );
};

const HowItWorks = () => {
    const steps = [
        {
            icon: '🏪',
            title: '1. Browse Stores',
            description: 'Customers explore a wide variety of local stores on the Grocesphere app.'
        },
        {
            icon: '🛒',
            title: '2. Place Order & Choose',
            description: 'Add products to the cart and select either speedy delivery or convenient in-store pickup.'
        },
        {
            icon: '✅',
            title: '3. Store Prepares',
            description: 'The store owner receives the order via My Store and prepares the items for fulfillment.'
        },
        {
            icon: '🛵',
            title: '4. Order is Ready',
            description: 'A delivery partner is assigned, or you get a notification that your order is ready for collection.'
        },
        {
            icon: '📦',
            title: '5. Receive or Collect',
            description: 'Track the delivery in real-time or pop into the store to collect your prepared order.'
        }
    ];

    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">How Grocesphere Works</h2>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="group text-center flex flex-col items-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms`}}>
                                <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-slate-800 rounded-full border-2 border-primary mb-4 transition-all duration-300 group-hover:scale-115 group-hover:bg-primary/20 group-hover:border-secondary group-hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]">
                                    <span className="text-5xl">{step.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-dark-text max-w-xs">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <EcosystemShowcase />
      <HowItWorks />
    </>
  );
};

export default Home;
