"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import {Autoplay, EffectCoverflow} from "swiper/modules";

const question = [
    "Have you ever felt a deep sense of connection to a place?",
    "How do you balance your personal ambitions with maintaining relationships?",
    "What helps you come to terms with the realization that some aspects of yourself may never change?",
    "In what ways do you cope with regrets about the past?",
    "Can you recall a moment of peace during chaos? What contributed to that sense of calm?",
    "How do you balance your inner desires with the pressure you face from the outside world?",
];

export default function App() {
    return (
        <section data-dot="bg-black/50" data-border="border-black/30">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1.4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                coverflowEffect={{
                    depth: 480,
                    slideShadows: false,
                }}
                autoplay={true}
                speed={1000}
                modules={[EffectCoverflow, Autoplay]}
                className=" max-w-screen-xl mt-20 py-20 mx-auto"
            >
                {question.map((_, index) => (
                    <SwiperSlide key={index} className="">
                        <div className=" px-6 py-4 text-lg text-blue-900 flex text-left items-center gap-3 font-medium max-w-md mx-auto rounded-full border border-black/20 ">
                            <svg viewBox="0 0 100 50" className="size-20 " xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10,25 Q30,15 50,25 Q70,35 90,25"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className={`sine-wave-animate`}
                                />
                            </svg>
                            {_}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
