"use client";
import React, {useRef, useState} from "react";
import {motion, AnimatePresence, useScroll, useMotionValueEvent} from "motion/react";
import Circles from "./ui/circles";
import Spiral from "./ui/spiral";

const sections = [
    {
        title: (
            <>
                Now is the time to restore <br /> balance and harmony
            </>
        ),
        subtitle: "Beyond linear treatment",
        Visual: Circles,
    },
    {
        title: (
            <>
                Before we start, let us understand <br /> your inner needs
            </>
        ),
        subtitle: "Reconnecting with nature",
        Visual: Spiral,
    },
];

export default function Info() {
    const containerRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // delay logic here
        if (latest < 0.55) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(1);
        }
    });

    const {title, subtitle, Visual} = sections[currentIndex];

    return (
        <div ref={containerRef} className="relative h-[300vh] gradient-background">
            <div className="sticky top-0 h-screen text-white">
                <div className="relative z-20 h-full flex items-end padding-x">
                    {/* === Right-side visuals === */}
                    <div className="h-full flex items-center justify-center absolute top-0 right-0 padding-x">
                        <Visual />
                    </div>
                    <motion.div className="py-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -30}}
                                transition={{duration: 0.6, ease: "easeInOut"}}
                            >
                                <motion.h3 initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} className="text-2xl">
                                    {title}
                                </motion.h3>
                                <div className="flex items-center gap-2 font-neosans uppercase tracking-widest mt-8 text-xs">
                                    <span className="size-2 bg-emerald-300 rounded-full"></span>
                                    <span>{subtitle}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
