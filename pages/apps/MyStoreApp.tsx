

import React from 'react';
import AppPageLayout from '../../components/AppPageLayout';

const MyStoreApp: React.FC = () => {
    const features = [
        {
            icon: '🔔',
            title: 'Instant Order Alerts',
            description: 'Never miss a sale. Get immediate notifications for new customer orders.'
        },
        {
            icon: '📈',
            title: 'Sales Analytics',
            description: 'Track your performance with easy-to-understand sales data and growth insights.'
        },
        {
            icon: '📦',
            title: 'Inventory Management',
            description: 'Effortlessly update product listings, manage stock levels, and set prices on the go.'
        },
    ];

    return (
        <AppPageLayout 
            appName={<>My Store Groce<span className="text-secondary">sphere</span></>}
            tagline="Your business, supercharged. Manage inventory, process orders, and grow your customer base."
            appIcon='🏪'
            features={features}
            status="Live"
            ctaLink="/register"
            ctaText="Register Your Store"
        />
    );
};

export default MyStoreApp;