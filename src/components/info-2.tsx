import React from "react";
import Spiral from "./ui/spiral";

export default function Info2() {
    return (
        <div data-border-color="border-transparent" className="h-screen gradient-background relative text-white">
            <div className="relative z-20 h-full flex items-end padding-x ">
                <div className=" h-full flex items-center justify-center absolute top-0 right-0 padding-x">
                    <Spiral />
                </div>
                <div className="py-10 ">
                    <h3 className="text-3xl">
                        Before we start, let us understand <br /> your inner needs
                    </h3>
                    <div className="flex items-center gap-2 font-neosans uppercase tracking-widest mt-8 text-xs">
                        <span className="size-2 bg-emerald-300 rounded-full"></span>
                        <span>Beyond linear treatment</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
