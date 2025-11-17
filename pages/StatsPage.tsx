
import React, { useState, useEffect, useRef } from 'react';

const KpiCard: React.FC<{ title: string; value: string; icon: React.ReactNode; change?: 'up' | 'down' | 'none' }> = ({ title, value, icon, change='none' }) => {
    const animationClass =
        change === 'up' ? 'text-green-400 scale-110' :
        change === 'down' ? 'text-red-400 scale-110' :
        '';

    return (
        <div className="bg-slate-900/40 p-6 rounded-xl border border-primary/20 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-secondary/30 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="flex items-center justify-between">
                <h3 className="text-dark-text text-sm uppercase tracking-wider font-semibold">{title}</h3>
                <div className="text-3xl opacity-70">{icon}</div>
            </div>
            <p className={`text-4xl lg:text-5xl font-bold text-light-text mt-2 transition-[transform,color] duration-300 ease-in-out ${animationClass}`}>
                {value}
            </p>
        </div>
    );
};

const VisitorHistoryChart: React.FC<{ data: number[] }> = ({ data }) => {
    const width = 200;
    const height = 80;
    const max = Math.max(...data, 1);
    const min = Math.min(...data);
    const range = max - min === 0 ? 1 : max - min;

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d - min) / range) * height;
        return `${x},${y}`;
    }).join(' ');
    
    const areaPoints = `0,${height} ${points} ${width},${height}`;

    return (
        <div className="bg-slate-900/40 p-6 rounded-xl border border-primary/20 shadow-lg h-full backdrop-blur-sm">
             <h3 className="text-lg font-bold text-light-text mb-4 pb-2 border-b border-primary/10">Unique Visitor Growth</h3>
             <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6A0DAD" />
                        <stop offset="100%" stopColor="#00F0FF" />
                    </linearGradient>
                     <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="#6A0DAD" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <polygon
                    fill="url(#areaGradient)"
                    points={areaPoints}
                />
                <polyline
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    points={points}
                />
            </svg>
        </div>
    )
}

const StatsPage: React.FC = () => {
    const [uniqueVisitors, setUniqueVisitors] = useState(0);
    const [visitorChange, setVisitorChange] = useState<'up' | 'down' | 'none'>('none');
    const [visitorHistory, setVisitorHistory] = useState<number[]>(() => Array(20).fill(0));
    const [registeredStores, setRegisteredStores] = useState('0');
    const [registeredPartners, setRegisteredPartners] = useState('0');
    const [registeredUsers, setRegisteredUsers] = useState(0);
    const [totalLiveOrders, setTotalLiveOrders] = useState(0);


    const prevVisitorsRef = useRef(uniqueVisitors);

    // Effect for fetching initial registration counts from localStorage (simulating backend)
    useEffect(() => {
        const storeCount = parseInt(localStorage.getItem('storeRegistrationsCount') || '0', 10);
        const partnerCount = parseInt(localStorage.getItem('partnerRegistrationsCount') || '0', 10);
        setRegisteredStores(storeCount.toLocaleString());
        setRegisteredPartners(partnerCount.toLocaleString());
        setRegisteredUsers(storeCount + partnerCount);

        // Listen for storage changes to update counts across tabs, simulating a real-time backend update
        const handleStorageChange = () => {
            const updatedStoreCount = parseInt(localStorage.getItem('storeRegistrationsCount') || '0', 10);
            const updatedPartnerCount = parseInt(localStorage.getItem('partnerRegistrationsCount') || '0', 10);
            setRegisteredStores(updatedStoreCount.toLocaleString());
            setRegisteredPartners(updatedPartnerCount.toLocaleString());
            setRegisteredUsers(updatedStoreCount + updatedPartnerCount);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Effect for real-time visitor simulation
    useEffect(() => {
        const simulationInterval = setInterval(() => {
            setUniqueVisitors(prev => prev + Math.floor(Math.random() * 3) + 1);
        }, 3000);

        return () => clearInterval(simulationInterval);
    }, []);

    // Effect for handling visitor animation and history
    useEffect(() => {
        if (prevVisitorsRef.current !== uniqueVisitors) {
            setVisitorChange('up');
            const timer = setTimeout(() => setVisitorChange('none'), 300);
            
            setVisitorHistory(prev => {
                const newHistory = [...prev, uniqueVisitors];
                if (newHistory.length > 20) newHistory.shift();
                return newHistory;
            });
            
            prevVisitorsRef.current = uniqueVisitors;
            return () => clearTimeout(timer);
        }
    }, [uniqueVisitors]);

    return (
        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
                        Platform Dashboard
                    </h1>
                    <p className="mt-6 text-lg text-dark-text">
                        Real-time insights into our growing network.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    <KpiCard 
                        title="Registered Users" value={registeredUsers.toLocaleString()}
                        icon="👥"
                    />
                    <KpiCard 
                        title="Registered Stores" value={registeredStores}
                        icon="🏪"
                    />
                    <KpiCard 
                        title="Registered Partners" value={registeredPartners}
                        icon="🛵"
                    />
                     <KpiCard 
                        title="Total Live Orders" value={totalLiveOrders.toLocaleString()}
                        icon="📦"
                    />
                    <KpiCard 
                        title="Total Unique Visitors" value={uniqueVisitors.toLocaleString()}
                        change={visitorChange}
                        icon="👤"
                    />
                </div>

                 <div className="mt-6 max-w-7xl mx-auto">
                    <VisitorHistoryChart data={visitorHistory} />
                </div>
            </div>
        </div>
    );
};

export default StatsPage;
