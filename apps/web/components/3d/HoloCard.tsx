"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface HoloCardProps {
    imageUrl: string;
    name: string;
    subtitle?: string;
    className?: string;
}

export function HoloCard({ imageUrl, name, subtitle, className }: HoloCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics (from visual dna)
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative h-[400px] w-full max-w-[300px] cursor-pointer rounded-xl bg-void-900",
                className
            )}
        >
            {/* Layer 1: Aura (Behind) */}
            <div
                className="absolute inset-0 -z-10 rounded-xl bg-cyber-cyan/20 blur-2xl"
                style={{ transform: "translateZ(-50px)" }}
            />

            {/* Layer 2: Character Image */}
            <div
                className="absolute inset-2 overflow-hidden rounded-lg bg-void-800 border border-glass-border"
                style={{ transform: "translateZ(20px)" }}
            >
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                />

                {/* Scanlines Overlay */}
                <div className="absolute inset-0 bg-[url('/textures/scanlines.png')] opacity-30 pointer-events-none" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void-pure to-transparent p-4">
                    <h3 className="font-heading text-2xl font-bold uppercase text-white">{name}</h3>
                    <p className="font-mono text-xs text-cyber-cyan">{subtitle}</p>
                </div>
            </div>

            {/* Layer 3: Glass Overlay (Reflection) */}
            <div
                className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-transparent"
                style={{ transform: "translateZ(60px)" }}
            />
        </motion.div>
    );
}
