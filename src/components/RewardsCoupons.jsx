import React, { useState } from 'react';
import './rewards-coupons.css'

const sampleUser = {
    name: 'Ram Kolhe',
    points: 860,
    tier: 'Spicy Wingster',
};

const rewardsCatalog = [
    { id: 1, title: 'Free Wings', cost: 500, desc: '6 pcs Smoky Red Wings' },
    { id: 2, title: 'Zinger Burger', cost: 1000, desc: 'Classic Zinger' },
    { id: 3, title: 'Bucket Deal', cost: 2000, desc: 'Family Bucket Meal' },
];

const couponsList = [
    { id: 'SPICY25', title: '25% OFF on Spicy Menu', type: 'Percent', expiry: '2025-12-31', minOrder: 299, badge: 'Hot' },
    { id: 'FREESIDES', title: 'Free Fries on orders 499+', type: 'Flat', expiry: '2025-11-30', minOrder: 499, badge: 'Limited' },
    { id: 'HAPPYHOUR', title: '30% OFF (4–7 PM)', type: 'Percent', expiry: '2026-01-15', minOrder: 199, badge: 'Time' },
];

export default function RewardsCoupons() {
    const [view, setView] = useState('rewards');
    const [user] = useState(sampleUser);
    const [applied, setApplied] = useState(null);
    const [enteredCode, setEnteredCode] = useState('');

    const progressPercent = Math.min(100, Math.round((user.points / 2000) * 100));
    const nextReward = rewardsCatalog.find(r => r.cost > user.points) || rewardsCatalog[rewardsCatalog.length - 1];
    const pointsToNext = Math.max(0, nextReward.cost - user.points);

    function redeemReward(reward) {
        if (user.points >= reward.cost) {
            alert(`Congrats! You redeemed ${reward.title}. (Demo)`);
        } else {
            alert(`Need ${reward.cost - user.points} more points to redeem ${reward.title}`);
        }
    }

    function applyCode(code) {
        const found = couponsList.find(c => c.id.toLowerCase() === code.toLowerCase());
        if (found) {
            setApplied(found);
            alert(`${found.title} applied! (Demo)`);
        } else {
            alert('Invalid code');
            setApplied(null);
        }
    }

    return (
        <div className="rewards-container">
            <main className="rewards-main">
                <div className="tab-bar">
                    <button
                        className={`tab ${view === 'rewards' ? 'active' : ''}`}
                        onClick={() => setView('rewards')}
                    >
                        My Rewards
                    </button>
                    <button
                        className={`tab ${view === 'coupons' ? 'active' : ''}`}
                        onClick={() => setView('coupons')}
                    >
                        Coupons
                    </button>
                </div>

                {view === 'rewards' ? (
                    <section className="rewards-page">
                        <div className="user-profile">
                            <div className="user-header">
                                <h2>{user.name}</h2>
                                <div className="tier-badge">{user.tier}</div>
                            </div>
                            <div className="points-display">
                                <div className="points-large">{user.points}</div>
                                <div className="points-label">Total Points</div>
                            </div>
                            <div className="progress-section">
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
                                </div>
                                <div className="progress-text">
                                    {pointsToNext} points to {nextReward.title}
                                </div>
                            </div>
                        </div>

                        <div className="rewards-section">
                            <h3>Available Rewards</h3>
                            <div className="rewards-grid">
                                {rewardsCatalog.map(reward => (
                                    <div key={reward.id} className="reward-card">
                                        <div className="reward-cost">{reward.cost} pts</div>
                                        <div className="reward-title">{reward.title}</div>
                                        <div className="reward-desc">{reward.desc}</div>
                                        <button
                                            className="btn"
                                            onClick={() => redeemReward(reward)}
                                            disabled={user.points < reward.cost}
                                        >
                                            Redeem
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="spin-section">
                            <h4>Lucky Spin (Demo)</h4>
                            <div className="spin-wrap">
                                <div className="wheel">🎡</div>
                                <button className="btn outline">Spin</button>
                            </div>
                        </div>

                        <div className="history">
                            <h4>Rewards History</h4>
                            <ul>
                                <li>Redeemed: Free Fries — 250 pts — <span className="muted">2 weeks ago</span></li>
                                <li>Earned: Order #1234 — 120 pts — <span className="muted">3 weeks ago</span></li>
                            </ul>
                        </div>
                    </section>
                ) : (
                    <section className="coupons-page">
                        <div className="coupons-top">
                            <div className="coupon-hero">
                                <h2>Available Coupons</h2>
                                <p>Choose a deal that makes your cravings happy.</p>
                            </div>
                            <div className="coupon-actions">
                                <input
                                    className="code-input"
                                    placeholder="Enter coupon code"
                                    value={enteredCode}
                                    onChange={e => setEnteredCode(e.target.value)}
                                />
                                <button className="btn" onClick={() => applyCode(enteredCode)}>Apply</button>
                                {applied && <div className="applied-tag">Applied: {applied.id}</div>}
                            </div>
                        </div>

                        <div className="coupons-grid">
                            {couponsList.map(c => (
                                <div key={c.id} className="coupon-card">
                                    <div className="coupon-left">
                                        <div className="badge">{c.badge}</div>
                                        <div className="title">{c.title}</div>
                                        <div className="meta">Code: <strong>{c.id}</strong> • Min order ₹{c.minOrder}</div>
                                    </div>
                                    <div className="coupon-right">
                                        <div className="expiry">Expires: {c.expiry}</div>
                                        <button
                                            className="btn"
                                            onClick={() => { setApplied(c); alert(`${c.title} applied! (Demo)`); }}
                                        >
                                            Use
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="recommended">
                            <h4>Recommended For You</h4>
                            <div className="rec-list">
                                <div className="rec-card">Because you like wings — try <strong>SPICY25</strong></div>
                                <div className="rec-card">Weekend bundle — save 20% with <strong>WEEKEND20</strong></div>
                            </div>
                        </div>

                        <div className="history muted">
                            <h4>Coupon History</h4>
                            <ul>
                                <li>Applied: SPICY25 — Used on order #1299 — <span>1 month ago</span></li>
                            </ul>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}