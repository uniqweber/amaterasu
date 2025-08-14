"use client";

import Link from "next/link";
import {motion} from "motion/react";

export default function Footer() {
    return (
        <section
            id="footer"
            data-navbar-theme="dark"
            data-button-theme="dark"
            className=" flex items-center gradient-background justify-center bg-white w-full  relative text-white"
        >
            <div className="relative overflow-hidden z-20 padding-x w-full py-20 lg:min-h-screen flex items-center justify-center ">
                <div className="grid lg:grid-cols-2  gap-10 pb-20 lg:pb-10 lg:gap-40   w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto">
                    <motion.div whileInView={{y: 0}} initial={{y: 50}} transition={{duration: 1, ease: "easeOut"}}>
                        <div className="space-y-2 text-4xl lg:text-[51px] -mt-2   w-full  leading-none text-white">
                            <Link href="/vision">
                                <span>Vision</span>
                            </Link>
                            <br />
                            <Link href="/doris-rueggeberg">
                                <span className="text-white/40">Doris Rüggeberg</span>
                            </Link>
                        </div>
                        <div className="uppercase text-white/60 space-y-1 font-neosans text-extrasmall mt-10">
                            <span className="block w-max hover:text-white cursor-pointer">Twitter</span>
                            <span className="block w-max hover:text-white cursor-pointer">Linkedin</span>
                            <span className="block w-max hover:text-white cursor-pointer">Instagram</span>
                            <span className="block w-max hover:text-white cursor-pointer">Email</span>
                        </div>
                    </motion.div>
                    <motion.div whileInView={{y: 0}} initial={{y: 50}} transition={{duration: 1, ease: "easeOut"}}>
                        <h4 className=" text-4xl lg:text-[51px]   w-full  mt-11 leading-none text-white/50">Address</h4>
                        <p className="uppercase text-white/50 leading-4.5 font-neosans text-extrasmall mt-9">
                            Kapuzinerberg 4 <br /> 5020 Salzburg <br /> Austria
                        </p>
                    </motion.div>
                </div>
            </div>
            <p className="text-white/60 text-sm tracking-widest absolute left-0 bottom-0  padding-x pb-10 "> &copy;2025 - Always Be Creative GmbH</p>
        </section>
    );
}
