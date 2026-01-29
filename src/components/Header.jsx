import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <div className="logo-icon">W</div>
                    WhoPosted
                </Link>

                <nav className="nav">
                    <button className="nav-link" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>How it works</button>
                    <button className="nav-link" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Pricing</button>
                    <Link to="/jobs" className="nav-link">Search Jobs</Link>
                </nav>

                <div className="nav-actions">
                    <button className="login-btn">Log In</button>
                    <button
                        className="join-btn"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </header>
    );
}
