import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import RewardsCoupons from "./components/RewardsCoupons";
import Navbar from "./components/Navbar";
import GiftCards from "./components/GiftCard";
import MenuPage from "./components/MenuPage";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import "./components/IntroAnimation.css";

function App() {
  return (
    <Router>
      {/* Intro animation always on top */}
      <IntroAnimation />

      {/* Main site UI */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/rewards-coupons" element={<RewardsCoupons />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
