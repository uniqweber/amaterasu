import type {Metadata} from "next";
import { Nunito_Sans} from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
    variable: "--font-nunito",
    weight: ["300", "400", "700", "800", "900"],
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
            <body className={`${nunito.variable}  antialiased`}>{children}</body>
        </html>
    );
}
