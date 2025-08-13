"use client";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import {motion} from "motion/react";

export default function Contact() {
    return (
        <div data-navbar-theme="dark">
            <Navbar />
            <section data-navbar-theme="dark" className="min-h-screen gradient-background flex padding-x items-center justify-center">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    className="w-full flex items-center justify-center"
                >
                    <form className="bg-white p-5 md:p-8 space-y-3 max-w-lg w-full rounded-2xl shadow-2xl">
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                Name: <span className=" pt-2 pl-1  font-medium">*</span>{" "}
                            </label>
                            <input type="text" placeholder="Type Here" className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg" />
                        </div>
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                E-Mail Address: <span className=" pt-2 pl-1  font-medium">*</span>{" "}
                            </label>
                            <input type="email" placeholder="Type Here" className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg" />
                        </div>
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                Subject: <span className=" pt-2 pl-1  font-medium">*</span>{" "}
                            </label>
                            <input type="text" placeholder="Type Here" className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg" />
                        </div>
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                Message: <span className=" pt-2 pl-1  font-medium">*</span>{" "}
                            </label>
                            <input type="text" placeholder="Type Here" className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg" />
                        </div>
                        <Button className="mt-6" xValue={60}>
                            Submit{" "}
                        </Button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
}
