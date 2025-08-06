"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {motion, useMotionValue, useSpring, useTransform} from "motion/react";
import Background from "./ui/background";
import Button from "./ui/button";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {stiffness: 100, damping: 20});
    const springY = useSpring(mouseY, {stiffness: 100, damping: 20});

    const translateX = useTransform(springX, [0, 1], [20, -20]);
    const translateY = useTransform(springY, [0, 1], [20, -20]);
    const scale = useTransform(mouseY, [0, 1], [1.015, 0.985]);

    const [hideScrollHint, setHideScrollHint] = useState(false);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouseMove = (e: MouseEvent) => {
            const {width, height, left, top} = hero.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            mouseX.set(x);
            mouseY.set(y);
        };

        hero.addEventListener("mousemove", handleMouseMove);
        return () => hero.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const handleScroll = () => {
            setHideScrollHint(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="hero" data-navbar-theme="dark" ref={heroRef} className="h-screen relative text-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Background color="#22d3ee" speed={2} scale={0.6} noiseIntensity={0} rotation={5.78} />
            </div>

            {/* Image with elegant motion */}
            <motion.div
                className="h-full w-1/2 mx-auto object-cover absolute z-10 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    x: translateX,
                    y: translateY,
                    scale: scale,
                }}
            >
                <Image src="/hero.png" alt="hero" width={0} height={0} sizes="200vw" className="h-[110vh] w-full object-cover" priority />
            </motion.div>

            {/* Foreground Text Content */}
            <div className="relative z-20 padding-x size-full flex items-center justify-center">
                <div className="w-full">
                    <div className="w-1/2">
                        <div className="flex items-center flex-col text-right">
                            <motion.div
                                whileInView={{y: 0}}
                                initial={{y: 100}}
                                transition={{duration: 1, ease: "easeOut"}}
                                className="space-y-2 text-[4.2vw] pointer-events-none w-full 2xl:text-[3.5vw] leading-none font-medium text-white"
                            >
                                <span className="block text-shadow-2xs">Empower your </span>
                                <span className="block text-shadow-2xs"> choices with</span>
                                <span className="block text-shadow-2xs">universal wisdom</span>
                            </motion.div>
                            <motion.div
                                whileInView={{y: 0}}
                                initial={{y: 100}}
                                transition={{duration: 1, ease: "easeOut"}}
                                className="w-full flex items-center justify-end mt-10"
                            >
                                <Button>Invest with us</Button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll-to-explore text */}
                <motion.div
                    className="absolute left-0 padding-x pointer-events-none bottom-10 uppercase text-sm flex items-center gap-2 font-semibold tracking-widest"
                    initial={{opacity: 1, y: 0}}
                    animate={hideScrollHint ? {opacity: 0, y: 20} : {opacity: 1, y: 0}}
                    transition={{duration: 0.4}}
                >
                    <span className="pt-0.5">Scroll To Explore</span> <span className="font-serif">&#8595;</span>
                </motion.div>

                {/* Tagline bottom right */}
                <motion.p
                    whileInView={{y: 0}}
                    initial={{y: 100}}
                    transition={{duration: 1, ease: "easeOut"}}
                    className="max-w-sm absolute padding-x pointer-events-none w-full right-0 bottom-40 pl-0 text-right text-xl"
                >
                    Bridging cycles and conscious decision - guiding you to act with clarity at the right moment in life
                </motion.p>
            </div>
        </div>
    );
}
