"use client";

import {useEffect, useRef} from "react";
import Lenis from "lenis";

declare global {
    interface Window {
        __lenis?: Lenis;
        stopLenisScroll?: () => void;
        startLenisScroll?: () => void;
    }
}

export default function LenisWrapper({children}: {children: React.ReactNode}) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenisRef.current = lenis;
        window.__lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        window.stopLenisScroll = () => {
            lenisRef.current?.stop();
        };
        window.startLenisScroll = () => {
            lenisRef.current?.start();
        };

        return () => {
            delete window.stopLenisScroll;
            delete window.startLenisScroll;
        };
    }, []);

    return <>{children}</>;
}
