import "./GiftCard.css";

export default function GiftCards() {
    return (
        <div className="gift-wrapper">
            <header className="gift-header">
                <h1 className="title">MFC Gift Cards</h1>
                <p className="subtitle">Spread the flavour, share the love.</p>
            </header>

            <section className="gift-grid">
                <div className="gift-card">
                    <img
                        src='../../public/images/kfc_red_card.png'
                        alt="MFC Gift Card"
                    />
                    <h3>Classic Red Card</h3>
                    <p>Perfect for any occasion. Give the joy of crispy cravings.</p>
                    <button>Buy Now</button>
                </div>

                <div className="gift-card">
                    <img
                        src="../../public/images/bday.png"
                        alt="MFC Gift Card"
                    />
                    <h3>Birthday Special</h3>
                    <p>Make their day spicy with a tasty surprise.</p>
                    <button>Buy Now</button>
                </div>

                <div className="gift-card">
                    <img
                        src="../../public/images/festiveoffer.png"
                        alt="MFC Gift Card"
                    />
                    <h3>Festive Edition</h3>
                    <p>Celebrate the season with crunchy happiness.</p>
                    <button>Buy Now</button>
                </div>
            </section>

            <section className="steps">
                <h2>How It Works</h2>
                <div className="step-container">
                    <div className="step-box">
                        <span>1</span>
                        <p>Pick your favourite Gift Card</p>
                    </div>
                    <div className="step-box">
                        <span>2</span>
                        <p>Enter recipient details</p>
                    </div>
                    <div className="step-box">
                        <span>3</span>
                        <p>Send instantly via email</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
