"use client";
import React, {useRef, useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const Spiral: React.FC = () => {
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

    return (
        <div ref={ref} className="relative w-full h-full">
            <svg width="600" height="600" viewBox="0 0 600 600" className="w-full h-full">
                <motion.path
                    d={generateSpiralPath(300, 300, 5, 50)}
                    stroke="rgba(255, 255, 255, 0.4)"
                    fill="none"
                    strokeWidth={1}
                    initial={{pathLength: 0}}
                    animate={controls}
                    variants={{
                        hidden: {pathLength: 0},
                        visible: {
                            pathLength: 1,
                            transition: {
                                duration: 1.5,
                                ease: "easeInOut",
                            },
                        },
                    }}
                />
            </svg>
        </div>
    );
};

export default Spiral;

// Generate an SVG spiral path (Archimedean)
function generateSpiralPath(cx: number, cy: number, turns: number, spacing: number): string {
    const points = [];
    const totalPoints = 1000;

    for (let i = 0; i < totalPoints; i++) {
        const angle = (i / totalPoints) * (Math.PI * 2) * turns;
        const radius = spacing * (i / totalPoints) * turns;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        points.push(`${x},${y}`);
    }

    return `M${points[0]} L${points.slice(1).join(" ")}`;
}
