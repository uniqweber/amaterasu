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
            <div className="text-center py-20 mx-auto md:w-5/6 lg:py-40  ">
                <h4 className="font-neosans flex items-center gap-2 text-extrasmall uppercase text-blue-900  justify-center">
                    <span className="inline-block size-1.5 bg-emerald-300 rounded-full"></span>
                    Vision
                </h4>
                <BlurText
                    text="We empower human potential by merging cosmic perspective with actionable strategy, fostering a state of resilience in which challenges are not merely endured, but transformed into catalysts for resilience and growth."
                    delay={30}
                    animateBy="words"
                    direction="bottom"
                    className="text-2xl md:text-[40px] md:leading-[40px] flex items-center justify-center space-y-1 md:space-y-2  mt-16 padding-x   text-blue-900 "
                />
            </div>
        </section>
    );
}
