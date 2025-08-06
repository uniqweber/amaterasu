"use client";
import {motion} from "motion/react";
import Button from "./ui/button";

export default function Footer() {
    return (
        <div
            id="footer"
            data-navbar-theme="dark"
            data-button-theme="dark"
            className=" flex items-center gradient-background justify-center bg-white w-full  relative text-white"
        >
            <div className="relative overflow-hidden z-20 padding-x w-full min-h-screen flex items-center justify-center ">
                <div className="grid grid-cols-2  gap-40 pb-10  w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto">
                    <div className="">
                        <motion.div
                            whileInView={{y: 0}}
                            initial={{y: 50}}
                            transition={{duration: 1, ease: "easeOut"}}
                            className=" space-y-2 text-[4.2vw]  2xl:text-[3.5vw] leading-none font-medium  text-white "
                        >
                            <span className="block text-shadow-2xs">Empower your </span>
                            <span className="block text-shadow-2xs"> choices with</span>
                            <span className="block text-shadow-2xs">universal wisdom</span>
                        </motion.div>
                        <motion.div whileInView={{y: 0}} initial={{y: 50}} transition={{duration: 1, ease: "easeOut"}} className="flex  gap-5 mt-10 ">
                            <Button>Invest with us</Button>
                            <Button variant="outline">Start Journey</Button>
                        </motion.div>
                    </div>

                    <motion.div whileInView={{y: 0}} initial={{y: 50}} transition={{duration: 1, ease: "easeOut"}} className="pl-40">
                        <div className="text-[4.2vw] 2xl:text-[3.5vw] leading-none text-white font-medium">
                            <span>Vision</span>
                        </div>
                        <div className="uppercase text-white/60 space-y-1 font-neosans  tracking-[3px] text-sm mt-10">
                            <span className="block hover:text-white cursor-pointer">Twitter</span>
                            <span className="block hover:text-white cursor-pointer">Linkedin</span>
                            <span className="block hover:text-white cursor-pointer">Email</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <p className="text-white/60 tracking-widest absolute left-0 bottom-0 text-lg padding-x pb-10 ">
                ©2025 - Amaterasu, empowering your mental health with quantum precision.
            </p>
        </div>
    );
}
