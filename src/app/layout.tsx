import type {Metadata} from "next";
import {Zain} from "next/font/google";
import "./globals.css";

const zain = Zain({
    variable: "--font-zain",
    weight: ["200", "300", "400", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Amaterasu - Empower your mental health journey",
    description: "Amaterasu is a physics cognition lab working at the intersection of technology and nature to transform mental health.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${zain.variable}  antialiased`}>{children}</body>
        </html>
    );
}
