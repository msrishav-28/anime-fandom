"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Search, User, Trophy, BookOpen, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SearchOverlay } from "./SearchOverlay";
import { useSession, signIn, signOut } from "next-auth/react";
import { Magnetic } from "@/components/effects/Magnetic";

const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "#" }, // Managed by state
    { icon: BookOpen, label: "Wikis", href: "/wikis" },
    { icon: Trophy, label: "Bounties", href: "/bounties" },
    // Profile is handled conditionally in JSX
];

export function FloatingHUD() {
    const { data: session } = useSession();
    const [hovered, setHovered] = useState<number | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const ram = 50; // Mock RAM balance for MVP (Real app: session?.user?.ram)

    const handleAuth = () => {
        if (session) {
            signOut();
        } else {
            signIn("google");
        }
    };


    return (
        <>
            <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">

                {/* RAM Counter (Desktop Only) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden md:flex flex-col items-end mr-4 font-mono text-xs"
                >
                    <span className="text-gray-500">RAM BALANCE</span>
                    <span className="text-cyber-yellow text-lg font-bold drop-shadow-md">{ram} MB</span>
                </motion.div>

                {/* HUD Items */}
                <div className="flex items-center gap-2 p-3 bg-glass-medium backdrop-blur-3xl border border-glass-border rounded-full shadow-2xl shadow-cyber-cyan/5">
                    {items.map((item, index) => {
                        const isSearch = item.label === "Search";

                        return (
                            <React.Fragment key={item.label}>
                                {isSearch ? (
                                    <motion.button
                                        onHoverStart={() => setHovered(index)}
                                        onHoverEnd={() => setHovered(null)}
                                        onClick={() => setIsSearchOpen(true)}
                                        className={cn(
                                            "relative flex items-center justify-center w-12 h-12 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-white",
                                            "hover:bg-glass-light"
                                        )}
                                        whileHover={{ scale: 1.25, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <item.icon className="w-5 h-5" strokeWidth={1.5} />
                                        {hovered === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: -40 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute px-2 py-1 text-xs font-mono text-cyber-cyan bg-void-900 border border-cyber-cyan/20 rounded whitespace-nowrap pointer-events-none"
                                            >
                                                {item.label}
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ) : (
                                    <Link href={item.href} legacyBehavior>
                                        <motion.a
                                            onHoverStart={() => setHovered(index)}
                                            onHoverEnd={() => setHovered(null)}
                                            className={cn(
                                                "relative flex items-center justify-center w-12 h-12 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-white",
                                                "hover:bg-glass-light"
                                            )}
                                            whileHover={{ scale: 1.25, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <item.icon className="w-5 h-5" strokeWidth={1.5} />

                                            {hovered === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: -40 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute px-2 py-1 text-xs font-mono text-cyber-cyan bg-void-900 border border-cyber-cyan/20 rounded whitespace-nowrap pointer-events-none"
                                                >
                                                    {item.label}
                                                </motion.div>
                                            )}
                                        </motion.a>
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}

                    {/* Auth Button */}
                    <motion.button
                        onHoverStart={() => setHovered(99)}
                        onHoverEnd={() => setHovered(null)}
                        onClick={handleAuth}
                        className={cn(
                            "relative flex items-center justify-center w-12 h-12 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-white",
                            "hover:bg-glass-light"
                        )}
                        whileHover={{ scale: 1.25, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {session ? <LogOut className="w-5 h-5" strokeWidth={1.5} /> : <LogIn className="w-5 h-5" strokeWidth={1.5} />}
                        {hovered === 99 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: -40 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute px-2 py-1 text-xs font-mono text-cyber-cyan bg-void-900 border border-cyber-cyan/20 rounded whitespace-nowrap pointer-events-none"
                            >
                                {session ? "Logout" : "Login"}
                            </motion.div>
                        )}
                    </motion.button>
                </div>
            </nav>

            {/* Search Overlay */}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
