import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1> Reminders </h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px'
}

export default Header; 