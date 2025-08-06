"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Discover from "@/components/discover";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Navbar from "@/components/navbar";
import Vision from "@/components/vision";
import EnterAnimation from "@/components/enter";

export default function Home() {
    const [entered, setEntered] = useState(false);
    const [showMain, setShowMain] = useState(false);

    const handleEnter = () => {
        setEntered(true);

        // Delay showing the main content until zoom-out is done
        setTimeout(() => {
            setShowMain(true);
        }, 1200); // Matches animation duration
    };

    return (
        <>
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
                            {/* Main content */}
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
        </>
    );
}
