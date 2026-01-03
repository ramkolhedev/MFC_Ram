import React, { useState } from 'react';
import './MenuPage.css';

const MenuPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('chicken');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'chicken', name: 'Chicken', icon: '🍗' },
        { id: 'burgers', name: 'Burgers', icon: '🍔' },
        { id: 'sides', name: 'Sides', icon: '🍟' },
        { id: 'drinks', name: 'Beverages', icon: '🥤' },
        { id: 'desserts', name: 'Desserts', icon: '🍰' },
    ];

    const menuItems = {
        chicken: [
            { id: 1, name: '2pc Chicken Bucket', price: '₹199', desc: 'Juicy & spicy MFC chicken', rating: 4.8 },
            { id: 2, name: '4pc Chicken Combo', price: '₹349', desc: 'Combo with fries & drink', rating: 4.7 },
            { id: 3, name: '6pc Bucket Meal', price: '₹599', desc: 'Family feast with sides', rating: 4.9 },
            { id: 4, name: 'Zinger Chicken', price: '₹149', desc: 'Crispy & crunchy delight', rating: 4.6 },
        ],
        burgers: [
            { id: 1, name: 'Classic Zinger', price: '₹179', desc: 'Original zinger burger', rating: 4.8 },
            { id: 2, name: 'Double Zinger', price: '₹249', desc: 'Double patty zinger', rating: 4.9 },
            { id: 3, name: 'Crispy Chicken Burger', price: '₹159', desc: 'Crispy golden texture', rating: 4.7 },
            { id: 4, name: 'Spicy Burger', price: '₹189', desc: 'Loaded with spicy flavours', rating: 4.6 },
        ],
        sides: [
            { id: 1, name: 'Hot & Crispy Fries', price: '₹89', desc: 'Golden crispy fries', rating: 4.7 },
            { id: 2, name: 'Corn Potage', price: '₹99', desc: 'Creamy corn soup', rating: 4.6 },
            { id: 3, name: 'Mac & Cheese', price: '₹119', desc: 'Cheesy mac pasta', rating: 4.8 },
            { id: 4, name: 'Coleslaw', price: '₹79', desc: 'Fresh & crispy coleslaw', rating: 4.5 },
        ],
        drinks: [
            { id: 1, name: 'Iced Coke', price: '₹49', desc: 'Ice cold cola', rating: 4.6 },
            { id: 2, name: 'Mango Shake', price: '₹79', desc: 'Fresh mango shake', rating: 4.8 },
            { id: 3, name: 'Vanilla Shake', price: '₹79', desc: 'Creamy vanilla delight', rating: 4.7 },
            { id: 4, name: 'Iced Tea', price: '₹59', desc: 'Refreshing iced tea', rating: 4.5 },
        ],
        desserts: [
            { id: 1, name: 'Chocolate Cake', price: '₹99', desc: 'Rich chocolate cake', rating: 4.9 },
            { id: 2, name: 'Ice Cream Cone', price: '₹69', desc: 'Vanilla soft serve', rating: 4.7 },
            { id: 3, name: 'Brownie Bliss', price: '₹89', desc: 'Fudgy brownie', rating: 4.8 },
            { id: 4, name: 'Donut Delight', price: '₹59', desc: 'Glazed donut', rating: 4.6 },
        ],
    };

    const items = menuItems[selectedCategory] || [];
    const filtered = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="menu-page">
            {/* Hero Section */}
            <div className="menu-hero">
                <div className="menu-hero-content">
                    <h1 className="menu-title">Our Menu</h1>
                    <p className="menu-subtitle">Explore our delicious selection of finger-licking good food</p>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="menu-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search menu items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon">🔍</span>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            <span className="category-name">{cat.name}</span>
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="menu-grid">
                    {filtered.length > 0 ? (
                        filtered.map(item => (
                            <div key={item.id} className="menu-item-card">
                                <div className="item-image-placeholder">
                                    {['chicken', 'burgers'].includes(selectedCategory) ? '🍗' : '🍟'}
                                </div>
                                <div className="item-content">
                                    <div className="item-header">
                                        <h3 className="item-name">{item.name}</h3>
                                        <span className="item-rating">⭐ {item.rating}</span>
                                    </div>
                                    <p className="item-desc">{item.desc}</p>
                                    <div className="item-footer">
                                        <span className="item-price">{item.price}</span>
                                        <button className="add-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No items found. Try searching something else!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
