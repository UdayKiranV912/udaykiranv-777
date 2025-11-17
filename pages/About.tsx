

import React, { useState } from 'react';

const StepCard: React.FC<{ icon: string; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full border-2 border-primary">
            <span className="text-3xl">{icon}</span>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-light-text mb-2">{title}</h3>
            <p className="text-dark-text leading-relaxed">{description}</p>
        </div>
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; delay: string }> = ({ title, children, delay }) => (
    <div className="bg-slate-800/50 p-8 rounded-xl border border-primary/20 opacity-0 animate-fade-in-up" style={{ animationDelay: delay }}>
        <h2 className="text-3xl font-bold text-light-text mb-4">{title}</h2>
        {children}
    </div>
);

type AppTab = 'customer' | 'store' | 'partner';

const AppDemo = () => {
    const [activeTab, setActiveTab] = useState<AppTab>('customer');

    const renderContent = () => {
        switch (activeTab) {
            case 'customer':
                return {
                    title: 'Grocesphere: For Customers',
                    features: [
                        { icon: '🛒', text: 'Browse thousands of products from trusted local stores.' },
                        { icon: '📍', text: 'Enjoy real-time order tracking from the store to your door.' },
                        { icon: '💳', text: 'Secure and seamless in-app payments.' },
                    ]
                };
            case 'store':
                return {
                    title: 'My Store: For Owners',
                    features: [
                        { icon: '🔔', text: 'Receive instant notifications for new orders.' },
                        { icon: '📦', text: 'Manage your inventory and update product listings effortlessly.' },
                        { icon: '📈', text: 'Access sales analytics to track your business growth.' },
                    ]
                };
            case 'partner':
                return {
                    title: 'My Partner: For Delivery',
                    features: [
                        { icon: '🗺️', text: 'Optimized routes for fast and efficient deliveries.' },
                        { icon: '💰', text: 'Track your earnings and view payment history.' },
                        { icon: '✅', text: 'Accept or decline delivery requests based on your availability.' },
                    ]
                };
        }
    };

    const content = renderContent();

    return (
        <div className="max-w-4xl mx-auto mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">A Look Inside Our Apps</h2>
            <div className="bg-slate-800/50 rounded-xl border border-primary/20 overflow-hidden">
                <div className="flex justify-center border-b border-primary/20">
                    <button onClick={() => setActiveTab('customer')} className={`flex-1 p-4 text-sm sm:text-base font-semibold transition-colors duration-300 ${activeTab === 'customer' ? 'bg-primary/20 text-secondary' : 'text-dark-text hover:bg-primary/10'}`}>For Customers</button>
                    <button onClick={() => setActiveTab('store')} className={`flex-1 p-4 text-sm sm:text-base font-semibold transition-colors duration-300 ${activeTab === 'store' ? 'bg-primary/20 text-secondary' : 'text-dark-text hover:bg-primary/10'}`}>For Stores</button>
                    <button onClick={() => setActiveTab('partner')} className={`flex-1 p-4 text-sm sm:text-base font-semibold transition-colors duration-300 ${activeTab === 'partner' ? 'bg-primary/20 text-secondary' : 'text-dark-text hover:bg-primary/10'}`}>For Partners</button>
                </div>
                <div className="p-8 sm:p-12 animate-fade-in">
                    <h3 className="text-2xl font-bold text-light-text mb-6 text-center sm:text-left">{content.title}</h3>
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <div className="flex-shrink-0 w-48 h-96 bg-slate-900 rounded-2xl p-4 border-2 border-slate-700 flex flex-col justify-center items-center">
                             <div className="w-8 h-1 bg-slate-700 rounded-full mb-4"></div>
                             <p className="text-secondary text-5xl mb-4">{content.features[0].icon}</p>
                             <div className="w-full h-1 bg-slate-700/50 rounded-full my-2"></div>
                             <div className="w-full h-1 bg-slate-700/50 rounded-full my-2"></div>
                             <div className="w-2/3 h-1 bg-slate-700/50 rounded-full my-2 self-start"></div>
                        </div>
                        <ul className="space-y-4">
                            {content.features.map(feature => (
                                <li key={feature.text} className="flex items-start">
                                    <span className="text-xl mr-4">{feature.icon}</span>
                                    <span className="text-dark-text">{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};


const About: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
            How It Works
          </h1>
          <p className="mt-6 text-lg text-dark-text">
            Pioneering the future of local commerce.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-20 relative">
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-primary/20 rounded-full overflow-hidden">
                 <style>{`
                    .line-path {
                        stroke-dasharray: 1000;
                        stroke-dashoffset: 1000;
                        animation: drawLine 3s ease-in-out forwards;
                    }
                 `}</style>
                 <svg width="4" height="100%" className="absolute left-0 top-0">
                    <line x1="2" y1="0" x2="2" y2="100%" stroke="#00F0FF" strokeWidth="4" className="line-path" />
                 </svg>
            </div>
            <div className="space-y-16 relative">
                 <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms'}}>
                    <StepCard 
                        icon="🛒"
                        title="1. Place Your Order, Your Way"
                        description="Using the Grocesphere app, customers browse local stores, order their desired products, and choose between swift home delivery or convenient in-store pickup."
                    />
                 </div>
                 <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '700ms'}}>
                    <StepCard 
                        icon="🏪"
                        title="2. Store Receives & Prepares"
                        description="The store owner gets an instant notification on the My Store app, accepts the order, and prepares the items for pickup or delivery."
                    />
                 </div>
                 <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1200ms'}}>
                    <StepCard 
                        icon="🛍️"
                        title="3. Collect or Get it Delivered"
                        description="A nearby delivery partner brings the order swiftly to your location, or you receive a notification that your order is ready to be collected."
                    />
                 </div>
            </div>
        </div>

        <AppDemo />

        <div className="max-w-4xl mx-auto mt-24 space-y-12">
          <InfoCard title="Our Mission" delay="200ms">
            <p className="text-dark-text leading-relaxed">
              Our mission is to empower local businesses by providing them with the technology and platform to thrive in the digital age. We aim to create a seamless, integrated ecosystem that connects store owners, delivery partners, and customers, fostering sustainable growth and strengthening local economies. We believe in leveling the playing field, giving neighborhood stores the tools to compete and succeed.
            </p>
          </InfoCard>

          <InfoCard title="Our Vision" delay="400ms">
            <p className="text-dark-text leading-relaxed">
              We envision a world where convenience and community go hand-in-hand. Our goal is to become the leading platform for on-demand local commerce, known for our reliability, innovation, and commitment to our partners. By building a robust and efficient network, we strive to make daily life easier for customers while creating new opportunities for entrepreneurs and independent workers.
            </p>
          </InfoCard>
          
          <InfoCard title="Our Values" delay="600ms">
            <ul className="list-disc list-inside text-dark-text space-y-2">
                <li><span className="font-semibold text-light-text">Empowerment:</span> We provide tools and opportunities for growth.</li>
                <li><span className="font-semibold text-light-text">Integration:</span> We build connected, seamless experiences.</li>
                <li><span className="font-semibold text-light-text">Community:</span> We support and strengthen local economies.</li>
                <li><span className="font-semibold text-light-text">Innovation:</span> We constantly seek better ways to serve our users.</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default About;
