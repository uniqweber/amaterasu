import React from "react";
import Menu from "./ui/menu";

export default function Navbar() {
    return (
        <div className="text-white padding-x  py-6 2xl:py-10 fixed inset-x-0 z-50 flex items-start justify-between">
            <h5 className="md:text-2xl -mt-2 md:mt-0 font-medium tracking-wider">Amaterasu</h5>
            <Menu />
        </div>
    );
}
