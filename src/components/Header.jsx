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
                <Link
                    to="/"
                    className="logo"
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#2563eb" />
                        <path d="M16 9L11 16L16 23L21 16L16 9Z" fill="white" />
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
