"use client";
import React, {useState} from "react";
import {motion} from "motion/react";

type ButtonVariant = "bg" | "outline";

interface ButtonProps {
    variant?: ButtonVariant;
    children?: React.ReactNode;
    className?: string;
    dotColor?: string;
}

export default function Button({variant = "bg", children = "invest with us", className = "", dotColor = "bg-green-400", ...props}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const variantStyles = {
        bg: "bg-gradient-to-r from-[#314097] to-[#5061BE] text-white",
        outline: "bg-transparent text-white border border-white/30",
    };

    return (
        <motion.button
            className={`relative  overflow-hidden ${variantStyles[variant]} font-neosans rounded-3xl flex items-center h-12 text-sm  px-7 gap-3 ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            {...props}
        >
            <motion.div
                className={`size-2.5 mb-0.5 ${dotColor} rounded-full`}
                animate={{
                    x: isHovered ? 140 : 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: isHovered ? 0 : 0.2,
                }}
            />

            <motion.span
                className="block uppercase leading-none tracking-widest"
                animate={{
                    x: isHovered ? -20 : 0,
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{
                    x: {
                        duration: 0.3,
                        ease: "easeOut",
                        delay: isHovered ? 0.4 : 0.6,
                    },
                    opacity: {
                        duration: 0.1,
                        ease: "easeOut",
                        delay: isHovered ? 0 : 0.6,
                    },
                }}
            >
                {children}
            </motion.span>

            <motion.span
                className="absolute inset-0  flex leading-none text-sm items-center justify-center uppercase  tracking-widest"
                animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? -8 : 20,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: isHovered ? 0.4 : 0,
                }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
}
