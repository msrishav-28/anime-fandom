import { cn } from "@/lib/utils";
import React from "react";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    span?: "1x1" | "1x2" | "2x1" | "2x2" | "3x2";
    title?: string;
}

export function BentoCard({
    children,
    className,
    span = "1x1",
    title
}: BentoCardProps) {
    const spanClasses = {
        "1x1": "col-span-1 row-span-1",
        "1x2": "col-span-1 row-span-2",
        "2x1": "col-span-2 row-span-1",
        "2x2": "col-span-2 row-span-2",
        "3x2": "col-span-3 row-span-2",
    };

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-glass-border bg-glass-light backdrop-blur-3xl transition-all duration-300",
                "hover:border-cyber-cyan/30 hover:shadow-2xl hover:shadow-cyber-cyan/10",
                spanClasses[span],
                className
            )}
        >
            {/* Glow Effect */}
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyber-cyan/20 blur-3xl transition-all duration-500 group-hover:bg-cyber-cyan/30" />

            {/* Header */}
            {title && (
                <div className="absolute top-4 left-6 z-10">
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-glass-heading">
                        {title}
                    </h3>
                </div>
            )}

            {/* Content */}
            <div className="relative h-full w-full p-6">
                {children}
            </div>
        </div>
    );
}
