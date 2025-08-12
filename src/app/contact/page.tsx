import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import React from "react";

export default function Contact() {
    return (
        <>
            <Navbar />
            <section
               
                className="min-h-screen gradient-background flex items-center justify-center"
            >
                <form className="bg-white p-8 space-y-3 max-w-lg w-full rounded-2xl shadow-2xl">
                    <div>
                        <label className="font-neosans text-gray-600 flex items-center">Name: <span className=" pt-2 pl-1  font-medium">*</span> </label>
                        <input type="text" placeholder="Type Here"  className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"/>
                    </div>
                    <div>
                        <label className="font-neosans text-gray-600 flex items-center">E-Mail Address: <span className=" pt-2 pl-1  font-medium">*</span> </label>
                        <input type="email" placeholder="Type Here"  className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"/>
                    </div>
                    <div>
                        <label className="font-neosans text-gray-600 flex items-center">Subject: <span className=" pt-2 pl-1  font-medium">*</span> </label>
                        <input type="text" placeholder="Type Here"  className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"/>
                    </div>
                    <div>
                        <label className="font-neosans text-gray-600 flex items-center">Message: <span className=" pt-2 pl-1  font-medium">*</span> </label>
                        <input type="text" placeholder="Type Here"  className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"/>
                    </div>
                    <Button className="mt-6" xValue={60}>Submit </Button>
                </form>
            </section>
        </>
    );
}
