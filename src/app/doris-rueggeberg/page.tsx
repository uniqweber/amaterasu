"use client";
import Navbar from "@/components/navbar";
import InfiniteReviewSection from "@/components/question";
import {motion} from "motion/react";
import Image from "next/image";

export default function Page() {
    return (
        <section data-dot="bg-black/50" data-border="border-black/30" className="bg-gradient-to-l overflow-hidden from-cyan-100 pb-40 to-white">
            <Navbar />
            <section
                data-navbar-theme="light"
                data-text-color="text-blue-900"
                data-button-bg="bg-blue-900"
                data-button-border="border-blue-900/50"
                data-bg-color="bg-blue-900"
                data-border-color="border-black/20"
                data-theme-logo="invert-0"
                data-dot="bg-black/50"
                data-border="border-black/30"
            >
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    className="flex items-center justify-center mt-10 md:mt-0"
                >
                    <Image src="/logo-next.png" alt="dr" width={400} height={500} className="invert-75" />
                </motion.div>
            </section>
            <section
                data-navbar-theme="light"
                data-text-color="text-blue-900"
                data-button-bg="bg-blue-900"
                data-button-border="border-blue-900/50"
                data-bg-color="bg-blue-900"
                data-border-color="border-black/20"
                data-theme-logo="invert-0"
                data-dot="bg-black/50"
                data-border="border-black/30"
                className="relative md:w-1/2 ml-auto "
            >
                <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}} className=" text-[#1b2978] text-lg font-medium  mx-auto px-10 pb-30 border-black/20 -ml-[7px] mt-10 md:-mt-[31px] md:border-l-2 ">
                    <h4 className="font-neosans flex mb-10 items-center gap-2 text-extrasmall uppercase text-blue-900 ">
                        <span className="inline-block size-1.5 bg-emerald-300 rounded-full"></span>
                        Doris Rüggeberg
                    </h4>
                    Doris Rüggeberg guides leaders, creatives, and decision-makers from diverse fields ranging from business to the entrepreneurs
                    towards clarity, efficiency, and inner alignment. <br /> <br />
                    Her approach combines the interplay between psychological counseling, systemic constellation work, and mental-strategic techniques
                    with an expanded, cosmically informed perspective. <br /> <br />
                    This work is not solely about resolving immediate challenges, but about consciously shaping spheres of action and living that
                    align with individual potential, strategic objectives, and broader temporal cycles.
                </motion.div>
            </section>
            <section
                data-navbar-theme="light"
                data-text-color="text-blue-900"
                data-button-bg="bg-blue-900"
                data-button-border="border-blue-900/50"
                data-bg-color="bg-blue-900"
                data-border-color="border-black/20"
                data-theme-logo="invert-0"
                data-dot="bg-black/50"
                data-border="border-black/30"
                className="text-center padding-x"
            >
                <motion.h2
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    className="py-20 text-[#1B2978] text-5xl lg:text-7xl "
                >
                    Transformative <br />
                    Clarity
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    className="max-w-lg mx-auto text-[#1b2978] text-lg font-medium"
                >
                    With precision and a high degree of empathy, she swiftly identifies the essence of any matter, creating the conditions for
                    profound transformation.
                </motion.p>
                <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}}>
                    <InfiniteReviewSection />
                </motion.div>
            </section>
        </section>
    );
}
