"use client";
import React, {useEffect, useRef, useState} from "react";
import {motion, AnimatePresence, useMotionValue, useSpring} from "motion/react";

import Discover from "@/components/discover";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Navbar from "@/components/navbar";
import Vision from "@/components/vision";
import EnterAnimation from "@/components/enter";
import Cursor from "@/components/ui/cursor";

const DEFAULT_BORDER = "border-white/30";
const DEFAULT_BG = "bg-white";

export default function Home() {
    const [entered, setEntered] = useState(false);
    const [showMain, setShowMain] = useState(false);

    const [dotColor, setDotColor] = useState(DEFAULT_BG);
    const [borderColor, setBorderColor] = useState(DEFAULT_BORDER);

    const [motionEnabled, setMotionEnabled] = useState(true);
    const isScrolling = useRef(false);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {damping: 15, stiffness: 100});
    const springY = useSpring(y, {damping: 15, stiffness: 100});

    const viewBtnX = useSpring(x, {damping: 20, stiffness: 80});
    const viewBtnY = useSpring(y, {damping: 20, stiffness: 80});

    const containerRef = useRef<HTMLDivElement>(null);
    const lastClientX = useRef(0);
    const lastClientY = useRef(0);

    const updateCursor = (clientX: number, clientY: number, animate: boolean) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        x.set(mouseX);
        y.set(mouseY);

        setMotionEnabled(animate);

        const el = document.elementFromPoint(clientX, clientY);
        const section = el?.closest("section");

        if (section) {
            setDotColor(section.getAttribute("data-dot") || DEFAULT_BG);
            setBorderColor(section.getAttribute("data-border") || DEFAULT_BORDER);
        } else {
            setDotColor(DEFAULT_BG);
            setBorderColor(DEFAULT_BORDER);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            lastClientX.current = e.clientX;
            lastClientY.current = e.clientY;
            isScrolling.current = false;
            updateCursor(e.clientX, e.clientY, true);
        };

        const handleScroll = () => {
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

            isScrolling.current = true;

            // Update position with animation off
            updateCursor(lastClientX.current, lastClientY.current, false);

            // Reset after small delay (wait for scroll to stop)
            scrollTimeout.current = setTimeout(() => {
                isScrolling.current = false;
            }, 100); // tweak this for smoothness
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cursorX = motionEnabled ? springX : x;
    const cursorY = motionEnabled ? springY : y;
    const btnX = motionEnabled ? viewBtnX : x;
    const btnY = motionEnabled ? viewBtnY : y;

    const handleEnter = () => {
        setEntered(true);
        setTimeout(() => {
            setShowMain(true);
        }, 1200);
    };

    return (
        <main ref={containerRef} className="relative">
            {!isScrolling.current && (
                <Cursor springX={cursorX} springY={cursorY} viewBtnX={btnX} viewBtnY={btnY} dotColor={dotColor} borderColor={borderColor} />
            )}

            <AnimatePresence>
                {!entered ? (
                    <motion.div
                        key="intro"
                        className="fixed gradient-background inset-0 z-50 bg-black flex items-center justify-center text-white"
                        initial={{scale: 1, opacity: 1}}
                        animate={{scale: 1}}
                        exit={{scale: 1.2, opacity: 0}}
                        transition={{duration: 1.2, ease: "easeInOut"}}
                    >
                        <EnterAnimation handleEnter={handleEnter} />
                    </motion.div>
                ) : (
                    showMain && (
                        <motion.div
                            key="main"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 0.3, ease: "easeInOut"}}
                        >
                            <Navbar />
                            <Hero />
                            <Vision />
                            <Info />
                            <Discover />
                            <Footer />
                        </motion.div>
                    )
                )}
            </AnimatePresence>
        </main>
    );
}
