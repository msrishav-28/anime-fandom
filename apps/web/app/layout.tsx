import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider";

// Headings
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["300", "500", "700"],
});

// Body (Inter as Satoshi substitute per plan)
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

// Code/Data
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Neuro-Archive | The Future of Fandom",
    description: "Immersive 3D Wiki for Anime & Gaming",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-void-pure text-white overflow-hidden`}
            >
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
