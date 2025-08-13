"use client";
import {motion} from "motion/react";

export default function Loader() {
    return (
        <div className="gradient-background text-white h-screen w-screen flex items-center justify-center">
            <div className="flex gap-4 items-center justify-center">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="h-4 w-4 rounded-full bg-white"
                        initial={{scale: 0}}
                        animate={{scale: [0.5, 1.5, 0.5]}}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
