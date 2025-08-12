"use client";
import React, {useState} from "react";
import {motion} from "motion/react";

type ButtonVariant = "bg" | "outline";

interface ButtonProps {
    variant?: ButtonVariant;
    children?: React.ReactNode;
    className?: string;
    dotColor?: string;
    xValue?: number;
    textValue?: number;
}

export default function Button({variant = "bg", children = "invest with us", className = "", dotColor = "bg-green-400", xValue=140, textValue=20, ...props}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);
    const variantStyles = {
        bg: "bg-gradient-to-l from-[#314097] to-[#5061BE] text-white",
        outline: "bg-transparent text-white border border-white/30",
    };

    return (
        <motion.button
            className={`relative  overflow-hidden ${variantStyles[variant]} font-neosans rounded-[22px] flex items-center h-12 text-extrasmall   px-7 gap-3 ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            {...props}
        >
            <motion.div
                className={`size-1.5 animate-pulse  ${dotColor} rounded-full`}
                animate={{
                    x: isHovered ? xValue : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                    delay: isHovered ? 0 : 0.2,
                }}
            />

            <motion.span
                className="block uppercase leading-none"
                animate={{
                    x: isHovered ? -textValue : 0,
                    opacity: isHovered ? 0 : 1,
                }}
                transition={{
                    x: {
                        duration: 0.2,
                        ease: "easeOut",
                        delay: isHovered ? 0.4 : 0.6,
                    },
                    opacity: {
                        duration: 0.2,
                        ease: "easeOut",
                        delay: isHovered ? 0 : 0.6,
                    },
                }}
            >
                {children}
            </motion.span>

            <motion.span
                className="absolute inset-0  flex leading-none text-extrasmall items-center justify-center uppercase  "
                animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? -8 : 20,
                }}
                transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    delay: isHovered ? 0.4 : 0,
                }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
}
