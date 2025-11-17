
import React from 'react';

const EcosystemShowcase: React.FC = () => {
    const pillars = [
        {
            icon: '🛍️',
            title: 'For Customers',
            description: 'Discover and shop from the best local stores right in your neighborhood.',
            app: 'Grocesphere'
        },
        {
            icon: '🏪',
            title: 'For Stores',
            description: 'Reach more customers and manage orders with our intuitive, powerful platform.',
            app: 'My Store'
        },
        {
            icon: '🛵',
            title: 'For Partners',
            description: 'Earn flexibly by delivering goods and connecting your community, one order at a time.',
            app: 'My Partner'
        }
    ];

    return (
        <section className="py-20 bg-dark-bg/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>A Connected Ecosystem</h2>
                <p className="text-lg text-dark-text max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    We've built three distinct applications that work together seamlessly, creating a powerful, unified network for local commerce.
                </p>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="hidden md:block absolute inset-0 -top-8 w-full h-full z-0">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 350">
                            <defs>
                                <marker id="flow-arrow" markerWidth="10" markerHeight="7" refX="9.5" refY="3.5" orient="auto" fillOpacity="0.7">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#00F0FF" />
                                </marker>
                                <style>{`
                                    .connector-path {
                                        stroke-dasharray: 1000;
                                        stroke-dashoffset: 1000;
                                        animation: drawLine 2.5s ease-out forwards;
                                    }
                                `}</style>
                            </defs>
                            {/* Customer -> Store */}
                            <path d="M250 150 C 350 50, 450 50, 450 150" stroke="#00F0FF" strokeWidth="1.5" fill="none" className="connector-path" style={{animationDelay: '0.8s'}} opacity="0.4" markerEnd="url(#flow-arrow)" />
                            {/* Store -> Partner */}
                            <path d="M550 150 C 650 50, 750 50, 750 150" stroke="#00F0FF" strokeWidth="1.5" fill="none" className="connector-path" style={{animationDelay: '1.3s'}} opacity="0.4" markerEnd="url(#flow-arrow)" />
                            {/* Partner -> Customer (Loop back) */}
                            <path d="M750 165 C 600 320, 400 320, 250 165" stroke="#00F0FF" strokeWidth="1.5" fill="none" className="connector-path" style={{animationDelay: '1.8s'}} opacity="0.4" markerEnd="url(#flow-arrow)" />
                        </svg>
                    </div>
                
                    {pillars.map((pillar, index) => (
                        <div key={index} className="group relative z-10 bg-slate-800/50 p-8 rounded-xl border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:border-secondary hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20 hover:scale-[1.03] opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.6 + (index * 0.2)}s`, animationName: 'fadeInUp, subtleFloat', animationDuration: '1s, 8s', animationIterationCount: '1, infinite' }}>
                            <div className="mb-4 w-16 h-16 mx-auto flex items-center justify-center bg-primary/10 rounded-full border-2 border-secondary/30 transition-transform duration-300 group-hover:scale-110">
                                <span className="text-4xl">{pillar.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-light-text mb-2">{pillar.title}</h3>
                            <p className="text-dark-text mb-4 text-sm leading-relaxed">{pillar.description}</p>
                            <span className="font-semibold text-secondary text-xs uppercase tracking-widest">{pillar.app}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EcosystemShowcase;