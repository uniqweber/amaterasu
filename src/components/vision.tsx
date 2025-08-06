"use client";
import React from "react";
import BlurText from "./ui/blur-text";


export default function Vision() {
    return (
        <div
            id="vision"
            data-navbar-theme="light"
            data-text-color="text-blue-900"
            data-button-bg="bg-blue-900"
            data-button-border="border-blue-900/50"
            data-bg-color="bg-blue-900"
            data-border-color="border-black/20"
            data-theme-logo="invert-0"
        >
            <div className="text-center py-40">
                <h4 className="font-neosans flex items-center gap-3 tracking-[4px] text-blue-900  justify-center">
                    <span className="inline-block size-2 bg-emerald-300 rounded-full"></span>
                    Vision
                </h4>
                <BlurText
                    text="We empower humanity with the tools, knowledge and wisdom to face mental health challenges from a position of unprecedented
                    resilience."
                    delay={50}
                    animateBy="words"
                    direction="bottom"
                    className="text-5xl text-center flex items-center justify-center space-y-2 max-w-screen-lg mx-auto mt-20 padding-x   text-blue-900 "
                />
            </div>
        </div>
    );
}
