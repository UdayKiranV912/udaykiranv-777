

import React from 'react';
import AppPageLayout from '../../components/AppPageLayout';

const MyPartnerApp: React.FC = () => {
    const features = [
        {
            icon: '🗺️',
            title: 'Optimized Routes',
            description: 'Save time and fuel with smart, optimized delivery routes for every order.'
        },
        {
            icon: '💰',
            title: 'Transparent Earnings',
            description: 'Track your earnings in real-time and access detailed payment history anytime.'
        },
        {
            icon: '✅',
            title: 'Flexible Schedule',
            description: 'Be your own boss. Accept or decline delivery requests based on your availability.'
        },
    ];

    return (
        <AppPageLayout 
            appName={<>My Partner Groce<span className="text-secondary">sphere</span></>}
            tagline="Earn on your terms. Join our network of delivery partners and earn flexibly."
            appIcon='🛵'
            features={features}
            status="Live"
            ctaLink="/register"
            ctaText="Become a Partner"
        />
    );
};

export default MyPartnerApp;