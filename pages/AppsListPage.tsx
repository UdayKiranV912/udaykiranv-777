
import React from 'react';
import { Link } from 'react-router-dom';

const AppInfoCard = ({ name, description, icon, link, status }: { name: string; description: string; icon: string; link: string; status: 'Live' | 'Coming Soon' }) => {
    const isComingSoon = status === 'Coming Soon';
    return (
        <Link to={link} className="block group h-full">
            <div className={`relative bg-slate-800/50 p-8 rounded-xl border border-primary/20 shadow-lg h-full transition-all duration-300 group-hover:border-secondary group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] group-hover:-translate-y-1 backdrop-blur-sm flex flex-col ${isComingSoon ? 'animate-border-pulse' : ''}`}>
                <div className="absolute top-4 right-4 z-10">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${status === 'Live' ? 'bg-green-500/20 text-green-300' : `bg-yellow-500/20 text-yellow-300 ${isComingSoon ? 'animate-badge-pulse' : ''}`}`}>
                        {status}
                    </span>
                </div>
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-2xl font-bold text-light-text mb-2">{name}</h3>
                <p className="text-dark-text flex-grow">{description}</p>
                <div className="mt-6 text-right text-secondary font-semibold text-sm">
                    Learn More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
            </div>
        </Link>
    );
};


const AppsListPage: React.FC = () => {

    const apps = [
        {
            name: "Grocesphere",
            description: "For customers. Order groceries and essentials from local stores for quick delivery.",
            link: "/app/grocesphere",
            status: "Coming Soon" as const,
            icon: '🛍️'
        },
        {
            name: "My Store Grocesphere",
            description: "For store owners. Manage inventory, process orders, and grow your customer base.",
            link: "/app/my-store",
            status: "Live" as const,
            icon: '🏪'
        },
        {
            name: "My Partner Grocesphere",
            description: "For delivery partners. Accept orders, follow optimized routes, and earn flexibly.",
            link: "/app/my-partner",
            status: "Live" as const,
            icon: '🛵'
        }
    ];

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
                        Our Application Suite
                    </h1>
                    <p className="mt-6 text-lg text-dark-text">
                        A fully integrated ecosystem designed to connect every part of the local commerce journey.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        {apps.map((app, index) => (
                            <div key={app.name} className="opacity-0 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                                <AppInfoCard {...app} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsListPage;