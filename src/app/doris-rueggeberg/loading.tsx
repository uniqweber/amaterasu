"use client";
import {motion} from "motion/react";

export default function loading() {
    return (
        <div className="fixed background-gradient text-white h-screen w-screen flex items-center justify-center">
            <div className="flex items-center justify-center">
                <motion.div className="h-5 w-5 bg-white rounded-full">
                    <motion.div
                        className="h-5 w-5 bg-white rounded-full"
                        animate={{
                            scale: [0, 1, 0],
                            borderRadius: ["20%", "50%", "20%"],
                            backgroundColor: ["#fff", "#eee", "#fff"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
