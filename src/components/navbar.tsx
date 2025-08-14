"use client";
import {useEffect, useRef, useState} from "react";
import Menu from "./ui/menu";
import Image from "next/image";
import Link from "next/link";

interface NavbarTheme {
    textColor: string;
    buttonBorder: string;
    buttonBg: string;
    bgColor: string;
    borderColor: string;
    logo: string;
}

// 👇 Add this so TypeScript doesn't scream at window.audioInstance
declare global {
    interface Window {
        audioInstance?: HTMLAudioElement;
    }
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

    // 🧠 Handle navbar theme switch
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

    // ✅ Setup persistent global audio on first interaction
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!audioRef.current && typeof window !== "undefined") {
                // Use existing audio instance if available
                if (!window.audioInstance) {
                    window.audioInstance = new Audio("/music.mp3");
                    window.audioInstance.loop = true;
                    window.audioInstance.volume = 0.5;
                }
                audioRef.current = window.audioInstance;

                // Try playing
                audioRef.current
                    .play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((err) => {
                        console.warn("Autoplay blocked by browser:", err);
                    });
            }

            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
        };

        window.addEventListener("click", handleFirstInteraction);
        window.addEventListener("scroll", handleFirstInteraction);

        return () => {
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
        };
    }, []);

    // ✅ Manual toggle function
    const toggleMusic = (): void => {
        if (!audioRef.current && typeof window !== "undefined") {
            if (!window.audioInstance) {
                window.audioInstance = new Audio("/music.mp3");
                window.audioInstance.loop = true;
                window.audioInstance.volume = 0.5;
            }
            audioRef.current = window.audioInstance;
        }

        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error: Error) => {
                    console.error("Error playing audio:", error);
                });
        }
    };

    return (
        <>
            <header className={`fixed inset-x-0 top-0 z-50 flex justify-between py-6 padding-x transition-all duration-500 ${navbarTheme.textColor}`}>
                <Link href="/">
                    <Image
                        src="/logo-black.png"
                        alt="logo"
                        width={48}
                        height={48}
                        className={` ${navbarTheme.logo} rounded-full  object-cover`}
                    />
                </Link>

                <Menu navbarTheme={navbarTheme} />

                {/* 🎵 Floating Music Toggle Button */}
                <div className="fixed right-0 bottom-10 padding-x z-30">
                    <div
                        onClick={toggleMusic}
                        className={`size-15 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 ${navbarTheme.buttonBorder}`}
                        title={isPlaying ? "Pause Music" : "Play Music"}
                    >
                        {isPlaying ? (
                            <svg viewBox="0 0 100 50" className="size-6" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10,25 Q30,15 50,25 Q70,35 90,25"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="sine-wave-animate"
                                />
                            </svg>
                        ) : (
                            <span className={`inline-block h-px w-4 rounded-full transition-all duration-300 ${navbarTheme.buttonBg}`} />
                        )}
                    </div>
                </div>
            </header>
        </>
    );
}
