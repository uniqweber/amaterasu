"use client";
import React from "react";
import BlurText from "./ui/blur-text";


export default function Vision() {
    return (
        <section
            id="vision"
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
            <div className="text-center py-20 lg:py-40 lg:w-3/5 mx-auto">
                <h4 className="font-neosans flex items-center gap-2 text-extrasmall uppercase text-blue-900  justify-center">
                    <span className="inline-block size-1.5 bg-emerald-300 rounded-full"></span>
                    Vision
                </h4>
                <BlurText
                    text="We empower humanity with the tools, knowledge and wisdom to face mental health challenges from a position of unprecedented
                    resilience."
                    delay={30}
                    animateBy="words"
                    direction="bottom"
                    className="text-[40px] leading-[40px] flex items-center lg:justify-center  space-y-2 max-w-screen-lg mx-auto mt-16 padding-x   text-blue-900 "
                />
            </div>
        </section>
    );
}
