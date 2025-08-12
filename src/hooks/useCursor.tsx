"use client";

import {useLayoutEffect, useRef, useState} from "react";
import {useMotionValue, useSpring, MotionValue} from "framer-motion"; // use framer-motion not motion/react

const DEFAULT_BORDER = "border-white/30";
const DEFAULT_BG = "bg-white";

interface CursorTracker {
    cursorX: MotionValue<number>;
    cursorY: MotionValue<number>;
    viewBtnX: MotionValue<number>;
    viewBtnY: MotionValue<number>;
    dotColor: string;
    borderColor: string;
    isScrolling: boolean;
}

export function useCursorTracker(containerRef: React.RefObject<HTMLDivElement | null>): CursorTracker {
    const [dotColor, setDotColor] = useState(DEFAULT_BG);
    const [borderColor, setBorderColor] = useState(DEFAULT_BORDER);
    const [motionEnabled, setMotionEnabled] = useState(true);

    const isScrollingRef = useRef(false);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {damping: 15, stiffness: 100});
    const springY = useSpring(y, {damping: 15, stiffness: 100});

    const viewBtnX = useSpring(x, {damping: 20, stiffness: 80});
    const viewBtnY = useSpring(y, {damping: 20, stiffness: 80});

    const lastClientX = useRef(0);
    const lastClientY = useRef(0);

    const updateCursor = (clientX: number, clientY: number, animate: boolean) => {
        const container = containerRef.current ?? document.body; // 👈 fallback

        const rect = container.getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        x.set(mouseX);
        y.set(mouseY);

        setMotionEnabled(animate);

        const el = document.elementFromPoint(clientX, clientY);
        const section = el?.closest("section");

        if (section instanceof HTMLElement) {
            setDotColor(section.getAttribute("data-dot") || DEFAULT_BG);
            setBorderColor(section.getAttribute("data-border") || DEFAULT_BORDER);
        } else {
            setDotColor(DEFAULT_BG);
            setBorderColor(DEFAULT_BORDER);
        }
    };

    useLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            lastClientX.current = e.clientX;
            lastClientY.current = e.clientY;
            isScrollingRef.current = false;
            updateCursor(e.clientX, e.clientY, true);
        };

        const handleScroll = () => {
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

            isScrollingRef.current = true;
            updateCursor(lastClientX.current, lastClientY.current, false);

            scrollTimeout.current = setTimeout(() => {
                isScrollingRef.current = false;
            }, 100);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef.current]);

    return {
        cursorX: motionEnabled ? springX : x,
        cursorY: motionEnabled ? springY : y,
        viewBtnX: motionEnabled ? viewBtnX : x,
        viewBtnY: motionEnabled ? viewBtnY : y,
        dotColor,
        borderColor,
        isScrolling: isScrollingRef.current,
    };
}
