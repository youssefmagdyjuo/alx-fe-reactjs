import React from 'react';

const homeStyles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        fontFamily: 'Segoe UI, Arial, sans-serif',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: '1rem',
        letterSpacing: '1px',
        textShadow: '0 2px 8px rgba(30,41,59,0.08)',
    },
    paragraph: {
        fontSize: '1.2rem',
        color: '#334155',
        maxWidth: '500px',
        textAlign: 'center',
        lineHeight: '1.6',
        background: '#fff',
        padding: '1.5rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(30,41,59,0.07)',
    }
};

const Home = () => {
    return (
        <div style={homeStyles.container}>
            <h1 style={homeStyles.heading}>Welcome to My Company</h1>
            <p style={homeStyles.paragraph}>
                This is the home page of our React application.
            </p>
        </div>
    );
};

export default Home;