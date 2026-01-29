import React from 'react';
import Button from '../components/Button';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Main Hero Container */}
            <div className="container">
                <div className="hero-content">
                    <h1>
                        <span>Unlock Job Clarity</span>
                        <span>You Thought Was</span>
                        <span>Out of Reach –</span>
                        <span className="gradient-text">Now Just One</span>
                        <span className="gradient-text">Click Away!</span>
                    </h1>

                    <button
                        className="cta-button"
                        onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Start Project
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    <div className="david-float">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                        David
                    </div>
                </div>

                <div className="orbital-container">
                    {/* Center */}
                    <div className="center-content">
                        <div className="center-number">20k+</div>
                        <div className="center-label">Specialists</div>
                    </div>

                    {/* Rings */}
                    <div className="orbit-ring ring-1"></div>
                    <div className="orbit-ring ring-2"></div>
                    <div className="orbit-ring ring-3"></div>

                    {/* Orbiting Items */}
                    <div className="orbit-item item-1">
                        <img src="https://i.pravatar.cc/150?img=1" alt="Specialist" />
                    </div>

                    <div className="orbit-item item-2">
                        <img src="https://i.pravatar.cc/150?img=5" alt="Specialist" />
                    </div>

                    <div className="orbit-item item-3">
                        <img src="https://i.pravatar.cc/150?img=8" alt="Specialist" />
                    </div>

                    <div className="orbit-item item-4">
                        <div className="icon-box icon-briefcase"></div>
                    </div>

                    <div className="orbit-item item-5">
                        <div className="icon-box icon-cloud"></div>
                    </div>

                    <div className="orbit-item item-6">
                        <div className="icon-box icon-cube"></div>
                    </div>

                    <div className="orbit-item item-7">
                        <img src="https://i.pravatar.cc/150?img=12" alt="Specialist" />
                    </div>
                </div>
            </div>

            {/* Trust Logos */}
            <div className="trust-logos">
                <div className="trust-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Dreamure
                </div>
                <div className="trust-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                    </svg>
                    switch.win
                </div>
                <div className="trust-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="4" />
                    </svg>
                    Sphere
                </div>
                <div className="trust-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    PinSpace
                </div>
                <div className="trust-logo">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 19h20L12 2zm0 3.8l6.7 11.7H5.3L12 5.8z" />
                    </svg>
                    Visionix
                </div>
            </div>

            {/* Pricing (for scrolling) */}
            <section id="pricing" style={{ padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Lifetime Access — $29</h2>
                    <Button
                        variant="primary"
                        size="large"
                        onClick={() => window.open('https://buy.stripe.com', '_blank')}
                    >
                        Buy Now
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
