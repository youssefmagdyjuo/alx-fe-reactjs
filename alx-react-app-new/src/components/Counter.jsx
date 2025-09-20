import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Current Count: {count}</p>
            <button
                style={{ margin: '0 8px', padding: '8px 16px', fontSize: '1rem' }}
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                style={{ margin: '0 8px', padding: '8px 16px', fontSize: '1rem' }}
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
            <button
                style={{ margin: '0 8px', padding: '8px 16px', fontSize: '1rem' }}
                onClick={() => setCount(0)}
            >
                Reset
            </button>
        </div>
    );
}
