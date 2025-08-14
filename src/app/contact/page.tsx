"use client";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import {motion} from "motion/react";

export default function Contact() {
    // const formRef = useRef<HTMLFormElement>(null);
    // const [showSuccess, setShowSuccess] = useState(false);
    // const [showError, setShowError] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // if (!formRef.current) return;

        // emailjs
        //     .sendForm(
        //         "service_y2cug0d", 
        //         "template_f58l0ht", 
        //         formRef.current,
        //         "Kh2ovp-8DSuvtI8xd" 
        //     )
        //     .then(
        //         () => {
        //             console.log("Email sent successfully!");
        //             formRef.current?.reset();
        //             setShowSuccess(true);
        //             setTimeout(() => setShowSuccess(false), 3000);
        //         },
        //         (error) => {
        //             console.error("Email sending error:", error);
        //             setShowError(true);
        //             setTimeout(() => setShowError(false), 3000);
        //         }
        //     );
    };

    return (
        <div data-navbar-theme="dark">
            <Navbar />
            <section data-navbar-theme="dark" className="min-h-screen gradient-background flex padding-x items-center justify-center">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                    className="w-full flex items-center justify-center relative"
                >
                    <form onSubmit={handleSubmit}  className="bg-white p-5 md:p-8 space-y-3 max-w-lg w-full rounded-2xl shadow-2xl">
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                Name: <span className="pt-2 pl-1 font-medium">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Type Here"
                                className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                E-Mail Address: <span className="pt-2 pl-1 font-medium">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Type Here"
                                className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                Subject: <span className="pt-2 pl-1 font-medium">*</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Type Here"
                                className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-neosans text-gray-600 flex items-center">
                                Message: <span className="pt-2 pl-1 font-medium">*</span>
                            </label>
                            <input
                                type="text"
                                name="message"
                                required
                                placeholder="Type Here"
                                className="block h-12 px-5 w-full mt-2 border border-black/30 rounded-lg"
                            />
                        </div>
                        <Button className="mt-6" xValue={60}>
                            Submit
                        </Button>
                    </form>

                    {/* ✅ Success message */}
                    {/* <AnimatePresence>
                        {showSuccess && (
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                transition={{duration: 0.5}}
                                className="absolute top-4 bg-green-500 text-white px-6 py-2 rounded-lg shadow-xl font-semibold"
                            >
                                Message sent successfully!
                            </motion.div>
                        )}
                        {showError && (
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -20}}
                                transition={{duration: 0.5}}
                                className="absolute top-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow-xl font-semibold"
                            >
                                Failed to send message. Try again.
                            </motion.div>
                        )}
                    </AnimatePresence> */}
                </motion.div>
            </section>
        </div>
    );
}
