import type {Metadata} from "next";
import "./globals.css";
import LenisWrapper from "@/components/ui/lenis-wrapper";
import Wrapper from "@/components/ui/wrapper";

export const metadata: Metadata = {
    title: "Doris Rüggeberg - Empower your choices with universal wisdom",
    description:
        "Doris Rüggeberg empowers leaders and creatives through psychological, systemic, and cosmic insight to make clear, aligned, and strategic life choices",
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
