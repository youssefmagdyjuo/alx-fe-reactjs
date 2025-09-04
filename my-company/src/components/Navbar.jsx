import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#3652b0ff',
    boxShadow: '0 4px 16px rgba(54,82,176,0.12)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderRadius: '0.5rem',
};

const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2.5rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1.15rem',
    letterSpacing: '0.7px',
    padding: '0.6rem 1.3rem',
    borderRadius: '6px',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
    boxShadow: '0 2px 6px rgba(54,82,176,0.08)',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    background: '#3652b0ff',
};

const linkHoverStyle = {
    background: '#fff',
    color: '#3652b0ff',
    boxShadow: '0 4px 12px rgba(54,82,176,0.18)',
};

export default function Navbar() {
    const [hovered, setHovered] = React.useState(null);

    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                {[
                    { to: '/', label: 'Home' },
                    { to: '/about', label: 'About' },
                    { to: '/services', label: 'Services' },
                    { to: '/contact', label: 'Contact' },
                ].map((item, idx) => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            style={{
                                ...linkStyle,
                                ...(hovered === idx ? linkHoverStyle : {}),
                            }}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                            tabIndex={0}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
