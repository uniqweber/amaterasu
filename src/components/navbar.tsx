"use client";
import {useEffect, useRef, useState} from "react";
import Menu from "./ui/menu";
import Image from "next/image";

interface NavbarTheme {
    textColor: string;
    buttonBorder: string;
    buttonBg: string;
    bgColor: string;
    borderColor: string;
    logo: string;
}

export default function Navbar() {
    const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>({
        textColor: "text-white",
        buttonBorder: "border-white/60",
        buttonBg: "bg-white/60",
        bgColor: "bg-transparent",
        borderColor: "border-white/60",
        logo: "invert-100",
    });

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastThemeRef = useRef<NavbarTheme>(navbarTheme);

    useEffect(() => {
        let ticking = false;

        const updateNavbarTheme = (): void => {
            const sections = document.querySelectorAll<HTMLElement>("[data-navbar-theme]");
            let activeTheme: NavbarTheme = {
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

        const handleScroll = (): void => {
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

    // Music toggle function
    const toggleMusic = (): void => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/music.mp3");
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5; // Set volume to 50%
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch((error: Error) => {
                console.error("Error playing audio:", error);
            });
            setIsPlaying(true);
        }
    };

    // Cleanup audio on component unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 flex justify-between py-6 padding-x transition-all duration-500 ${navbarTheme.textColor}`}>
            <Image src="/logo-black.png" alt="logo" width={40} height={40} className={`size-12 ${navbarTheme.logo} rounded-full object-cover`} />

            <Menu navbarTheme={navbarTheme} />

            {/* floating button with music toggle */}
            <div className="fixed right-0 bottom-10 padding-x z-30">
                <div
                    onClick={toggleMusic}
                    className={`size-15 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 ${navbarTheme.buttonBorder}`}
                    title={isPlaying ? "Recording..." : "Play Music"}
                >
                    {isPlaying ? (
                        // Recording animation - animated bars
                        <div className="flex items-end justify-center gap-px">
                            <span
                                className={`w-0.5 bg-current rounded-full transition-all duration-300 ${navbarTheme.buttonBg} animate-pulse`}
                                style={{height: "8px", animationDelay: "0ms"}}
                            />
                            <span
                                className={`w-0.5 bg-current rounded-full transition-all duration-300 ${navbarTheme.buttonBg} animate-pulse`}
                                style={{height: "12px", animationDelay: "150ms"}}
                            />
                            <span
                                className={`w-0.5 bg-current rounded-full transition-all duration-300 ${navbarTheme.buttonBg} animate-pulse`}
                                style={{height: "6px", animationDelay: "300ms"}}
                            />
                            <span
                                className={`w-0.5 bg-current rounded-full transition-all duration-300 ${navbarTheme.buttonBg} animate-pulse`}
                                style={{height: "10px", animationDelay: "450ms"}}
                            />
                            <span
                                className={`w-0.5 bg-current rounded-full transition-all duration-300 ${navbarTheme.buttonBg} animate-pulse`}
                                style={{height: "4px", animationDelay: "600ms"}}
                            />
                        </div>
                    ) : (
                        // Default line (same as before)
                        <span className={`inline-block h-px w-4 rounded-full transition-all duration-300 ${navbarTheme.buttonBg}`} />
                    )}
                </div>
            </div>
        </header>
    );
}
