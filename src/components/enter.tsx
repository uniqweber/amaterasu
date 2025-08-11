"use client";
import React, {useRef, useEffect} from "react";
import {motion, Variants, useInView, useAnimation} from "motion/react";

const EnterAnimation = ({handleEnter}:{handleEnter: () => void}) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: false});
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const circleVariants: Variants = {
        hidden: {
            scale: 0,
            opacity: 0,
            rotate: 0,
        },
        visible: (index: number) => ({
            scale: 1,
            opacity: 0.6,
            rotate: 360,
            transition: {
                delay: index * 0.1,
                duration: 2,
                ease: "easeOut",
            },
        }),
    };

    const textVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.5,
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    const generateCirclePositions = () => {
        const positions = [];
        const radius = 210;
        for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI * 2) / 8;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            positions.push({x, y, size: 400});
        }
        positions.push({x: 0, y: 0, size: 400});
        return positions;
    };

    const circlePositions = generateCirclePositions();

    return (
        <div ref={ref} className="relative scale-85 md:scale-100">
            <svg width="600" height="600" viewBox="-350 -350 700 700" className="w-full h-full overflow-visible">
                {circlePositions.map((circle, index) => {
                    const isCenter = index === circlePositions.length - 1;
                    return (
                        <motion.circle
                            key={index}
                            cx={circle.x}
                            cy={circle.y}
                            r={circle.size / 2.7}
                            fill="none"
                            stroke={isCenter ? "white" : "rgba(255, 255, 255, 0.4)"}
                            strokeWidth={isCenter ? 2 : 1}
                            custom={index}
                            variants={circleVariants}
                            initial="hidden"
                            animate={controls}
                        />
                    );
                })}
            </svg>

            <motion.button
                className="absolute uppercase text-extrasmall font-neosans inset-0 flex items-center justify-center"
                variants={textVariants}
                initial="hidden"
                animate={controls}
                onClick={handleEnter}
                style={{cursor: "pointer"}}
            >
                Click To Enter
            </motion.button>
        </div>
    );
};

export default EnterAnimation;
