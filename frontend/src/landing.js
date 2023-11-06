import React from 'react';

const LandingPage = () => {
    // Define your inline styles here
    const pageStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("your-background-image-url.jpg")',
        backgroundSize: 'cover',
    };

    const navbarStyles = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    };

    const titleStyles = {
        color: '#333',
        margin: '20px 0',
    };

    const buttonStyles = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return (
        <div style={pageStyles}>
            <nav style={navbarStyles}>
                <a href="#home" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
                <a href="#recipes" style={{ textDecoration: 'none', color: 'black' }}>Recipes</a>
            </nav>
            <h1 style={titleStyles}>FridgeFood Finder</h1>
            <button style={buttonStyles} onClick={() => alert('Going to camera!')}>
                Open Camera
            </button>
        </div>
    );
};

export default LandingPage;
