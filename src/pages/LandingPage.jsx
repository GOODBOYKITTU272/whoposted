import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import './LandingPage.css';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-grid fade-in">
                        <div className="hero-text">
                            <p className="hero-eyebrow">JOB SEARCH CONTEXT</p>
                            <h1 className="hero-title">
                                See who posted the job — before you apply.
                            </h1>
                            <p className="hero-subtitle">
                                Daily US and overseas job postings with the name and LinkedIn profile of the person who shared them — so you're not applying blind.
                            </p>
                            <p className="hero-supporting">
                                Designed to help you prepare, prioritize, and reach out with context — not guarantees.
                            </p>
                            <div className="hero-cta">
                                <Button
                                    variant="primary"
                                    size="large"
                                    onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Get Lifetime Access — $29
                                </Button>
                                <p className="cta-microcopy">
                                    One-time payment · No subscription · Updated every 24 hours
                                </p>
                            </div>
                            <div className="hero-trust-signals">
                                <span>Public job data only</span>
                                <span>·</span>
                                <span>No emails or phone numbers</span>
                                <span>·</span>
                                <span>Independent product</span>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="parent">
                                <div className="card">
                                    <div className="card-logo">
                                        <span className="circle circle1"></span>
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                                                <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                                                <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                                                <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="glass"></div>
                                    <div className="card-content">
                                        <span className="title">WhoPosted</span>
                                        <span className="text">See exactly who shared the job. No blind applications, just context.</span>
                                    </div>
                                    <div className="card-bottom">
                                        <div className="social-buttons-container">
                                            <button className="social-button">
                                                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                                </svg>
                                            </button>
                                            <button className="social-button">
                                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <button
                                            className="view-more"
                                            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                                        >
                                            <span className="view-more-button">Learn more</span>
                                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3-Step Process */}
            <section id="how-it-works" className="process">
                <div className="container">
                    <p className="section-label">HOW IT WORKS</p>
                    <h2 className="section-title-large">See who posted the job in three simple steps</h2>

                    <div className="steps">
                        <div className="step-card slide-in-up">
                            <div className="step-icon">📋</div>
                            <h3>Discover recent jobs</h3>
                            <p className="step-subtitle">Updated daily</p>
                            <p>Browse US job postings with the role, company, and posting time, so you can focus on roles that are still fresh.</p>
                        </div>
                        <div className="step-card slide-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="step-icon">👤</div>
                            <h3>Understand who shared the role</h3>
                            <p className="step-subtitle">Human context, not guesswork</p>
                            <p>Every job shows the name and LinkedIn profile of the person who posted it, helping you understand who's behind the role before you apply.</p>
                        </div>
                        <div className="step-card slide-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="step-icon">✍️</div>
                            <h3>Prepare and act with context</h3>
                            <p className="step-subtitle">Intentional, professional outreach</p>
                            <p>Use the job and poster context to tailor your resume or introduce yourself thoughtfully. This approach is widely discussed in career communities as a way to improve visibility—without guarantees.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section id="featured" className="featured">
                <div className="container">
                    <p className="section-label">FEATURED</p>
                    <h2 className="section-title-large">Why job seekers use WhoPosted</h2>

                    <div className="featured-grid">
                        <div className="featured-card fade-in">
                            <div className="featured-icon">👤</div>
                            <h3>Human context, not blind applications</h3>
                            <p>See the name and LinkedIn profile of the person who posted the job, so you understand who's behind the role before you apply or reach out.</p>
                        </div>
                        <div className="featured-card fade-in">
                            <div className="featured-icon">🕒</div>
                            <h3>Focus on what's recent</h3>
                            <p>Jobs are updated every 24 hours with clear posting times, helping you prioritize fresh roles instead of applying to outdated listings.</p>
                        </div>
                        <div className="featured-card fade-in">
                            <div className="featured-icon">🎯</div>
                            <h3>Smarter preparation</h3>
                            <p>Use the job details and poster context to tailor your resume and approach each application more intentionally.</p>
                        </div>
                        <div className="featured-card fade-in">
                            <div className="featured-icon">💳</div>
                            <h3>Simple, transparent access</h3>
                            <p>Pay once and get lifetime access. No subscriptions, no renewals, and no hidden fees.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <p className="pricing-label">PRICING</p>
                    <h2 className="section-title">Simple one-time pricing</h2>

                    <div className="pricing-card">
                        <h3>Lifetime Access</h3>
                        <p className="price">$29<span>/lifetime</span></p>
                        <ul>
                            <li>✓ Know who posted each job</li>
                            <li>✓ LinkedIn profiles & direct job links</li>
                            <li>✓ Daily fresh job updates</li>
                            <li>✓ Lifetime access, no expiry</li>
                        </ul>
                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <h2 className="section-title">What Job Seekers Are Saying</h2>

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "I don't apply to jobs without checking WhoPosted first. Knowing who posted
                                the role gives me a huge advantage."
                            </p>
                            <div className="testimonial-author">
                                <strong>Sarah M.</strong>
                                <span>Software Engineer</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "The timing feature is incredible. I can focus on fresh jobs posted in the
                                last few hours instead of week-old listings."
                            </p>
                            <div className="testimonial-author">
                                <strong>Michael R.</strong>
                                <span>Product Manager</span>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">
                                "Worth every penny. I got 3 interviews in my first week just by reaching
                                out to the right people at the right time."
                            </p>
                            <div className="testimonial-author">
                                <strong>Jennifer L.</strong>
                                <span>Data Analyst</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to Transform Your Job Search?</h2>
                        <p>Join hundreds of job seekers who are already getting better results.</p>
                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Started Now — $29
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <h3 className="gradient-text">WhoPosted</h3>
                            <p>Know who posted the job before you apply.</p>
                        </div>
                        <div className="footer-links">
                            <a href="#pricing">Pricing</a>
                            <a href="#testimonial">Testimonials</a>
                            <a href="mailto:support@whoposted.com">Contact</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 WhoPosted. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
