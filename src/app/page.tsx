"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Get viewport dimensions
            const {clientWidth, clientHeight} = document.documentElement;

            // Calculate mouse position as percentage from center (-50 to 50)
            const x = (e.clientX / clientWidth - 0.5) * 100;
            const y = (e.clientY / clientHeight - 0.5) * 100;

            setMousePosition({x, y});
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <div className=" bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-400 flex items-center justify-center h-screen overflow-hidden relative">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 transition-transform duration-100 ease-out overflow-hidden"
                style={{
                    transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
                }}
            >
                <Image
                    src="/hero-bg.png"
                    alt="Vercel Logo"
                    width={1500}
                    height={0}
                    className="w-auto absolute bottom-0 left-1/2 -translate-x-1/2 h-auto"
                />
            </div>
        </div>
    );
}
