"use client";

import { useEffect, useRef, useState } from "react";
import { awardRAM } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

interface RamTrackerProps {
    wikiSlug: string;
    slug: string;
}

export function RamTracker({ wikiSlug, slug }: RamTrackerProps) {
    const [awarded, setAwarded] = useState(false);
    const sentRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sentRef.current) return;

            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // If user scrolled 90% of page
            if (scrollPosition > documentHeight * 0.9) {
                sentRef.current = true;
                setAwarded(true);

                // Call API (Mock email for now)
                awardRAM('admin@neuroarchive.com', 50, 'read_artifact');

                // Hide notification after 3s
                setTimeout(() => setAwarded(false), 3000);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [wikiSlug, slug]);

    return (
        <AnimatePresence>
            {awarded && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-24 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-void-900 border border-cyber-yellow/30 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                >
                    <div className="p-2 bg-cyber-yellow/20 rounded-full text-cyber-yellow animate-pulse">
                        <Zap size={24} />
                    </div>
                    <div>
                        <div className="text-cyber-yellow font-bold font-mono text-lg">+50 MB</div>
                        <div className="text-gray-400 text-xs uppercase tracking-wider">Data Synced</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
