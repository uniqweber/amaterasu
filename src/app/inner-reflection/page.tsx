"use client";

import Navbar from "@/components/navbar";
import Question from "@/components/question";
import {motion} from "motion/react";

export default function Page() {
    return (
        <div data-navbar-theme="dark" className=" gradient-background overflow-hidden padding-x text-white relative ">
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen py-20">
                <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}}>
                    <h5 className="text-5xl lg:text-7xl  ">
                        Inner <br /> Reflection
                    </h5>
                    <p className="md:text-lg max-w-sm mt-10 tracking-wider">
                        Through the seamless integration of our 6 guiding principles, we set in motion our relentless culture, focus, and ethics.
                    </p>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}} className="pt-10">
                    <Question />
                </motion.div>
            </div>
        </div>
    );
}
