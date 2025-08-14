import type {Metadata} from "next";
import "./globals.css";
import LenisWrapper from "@/components/ui/lenis-wrapper";
import Wrapper from "@/components/ui/wrapper";

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
            <body className={` select-none  antialiased`}>
                <LenisWrapper>
                    <Wrapper>{children}</Wrapper>
                </LenisWrapper>
            </body>
        </html>
    );
}
