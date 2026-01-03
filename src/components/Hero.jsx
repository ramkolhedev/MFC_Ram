// ✅ Corrected Hero.jsx

import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

// ===== MENU DATA =====
const MENU_DATA = [
  {
    name: "Smoky Red Wings",
    shortName: "WINGS",
    subtext: "Fiery. Juicy. Perfectly grilled.",
    description:
      "Dig into MFC’s Smoky Red Wings — flame-grilled to smoky perfection, coated with bold Indian spices, and bursting with juicy flavor in every bite.",
    image: "./images/chicken.png",
    imageWidth: "600px",
    gradient: "linear-gradient(to bottom, #541212 70%, #6F1818 55%)",
    backgrounds: [
      { src: "./images/c3.png", width: "400px", top: "-100px", left: "-100px" },
      { src: "./images/c2.png", width: "400px", top: "-14%", left: "82%" },
      { src: "./images/c1.png", width: "400px", top: "-180px", left: "40%" },
    ],
  },
  {
    name: "Crispy Popcorn",
    shortName: "POPPY",
    subtext: "Crunchy. Juicy. Irresistible.",
    description:
      "Bite-sized bursts of crispy perfection! MFC’s Chicken Popcorn delivers that iconic crunch with tender, juicy chicken in every bite.",
    image: "./images/popcorn.png",
    imageWidth: "530px",
    gradient: "linear-gradient(to bottom, #B5631F 70%, #D47A26 55%)",
    backgrounds: [
      { src: "./images/p1.png", width: "400px", top: "-2%", left: "-8%" },
      { src: "./images/p2.png", width: "400px", top: "-4%", left: "80%" },
      { src: "./images/p3.png", width: "400px", top: "-8%", left: "40%" },
    ],
  },
  {
    name: "Smoky Burger",
    shortName: "BURGY",
    subtext: "Bold. Juicy. Irresistible.",
    description:
      "Sink your teeth into the ultimate burger — flame-grilled, smoky, and stacked with juicy layers of flavor. Every bite is pure satisfaction.",
    image: "./images/burger.png",
    imageWidth: "560px",
    gradient: "linear-gradient(to bottom, #000000 70%, #1A1A1A 55%)",
    backgrounds: [
      { src: "./images/b1.png", width: "400px", top: "-150px", left: "1%" },
      { src: "./images/b2.png", width: "400px", top: "-15%", left: "43%" },
      { src: "./images/b3.png", width: "400px", top: "-9%", left: "75%" },
    ],
  },
  {
    name: "Chocolate Mud Cake",
    shortName: "CAKEY",
    subtext: "Rich. Gooey. Decadent.",
    description:
      "Dive into pure indulgence — a warm, gooey chocolate mud cake topped with rich cocoa bliss. Perfectly moist, deeply chocolatey, and impossible to stop at one bite.",
    image: "./images/choco.png",
    imageWidth: "660px",
    gradient: "linear-gradient(to bottom, #2B0A0A 70%, #4E1E1E 30%)",
    backgrounds: [
      { src: "./images/ch1.png", width: "400px", top: "-60px", left: "-7%" },
      { src: "./images/ch2.png", width: "400px", top: "-9%", left: "80%" },
      { src: "./images/ch3.png", width: "400px", top: "-10%", left: "40%" },
    ],
  },
];

const Hero = () => {
  const menu = useMemo(() => MENU_DATA, []);
  const [direction, setDirection] = useState(1);
  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(0);
  const drink = menu[current];

  // ✅ Next and Previous Slide Handlers
  const handleNext = useCallback(() => {
    setDirection(1);
    setPrev(current);
    setCurrent((prev) => (prev + 1) % menu.length);
  }, [current, menu.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setPrev(current);
    setCurrent((prev) => (prev - 1 + menu.length) % menu.length);
  }, [current, menu.length]);

  // ✅ Auto Scroll (Every 5 sec)
  useEffect(() => {
    const autoScroll = setInterval(handleNext, 5000);
    return () => clearInterval(autoScroll);
  }, [handleNext]);

  // ✅ Floating Animation for Backgrounds
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      document.querySelectorAll(".bg").forEach((el, i) => {
        el.style.transform = `translateY(${Math.sin(Date.now() / 800 + i) * 15}px)`;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ===== Gradient Transition ===== */}
      <div className="gradient-wrapper">
        <div className="hero-gradient" style={{ background: menu[prev].gradient }} />
        <motion.div
          key={menu[current].name + "-gradient"}
          className="hero-gradient"
          style={{ background: menu[current].gradient }}
          initial={{ x: direction === 1 ? "-100%" : "100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction === 1 ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Background Big Text ===== */}
      <AnimatePresence mode="wait">
        <motion.div
          key={drink.shortName}
          className="drink-bg-word"
          initial={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {drink.shortName}
        </motion.div>
      </AnimatePresence>

      {/* ===== Main Content ===== */}
      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={drink.name + "-heading"}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="drink-title gradient-text">{drink.name}</h1>
            <h3 className="drink-subtext">{drink.subtext}</h3>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={drink.name + "-desc"}
            className="hero-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {drink.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ===== Product Image ===== */}
      <AnimatePresence mode="wait">
        <motion.img
          key={drink.name + "-img"}
          src={drink.image}
          alt={drink.name}
          className="hero-img"
          initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: drink.imageWidth }}
          whileHover={{ rotate: 2, scale: 1.03 }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* ===== Floating Backgrounds ===== */}
      <AnimatePresence mode="wait">
        {drink.backgrounds.map((bg, index) => (
          <motion.img
            key={drink.name + "-bg-" + index}
            src={bg.src}
            alt=""
            className={`bg bg${index}`}
            style={{
              width: bg.width,
              position: "absolute",
              top: bg.top,
              left: bg.left,
              opacity: 0.4,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </AnimatePresence>

      {/* ===== Arrows ===== */}
      <div className="arrows">
        <button className="arrow left" onClick={handlePrev}>
          ←
        </button>
        <button className="arrow right" onClick={handleNext}>
          →
        </button>
      </div>

      {/* ===== Scroll Indicator ===== */}
    
    </motion.div>
  );
};

export default Hero;
