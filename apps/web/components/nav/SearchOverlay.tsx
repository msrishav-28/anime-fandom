"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");

    // Close on Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-32 bg-void-pure/80 backdrop-blur-xl"
                >
                    <div className="w-full max-w-2xl px-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search the Archive..."
                                className="w-full bg-void-800 border-2 border-cyber-cyan/30 rounded-full py-4 pl-12 pr-12 text-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                <X />
                            </button>
                        </div>

                        {/* Mock Results */}
                        {query.length > 0 && (
                            <div className="mt-4 bg-void-900 border border-glass-border rounded-2xl overflow-hidden p-2">
                                <div className="p-2 text-xs font-mono text-gray-500 uppercase">Best Matches</div>
                                <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer flex items-center justify-between group">
                                    <span className="text-white font-bold group-hover:text-cyber-cyan transition-colors">Sung Jin-Woo</span>
                                    <span className="text-xs text-cyber-purple bg-cyber-purple/10 px-2 py-1 rounded">Character</span>
                                </div>
                                <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer flex items-center justify-between group">
                                    <span className="text-white font-bold group-hover:text-cyber-cyan transition-colors">Shadow Monarch</span>
                                    <span className="text-xs text-cyber-yellow bg-cyber-yellow/10 px-2 py-1 rounded">Rank</span>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
