import Image from "next/image";
import Button from "./ui/button";

export default function Footer() {
    return (
        <div className=" flex items-center justify-center  w-full bg-[#020A44] relative text-white">
            <div
                className="absolute  inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle 600px at 50% 50%, #1F3B82, transparent)`,
                }}
            />
            <div className="relative overflow-hidden z-20 padding-x min-h-screen flex items-center justify-center ">
                <div className="grid grid-cols-7 gap-40 pb-10 just ">
                    <div className="xl:pr-32 col-span-4">
                        <div className="text-5xl xl:text-6xl space-y-1 2xl:text-8xl text-right text-white tracking-wide font-sans">
                            <span className="block">Empower</span>
                            <span className="block">your mental</span>
                            <span className="block">health journey</span>
                        </div>
                        <div className="flex  gap-5 mt-10 justify-end">
                            <Button>Invest with us</Button>
                            <Button variant="outline">Start Journey</Button>
                        </div>
                    </div>
                    <Image
                        src="/curve-line.png"
                        alt="Footer"
                        width={200}
                        height={500}
                        className=" pointer-events-none  absolute  top-1/2 left-1/2 stroke-red-700 -translate-y-1/2 h-3/5  object-cover"
                    />
                    <div className="col-span-3 pl-12 xl:pl-32">
                        <div className="text-5xl tracking-wide  2xl:text-7xl  text-white  font-medium">
                            <span>Vision</span>
                            <span className="text-white/40 block mt-2">Aleph</span>
                        </div>
                        <div className="uppercase text-white/60 space-y-1  font-semibold tracking-widest text-sm mt-10">
                            <span className="block hover:text-white cursor-pointer">Twitter</span>
                            <span className="block hover:text-white cursor-pointer">Linkedin</span>
                            <span className="block hover:text-white cursor-pointer">Email</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-white/60 tracking-wide 2xl:text-xl mt-20 absolute left-0 bottom-0 padding-x pb-10 ">
                © 2024 - Amaterasu, empowering your mental health with quantum precision.
            </p>
        </div>
    );
}
