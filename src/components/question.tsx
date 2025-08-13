"use client";

import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {Autoplay, EffectCoverflow} from "swiper/modules";
import type {Swiper as SwiperInstance} from "swiper/types";
import { motion, useMotionValue, useSpring} from "motion/react";

const question: string[] = [
    "Have you ever felt a deep sense of connection to a place?",
    "How do you balance your personal ambitions with maintaining relationships?",
    "What helps you come to terms with the realization that some aspects of yourself may never change?",
    "In what ways do you cope with regrets about the past?",
    "Can you recall a moment of peace during chaos? What contributed to that sense of calm?",
    "How do you balance your inner desires with the pressure you face from the outside world?",
];



type HoverTarget = "left" | "right" | "active" | null;

export default function Question() {
    const swiperRef = useRef<SwiperInstance | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hoverTarget, setHoverTarget] = useState<HoverTarget>(null);
    const [isInside, setIsInside] = useState<boolean>(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, {stiffness: 150, damping: 20});
    const springY = useSpring(mouseY, {stiffness: 150, damping: 20});

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Get mouse position relative to container
            const bounds = container.getBoundingClientRect();
            mouseX.set(e.clientX - bounds.left);
            mouseY.set(e.clientY - bounds.top);
        };

        const handleEnter = () => setIsInside(true);
        const handleLeave = () => {
            setIsInside(false);
            setHoverTarget(null);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleEnter);
        container.addEventListener("mouseleave", handleLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleEnter);
            container.removeEventListener("mouseleave", handleLeave);
        };
    }, [mouseX, mouseY]);

    const handleSlideClick = (index: number) => {
        if (!swiperRef.current) return;
        if (index < activeIndex) {
            swiperRef.current.slidePrev();
        } else if (index > activeIndex) {
            swiperRef.current.slideNext();
        }
    };

    const handleHover = (index: number) => {
        if (index < activeIndex) setHoverTarget("left");
        else if (index > activeIndex) setHoverTarget("right");
        else setHoverTarget("active");
    };

    const resetHover = () => setHoverTarget(null);

    return (
        <section ref={containerRef} data-dot="bg-transparent" className="relative" style={{position: "relative", height: "100%"}}>
            {/* Cursor follower — absolute to section */}
            {isInside && (
                <motion.div
                    className="pointer-events-none hidden lg:block absolute z-50 text-white text-xl select-none -translate-1/2"
                    style={{
                        x: springX,
                        y: springY,
                    }}
                >
                    {hoverTarget == "left" ? (
                        <span>&larr;</span>
                    ) : hoverTarget == "right" ? (
                        <span>&rarr;</span>
                    ) : (
                        <span className="size-1.5 inline-block rounded-full bg-white"></span>
                    )}
                </motion.div>
            )}

            {/* Swiper carousel */}
            <Swiper
                loop={true} // 👈 THIS is the magic
                effect="coverflow"
                grabCursor
                centeredSlides
                breakpoints={{
                    640: {slidesPerView: 1.4},
                    768: {slidesPerView: 2},
                }}
                coverflowEffect={{
                    depth: 480,
                    slideShadows: false,
                }}
                autoplay={{delay: 3000}}
                speed={1000}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex); 
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="max-w-screen-xl my-20 py-20 mx-auto"
            >
                {question.map((q: string, index: number) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => handleSlideClick(index)}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={resetHover}
                            className="px-8 py-4 text-lg text-white text-left font-medium max-w-md mx-auto rounded-full border border-white/10 cursor-pointer transition-all duration-300 "
                        >
                            {q}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
