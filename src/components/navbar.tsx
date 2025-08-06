"use client";

import {useEffect, useRef, useState} from "react";
import Menu from "./ui/menu";
import Image from "next/image";

export default function Navbar() {
    const [navbarTheme, setNavbarTheme] = useState({
        textColor: "text-white",
        buttonBorder: "border-white/60",
        buttonBg: "bg-white/60",
        bgColor: "bg-transparent",
        borderColor: "border-white/60",
        logo: "invert-100",
    });

    const lastThemeRef = useRef(navbarTheme);

    useEffect(() => {
        let ticking = false;

        const updateNavbarTheme = () => {
            const sections = document.querySelectorAll("[data-navbar-theme]");
            let activeTheme = {
                textColor: "text-white",
                buttonBorder: "border-white/60",
                buttonBg: "bg-white/60",
                bgColor: "bg-white",
                borderColor: "border-white/60",
                logo: "invert-100",
            };

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const viewportTrigger = 100;

                if (rect.top <= viewportTrigger && rect.bottom >= viewportTrigger) {
                    activeTheme = {
                        textColor: section.getAttribute("data-text-color") || "text-white",
                        buttonBorder: section.getAttribute("data-button-border") || "border-white/50",
                        buttonBg: section.getAttribute("data-button-bg") || "bg-white/50",
                        bgColor: section.getAttribute("data-bg-color") || "bg-white",
                        borderColor: section.getAttribute("data-border-color") || "border-white/20",
                        logo: section.getAttribute("data-theme-logo") || "invert-100",
                    };
                }
            });

            // Only update state if theme has changed
            if (JSON.stringify(activeTheme) !== JSON.stringify(lastThemeRef.current)) {
                setNavbarTheme(activeTheme);
                lastThemeRef.current = activeTheme;
            }
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateNavbarTheme();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        updateNavbarTheme();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 flex justify-between py-6 padding-x transition-all duration-500 ${navbarTheme.textColor}`}>
            <Image src="/logo-black.png" alt="logo" width={40} height={40} className={`size-12 ${navbarTheme.logo} rounded-full object-cover`} />

            <Menu navbarTheme={navbarTheme} />

            {/* floating button */}
            <div className="fixed right-0 bottom-10 padding-x z-30">
                <div
                    className={`size-15 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-500 ${navbarTheme.buttonBorder}`}
                >
                    <span className={`inline-block h-px w-4 rounded-full transition-all duration-300 ${navbarTheme.buttonBg}`}></span>
                </div>
            </div>
        </header>
    );
}
