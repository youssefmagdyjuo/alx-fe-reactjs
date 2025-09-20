import React from 'react';

const services = [
    {
        title: 'Web Development',
        description: 'Building responsive and modern web applications tailored to your needs.',
    },
    {
        title: 'UI/UX Design',
        description: 'Designing user-friendly interfaces for optimal user experience.',
    },
    {
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications for iOS and Android.',
    },
];

const Services = () => (
    <div style={{ padding: '2rem' }}>
        <h1>Our Services</h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {services.map((service, idx) => (
                <div
                    key={idx}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '1rem',
                        minWidth: '220px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                >
                    <h2 style={{ margin: '0 0 0.5rem 0' }}>{service.title}</h2>
                    <p style={{ margin: 0 }}>{service.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Services;