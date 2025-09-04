import React from 'react';

const styles = {
    container: {
        maxWidth: 500,
        margin: '3rem auto',
        padding: '2.5rem 2rem',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif',
    },
    heading: {
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: 600,
        color: '#222',
        letterSpacing: '0.5px',
        textAlign: 'center',
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 500,
        color: '#444',
    },
    input: {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: 8,
        fontSize: '1rem',
        marginBottom: '1.5rem',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    textarea: {
        width: '100%',
        padding: '0.75rem',
        border: '1px solid #d1d5db',
        borderRadius: 8,
        fontSize: '1rem',
        marginBottom: '1.5rem',
        outline: 'none',
        resize: 'vertical',
        minHeight: 120,
        transition: 'border-color 0.2s',
    },
    button: {
        width: '100%',
        padding: '0.85rem',
        background: 'linear-gradient(90deg,#007bff 0%,#0056b3 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontSize: '1.1rem',
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,123,255,0.08)',
        transition: 'background 0.2s',
    },
};

const Contact = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Us</h2>
            <form>
                <div>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input type="text" id="name" name="name" style={styles.input} autoComplete="name" />
                </div>
                <div>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input type="email" id="email" name="email" style={styles.input} autoComplete="email" />
                </div>
                <div>
                    <label htmlFor="message" style={styles.label}>Message</label>
                    <textarea id="message" name="message" rows="5" style={styles.textarea} />
                </div>
                <button type="submit" style={styles.button}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;