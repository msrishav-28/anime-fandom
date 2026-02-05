"use client";

import { useEffect } from "react";
import { BentoCard } from "@/components/bento/BentoCard";
import { AlertTriangle, Home, RotateCw } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen p-8 flex items-center justify-center bg-void-pure">
            <BentoCard className="max-w-md w-full text-center space-y-6 bg-glass-medium backdrop-blur-3xl border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.2)]">

                <div className="flex justify-center">
                    <div className="p-4 bg-red-500/10 rounded-full text-red-500 animate-pulse">
                        <AlertTriangle size={48} />
                    </div>
                </div>

                <h2 className="text-3xl font-heading font-bold text-white uppercase">
                    System Failure
                </h2>

                <p className="font-mono text-sm text-gray-400">
                    {error.message || "A critical error occurred while accessing the archives."}
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition-colors"
                    >
                        <RotateCw size={18} /> Retry
                    </button>
                    <Link href="/" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-full font-bold hover:bg-white/10 transition-colors border border-white/10">
                        <Home size={18} /> Home
                    </Link>
                </div>

                <div className="text-xs font-mono text-gray-600 uppercase">
                    Code: {error.digest || "UNKNOWN_ERROR"}
                </div>

            </BentoCard>
        </main>
    );
}
