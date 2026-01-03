import React from 'react';
import './About.css';

const About = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Quality',
            description: 'We maintain the highest standards of quality in every product we serve.'
        },
        {
            icon: '❤️',
            title: 'Customer First',
            description: 'Your satisfaction is our priority. We listen and improve constantly.'
        },
        {
            icon: '🌟',
            title: 'Innovation',
            description: 'We continuously innovate to bring new flavors and experiences.'
        },
        {
            icon: '🤝',
            title: 'Community',
            description: 'We believe in building strong relationships with our customers.'
        },
    ];

    const stats = [
        { number: '50+', label: 'Years of Excellence' },
        { number: '500+', label: 'Restaurants in India' },
        { number: '10M+', label: 'Happy Customers' },
        { number: '24/7', label: 'Service Available' },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-title">About MFC India</h1>
                    <p className="about-subtitle">Finger-Lickin' Good Since 1992</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="about-container">
                {/* Story Section */}
                <section className="story-section">
                    <div className="story-content">
                        <h2>Our Story</h2>
                        <p>
                            MFC was founded by Colonel Harland David Sanders in 1992 with a simple mission: to serve
                            delicious, mouth-watering fried chicken at affordable prices. Today, we're proud to bring the
                            same taste, quality, and hospitality to India.
                        </p>
                        <p>
                            With over 500 restaurants across India, we're committed to delivering the "Finger-Lickin' Good"
                            experience that has made us a global favorite. From our signature Original Recipe to innovative
                            Indian flavors, every bite is crafted with passion.
                        </p>
                    </div>
                    <div className="story-image">
                        <div className="placeholder-image">🍗</div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <h2>By The Numbers</h2>
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        {values.map((value, idx) => (
                            <div key={idx} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-desc">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quality Section */}
                <section className="quality-section">
                    <h2>Why Choose MFC?</h2>
                    <div className="quality-grid">
                        <div className="quality-card">
                            <h3>🥇 Premium Quality</h3>
                            <p>Only the finest ingredients, sourced responsibly and prepared with care.</p>
                        </div>
                        <div className="quality-card">
                            <h3>⚡ Fast Service</h3>
                            <p>Hot, fresh, and ready when you need it - without compromising quality.</p>
                        </div>
                        <div className="quality-card">
                            <h3>🌍 Global Taste, Local Touch</h3>
                            <p>Authentic MFC recipes with Indian flavors you'll love.</p>
                        </div>
                        <div className="quality-card">
                            <h3>💚 Sustainability</h3>
                            <p>We're committed to sustainable practices and community welfare.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <h2>Ready to Experience MFC?</h2>
                    <p>Visit our nearest restaurant or order online for a taste of finger-lickin' goodness!</p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Find a Restaurant</button>
                        <button className="btn-secondary">Order Now</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
