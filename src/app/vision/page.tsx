"use client";
import Navbar from "@/components/navbar";
import {motion} from "motion/react";
import Image from "next/image";

export default function Page() {
    return (
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
            className="bg-gradient-to-l overflow-hidden from-cyan-100 to-white"
        >
            <Navbar />
            <div className="grid md:grid-cols-2 gap-10 lg:gap-0 py-10 items-center padding-x md:h-screen ">
                <section>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut"}}
                        className="flex items-center justify-center "
                    >
                        <Image src="/logo-next.png" alt="dr" width={400} height={400} className="invert-75 lg:w-[500px] lg:h-auto" />
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
                    className="relative "
                >
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1, ease: "easeOut"}}
                        className=" text-[#1b2978] text-lg font-medium "
                    >
                        <h4 className="font-neosans flex mb-10 items-center gap-2 text-extrasmall uppercase text-blue-900 ">
                            <span className="inline-block size-1.5 bg-emerald-300 rounded-full"></span>
                            Vision
                        </h4>
                        We translate complexity into actionable clarity, applying both analytical rigor and empathic understanding. Each consultation
                        is designed to resolve the current challenge while fortifying resilience for the future, reducing the personal and
                        professional costs of recurring patterns and ineffective strategies.
                    </motion.div>
                </section>
            </div>
        </section>
    );
}
