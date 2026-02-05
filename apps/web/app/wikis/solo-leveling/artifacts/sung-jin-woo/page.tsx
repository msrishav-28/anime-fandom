import React from "react";
import Image from "next/image";
import { Settings, Share2, MessageSquare } from "lucide-react";
import { FloatingHUD } from "@/components/nav/FloatingHUD";
import { BentoCard } from "@/components/bento/BentoCard";
import { DecryptText } from "@/components/effects/DecryptText";
import { HoloCard } from "@/components/3d/HoloCard";
import { Scene3D } from "@/components/3d/Scene3D";
import { LiquidGrid } from "@/components/3d/LiquidGrid";

export default function CharacterPage() {
    return (
        <main className="min-h-screen p-8 pb-32">
            {/* 3D Background */}
            <Scene3D>
                <LiquidGrid />
            </Scene3D>

            {/* Navigation */}
            <FloatingHUD />

            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Left Col: Character Card */}
                <div className="md:col-span-1 space-y-6">
                    <HoloCard
                        imageUrl="https://placehold.co/600x800/1a1a1a/06b6d4/png?text=SJW"
                        name="Sung Jin-Woo"
                        subtitle="The Shadow Monarch"
                        className="h-[500px] w-full max-w-none"
                    />

                    <BentoCard className="flex justify-between items-center bg-glass-medium">
                        <div className="flex gap-4">
                            <button className="p-2 hover:text-cyber-cyan transition-colors"><Share2 size={20} /></button>
                            <button className="p-2 hover:text-cyber-cyan transition-colors"><MessageSquare size={20} /></button>
                        </div>
                        <button className="p-2 hover:text-cyber-cyan transition-colors"><Settings size={20} /></button>
                    </BentoCard>
                </div>

                {/* Right Col: Stats & Lore */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Header */}
                    <BentoCard span="3x2" className="flex flex-col justify-center min-h-[200px]">
                        <h1 className="font-heading text-6xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            <DecryptText text="Sung Jin-Woo" speed={30} />
                        </h1>
                        <p className="font-mono text-cyber-cyan mt-2">
                            LEVEL <span className="text-white">146</span> | CLASS <span className="text-white">NECROMANCER</span>
                        </p>
                    </BentoCard>

                    {/* Stats */}
                    <BentoCard title="Stats" className="space-y-4">
                        <div className="flex justify-between font-mono text-sm">
                            <span className="text-gray-400">STR</span>
                            <span className="text-cyber-cyan">324</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm">
                            <span className="text-gray-400">AGI</span>
                            <span className="text-cyber-cyan">340</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm">
                            <span className="text-gray-400">INT</span>
                            <span className="text-cyber-cyan">340</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm">
                            <span className="text-gray-400">SEN</span>
                            <span className="text-cyber-cyan">319</span>
                        </div>
                    </BentoCard>

                    <BentoCard title="Affiliation" className="space-y-2">
                        <div className="text-2xl font-bold">Ahjin Guild</div>
                        <div className="text-sm text-gray-400">Guild Master</div>
                    </BentoCard>

                    <BentoCard title="Rank" className="space-y-2">
                        <div className="text-3xl font-bold text-cyber-purple drop-shadow-lg">S-Rank</div>
                        <div className="text-xs text-cyber-purple/60">National Level Hunter</div>
                    </BentoCard>

                    {/* Lore */}
                    <BentoCard span="3x2" title="Biography">
                        <div className="prose prose-invert max-w-none prose-p:text-glass-text prose-headings:font-heading">
                            <p>
                                Originally known as the <span className="text-cyber-yellow">"World's Weakest Hunter"</span>, Jin-Woo was reawakened as a Player after surviving the Double Dungeon.
                                As the sole player of the System, he possesses the unique ability to level up without limit.
                            </p>
                            <p className="mt-4">
                                He later inherits the full power of Ashborn, becoming the second <span className="text-cyber-purple font-bold">Shadow Monarch</span>.
                                His army of shadows currently exceeds 130,000 soldiers, including the Marshal-grade shadows Bellion, Igris, and Beru.
                            </p>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </main>
    );
}
