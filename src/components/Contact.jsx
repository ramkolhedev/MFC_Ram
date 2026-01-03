import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: '📞',
            title: 'Phone',
            details: ['1800-22-4244', 'Available 24/7']
        },
        {
            icon: '📧',
            title: 'Email',
            details: ['support@mfc.co.in', 'feedback@mfc.co.in']
        },
        {
            icon: '📍',
            title: 'Address',
            details: ['MFC Headquarters', 'New Delhi, India']
        },
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-title">Get In Touch</h1>
                    <p className="contact-subtitle">We'd love to hear from you. Send us a message!</p>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className="contact-container">
                <div className="contact-wrapper">
                    {/* Contact Info Cards */}
                    <div className="contact-info-grid">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="info-card">
                                <div className="info-icon">{info.icon}</div>
                                <h3 className="info-title">{info.title}</h3>
                                {info.details.map((detail, i) => (
                                    <p key={i} className="info-detail">{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="form-section">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Your phone"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Message subject"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your message..."
                                    rows="6"
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>

                            {submitted && (
                                <div className="success-message">
                                    ✓ Thank you! Your message has been sent successfully.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
