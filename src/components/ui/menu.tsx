"use client";
import {useState} from "react";
import Button from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({navbarTheme}: {navbarTheme: {textColor: string; bgColor: string; borderColor: string}}) {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu((prev) => !prev);
    const pathname = usePathname();

    // Dynamically determine the label based on route
    const getLabel = () => {
        if (pathname === "/") return "Vision";
        if (pathname === "/doris-rueggeberg") return "Doris";
        if (pathname === "/contact") return "Contact";
        return "Page"; // fallback for unknown routes
    };
    const socialLinks = [
        {name: "TWITTER", href: "#"},
        {name: "LINKEDIN", href: "#"},
        {name: "EMAIL", href: "#"},
    ];

    return (
        <div className="md:relative ">
            <div
                onClick={toggleMenu}
                className={`flex group items-center font-neosans gap-30 border-t cursor-pointer p-4 duration-500 ${
                    menu ? " border-transparent" : navbarTheme.borderColor
                }`}
            >
                <div className={` uppercase h-5 text-extrasmall overflow-hidden leading-none tracking-widest ${navbarTheme.textColor}`}>
                    <span className="h-full flex items-center group-hover:-translate-y-full duration-500"> {getLabel()}</span>
                    <span className="h-full flex items-center translate-y-full group-hover:-translate-y-full duration-500">Menu</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 group-hover:rotate-45 duration-500">
                    {Array.from({length: 9}).map((_, i) => (
                        <span
                            key={i}
                            className={`block size-0.5 rounded-full ${navbarTheme.bgColor} duration-500 ${
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
                    text-black md:rounded-xl shadow-xl bg-gradient-to-b from-cyan-100 to-white
                     duration-500 ease-in-out origin-center overflow-hidden
                    ${menu ? "h-screen md:h-[93vh] w-screen  md:w-85 " : "h-0 w-0  "}
                `}
            >
                <div className={`flex p-10 flex-col h-full  ease-in-out  duration-500 ${menu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
                    <button onClick={toggleMenu} className="flex items-center gap-3  text-slate-600 hover:text-slate-800 transition-colors group">
                        <span className="text-extrasmall uppercase font-medium text-blue-950  font-neosans">CLOSE</span>
                        <span className="text-2xl block font-serif pb-0.5 text-black/50">&#8594;</span>
                    </button>

                    <div
                        className={`flex flex-col gap-10  justify-center duration-500 ease-in-out items-start  h-full ${
                            menu ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                        }`}
                    >
                        <div className="space-y-2 text-4xl  -tracking-[2px]   w-full  leading-none text-white">
                            <Link href="/" className="block text-blue-900 leading-none mb-2">
                                Vision
                            </Link>
                            <Link href="/doris-rueggeberg" className="block text-blue-900/50 leading-none">
                                Doris Rüggeberg
                            </Link>
                        </div>

                        <div className="space-y-2 font-neosans">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="block text-blue-900/50 hover:text-blue-900 transition-colors  uppercase text-extrasmall "
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <Link href="/contact">
                            <Button xValue={110} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
