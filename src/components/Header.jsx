import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import './Header.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        // If not on home page, navigate there first
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="url(#gradient)" />
                        <path d="M16 8L12 16L16 24L20 16L16 8Z" fill="white" />
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                                <stop offset="0%" stopColor="#2563eb" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="logo-text gradient-text">WhoPosted</span>
                </Link>

                <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                    <button
                        className="nav-link nav-button"
                        onClick={() => scrollToSection('how-it-works')}
                    >
                        How it works
                    </button>
                    <button
                        className="nav-link nav-button"
                        onClick={() => scrollToSection('featured')}
                    >
                        Featured
                    </button>
                    <button
                        className="nav-link nav-button"
                        onClick={() => scrollToSection('pricing')}
                    >
                        Pricing
                    </button>
                    <button
                        className="nav-link nav-button"
                        onClick={() => scrollToSection('testimonials')}
                    >
                        Testimonial
                    </button>
                    <button
                        className="nav-link nav-button"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </button>
                    <Button
                        onClick={() => {
                            if (window.location.pathname !== '/') {
                                navigate('/');
                                setTimeout(() => {
                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            } else {
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            }
                            setMobileMenuOpen(false);
                        }}
                        variant="outline"
                        size="small"
                        className="login-btn"
                    >
                        Get Started
                    </Button>
                </nav>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
