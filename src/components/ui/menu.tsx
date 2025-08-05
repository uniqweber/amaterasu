"use client";
import {useState} from "react";
import Button from "./button";

export default function Menu() {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu((prev) => !prev);

    const socialLinks = [
        {name: "TWITTER", href: "#"},
        {name: "LINKEDIN", href: "#"},
        {name: "EMAIL", href: "#"},
    ];

    return (
        <div className="md:relative ">
            <div
                onClick={toggleMenu}
                className={`flex group items-center gap-30 border-t cursor-pointer p-4  duration-500 ${
                    menu ? " border-transparent" : "border-white/20"
                }`}
            >
                <div className="text-sm uppercase h-5 overflow-hidden leading-none font-semibold text-white">
                    <span className="h-full flex items-center group-hover:-translate-y-full duration-500">Vision</span>
                    <span className="h-full flex items-center translate-y-full group-hover:-translate-y-full duration-500">Menu</span>
                </div>

                <div className="grid grid-cols-3 gap-1 group-hover:rotate-45 duration-500">
                    {Array.from({length: 9}).map((_, i) => (
                        <span
                            key={i}
                            className={`block size-1 rounded-full bg-white/70 duration-500 ${
                                [1, 3, 5, 7].includes(i) ? "group-hover:bg-transparent" : ""
                            }`}
                        ></span>
                    ))}
                </div>
            </div>

            <div
                className={`
                    absolute right-0 top-0 
                   z-50
                    bg-white text-black md:rounded-xl shadow-xl 
                     duration-500 ease-in-out origin-center overflow-hidden
                    ${menu ? "h-screen md:h-[93vh] w-screen  md:w-96 2xl:w-[420px]" : "h-0 w-0  "}
                `}
            >
                <div className={`flex flex-col h-full  ease-in-out py-12 duration-500 ${menu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
                    <button
                        onClick={toggleMenu}
                        className="flex items-center gap-3 px-12  text-slate-600 hover:text-slate-800 transition-colors group"
                    >
                        <span className="text-sm uppercase font-semibold tracking-widest">CLOSE</span>
                        <span className="text-2xl block pb-1">&#8594;</span>
                    </button>

                    <div className={`flex flex-col gap-10 2xl:gap-20 justify-center duration-500 ease-in-out items-start px-12 h-full ${menu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
                        <div className=" text-7xl 2xl:text-8xl ">
                            <h1 className=" text-blue-900 leading-none mb-2">Vision</h1>
                            <h2 className=" text-blue-900/50 leading-none">Aleph</h2>
                        </div>

                        <div className="space-y-2">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="block text-blue-900/50 hover:text-blue-900 transition-colors text-sm uppercase tracking-widest font-semibold"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}
