// IntroAnimation.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function IntroAnimation() {
    const containerRef = useRef(null);

    useEffect(() => {
        const letters = gsap.utils.toArray(".intro-letter");

        // Step 1: Random scattered positions
        gsap.set(letters, {
            opacity: 0,
            y: () => gsap.utils.random(-200, 200),
            x: () => gsap.utils.random(-200, 200),
            rotate: () => gsap.utils.random(-90, 90),
        });

        // Step 2: Fade + move to center to form "KFC"
        gsap.to(letters, {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            stagger: 0.2,
            ease: "power3.out",
            duration: 1.2,
        });

        // Step 3: Blow-up highlight animation
        gsap.to(".intro-word", {
            scale: 1.1,
            duration: 0.6,
            delay: 1.4,
            ease: "power2.out",
        });

        gsap.to(".intro-word", {
            scale: 1,
            duration: 0.5,
            delay: 1.9,
            ease: "power3.inOut",
        });

        // Step 4: Fade out entire screen
        gsap.to(containerRef.current, {
            opacity: 0,
            delay: 2.5,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                containerRef.current.style.display = "none"; // remove from screen
            },
        });
    }, []);

    return (
        <div ref={containerRef} className="intro-screen">
            <div className="intro-word">
                <span className="intro-letter">M</span>
                <span className="intro-letter">F</span>
                <span className="intro-letter">C</span>
            </div>
        </div>
    );
}
