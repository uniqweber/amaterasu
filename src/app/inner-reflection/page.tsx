"use client";

import Navbar from "@/components/navbar";
import Question from "@/components/question";
import {guidingPrinciples} from "@/constants/principles";
import {motion} from "motion/react";

export default function Page() {
    return (
        <div data-navbar-theme="dark" className=" gradient-background overflow-hidden padding-x text-white relative ">
            <Navbar />
            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}} className="md:w-3/5 md:ml-auto pt-60 pb-40 md:pl-40">
                <h5 className="text-5xl lg:text-7xl 2xl:text-9xl font-sans font-light">
                    Inner <br /> Reflection
                </h5>
                <p className="md:text-lg max-w-sm mt-10 tracking-wider">
                    Through the seamless integration of our 6 guiding principles, we set in motion our relentless culture, focus, and ethics.
                </p>
            </motion.div>
            <section className="relative flex ">
                <div className="w-1/2 hidden sticky top-0 h-screen md:flex items-center justify-center">
                    <h1 className="text-[35vw]  bg-gradient-to-b from-cyan-400 to-white text-transparent bg-clip-text">6</h1>
                </div>
                <div className="md:w-1/2 pl-10 md:pl-20 2xl:pl-40 border-l border-white/15 ">
                    <div className="flex flex-col gap-20 md:gap-40 ">
                        {guidingPrinciples.map((block, index) => (
                            <ScrollBlock key={index} title={block.title} text={block.text} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}} className="py-20">
                <Question />
            </motion.div>
        </div>
    );
}

function ScrollBlock({title, text, index}: {title: string; text: string; index: number}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: index * 0.1}}
            viewport={{once: true}}
            className="space-y-4"
        >
            <h2 className="uppercase text-extrasmall flex items-center gap-3  font-semibold font-neosans">
                <span className="inline-block size-2 bg-emerald-300 rounded-full"></span> {title}
            </h2>
            <p className="text-base tracking-wide text-white/70 max-w-xl">{text}</p>
        </motion.div>
    );
}
