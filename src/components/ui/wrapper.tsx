"use client";

import {AnimatePresence, motion} from "framer-motion";
import {useState, useRef} from "react";
import Cursor from "@/components/ui/cursor";
import EnterAnimation from "@/components/enter";
import {useCursorTracker} from "@/hooks/useCursor";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function ClientWrapper({children}: Props) {
    const [entered, setEntered] = useState(false);
    const [showMain, setShowMain] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const {cursorX, cursorY, viewBtnX, viewBtnY, dotColor, borderColor, isScrolling} = useCursorTracker(containerRef);

    const handleEnter = () => {
        setEntered(true);
        setTimeout(() => {
            setShowMain(true);
        }, 1200);
    };

    return (
        <main ref={containerRef} className="relative">
            {!isScrolling && (
                <Cursor springX={cursorX} springY={cursorY} viewBtnX={viewBtnX} viewBtnY={viewBtnY} dotColor={dotColor} borderColor={borderColor} />
            )}

            <AnimatePresence>
                {!entered ? (
                    <motion.div
                        key="intro"
                        className="fixed inset-0 z-50 gradient-background flex items-center justify-center text-white"
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
                            {children}
                        </motion.div>
                    )
                )}
            </AnimatePresence>
        </main>
    );
}
