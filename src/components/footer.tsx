"use client";
import {motion} from "motion/react";
import Button from "./ui/button";

export default function Footer() {
    return (
        <section
            id="footer"
            data-navbar-theme="dark"
            data-button-theme="dark"
            className=" flex items-center gradient-background justify-center bg-white w-full  relative text-white"
        >
            <div className="relative overflow-hidden z-20 padding-x w-full py-20 lg:min-h-screen flex items-center justify-center ">
                <div className="grid lg:grid-cols-2  gap-20 pb-20 lg:pb-10 lg:gap-40   w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto">
                    <div className="">
                        <motion.div
                            whileInView={{y: 0}}
                            initial={{y: 50}}
                            transition={{duration: 1, ease: "easeOut"}}
                            className="space-y-2 text-4xl lg:text-[62px] font-sans font-light -tracking-[2px] pointer-events-none w-full  leading-none text-white"
                        >
                            <span className="block text-shadow-2xs">Empower your </span>
                            <span className="block text-shadow-2xs"> choices with universal</span>
                            <span className="block text-shadow-2xs"> wisdom</span>
                        </motion.div>
                        <motion.div
                            whileInView={{y: 0}}
                            initial={{y: 50}}
                            transition={{duration: 1, ease: "easeOut"}}
                            className="flex flex-col md:flex-row gap-5 mt-10 "
                        >
                            <div>
                                <Button xValue={110}>Invest with us</Button>
                            </div>
                            <div>
                                <Button xValue={110} variant="outline">
                                    Start Journey
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div whileInView={{y: 0}} initial={{y: 50}} transition={{duration: 1, ease: "easeOut"}} className="lg:pl-40">
                        <div className="space-y-2 text-4xl lg:text-[51px] font-sans font-light -tracking-[2px] pointer-events-none w-full  leading-none text-white">
                            <span>Vision</span> <br />
                            <span className="text-white/40">Doris Rüggeberg</span>
                        </div>
                        <div className="uppercase text-white/60 space-y-1 font-neosans text-extrasmall mt-10">
                            <span className="block hover:text-white cursor-pointer">Twitter</span>
                            <span className="block hover:text-white cursor-pointer">Linkedin</span>
                            <span className="block hover:text-white cursor-pointer">Email</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <p className="text-white/60 text-sm tracking-widest absolute left-0 bottom-0  padding-x pb-10 ">
                ©2025 - Amaterasu, empowering your mental health with quantum precision.
            </p>
        </section>
    );
}
