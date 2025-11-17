import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; delay: string }> = ({ title, children, delay }) => (
    <div className="bg-slate-800/50 p-8 rounded-xl border border-primary/20 opacity-0 animate-fade-in-up" style={{ animationDelay: delay }}>
        <h2 className="text-3xl font-bold text-light-text mb-4">{title}</h2>
        {children}
    </div>
);

const AboutCompany: React.FC = () => {
  return (
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider">
            About Seven<span className="text-secondary">X</span>7
          </h1>
          <p className="mt-6 text-lg text-dark-text">
            Engineering the backbone of next-generation local commerce.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          <InfoCard title="Who We Are" delay="200ms">
            <p className="text-dark-text leading-relaxed">
              SevenX7 is a technology company dedicated to building the infrastructure for the future of retail. We specialize in creating robust, scalable, and intuitive platforms that bridge the gap between local merchants and their communities. Our team is composed of innovators, engineers, and strategists passionate about using technology to solve real-world challenges and create economic opportunities.
            </p>
          </InfoCard>

          <InfoCard title="Our Technology" delay="400ms">
            <p className="text-dark-text leading-relaxed">
              At the heart of SevenX7 is a powerful, integrated technology stack. We develop and maintain the three core applications of the Grocesphere ecosystem. Our platform is built for reliability and efficiency, ensuring real-time order processing, inventory management, and logistics coordination. We focus on creating a seamless user experience across all our applications, driven by data and user-centric design principles.
            </p>
          </InfoCard>
          
          <InfoCard title="Our Commitment" delay="600ms">
            <p className="text-dark-text leading-relaxed">
                We are committed to fostering a thriving ecosystem where every participant can succeed. For our business clients—the store owners—we promise a reliable platform that simplifies operations and drives growth. For the end-users of our clients' services, we ensure a smooth and dependable experience. Our commitment extends to continuous innovation, security, and providing unparalleled technological support to power local economies everywhere.
            </p>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
