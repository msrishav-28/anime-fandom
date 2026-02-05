"use client";

import React from "react";
import { FloatingHUD } from "@/components/nav/FloatingHUD";
import { BentoCard } from "@/components/bento/BentoCard";
import { Scene3D } from "@/components/3d/Scene3D";
import { LiquidGrid } from "@/components/3d/LiquidGrid";
import { Trophy, Zap, Activity, Hash, Edit3 } from "lucide-react";
import Image from "next/image";

// Mock Data for MVP (Later fetch from API)
const user = {
    name: "Admin User",
    rank: "Architect",
    ram: 9950,
    totalRam: 12400,
    edits: 42,
    theme: "Void"
};

export default function ProfilePage() {
    return (
        <main className="min-h-screen p-8 pb-32">
            <Scene3D>
                <LiquidGrid />
            </Scene3D>

            <FloatingHUD />

            <div className="mx-auto max-w-5xl space-y-8">

                {/* Header */}
                <div className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-cyber-cyan to-cyber-purple p-[2px]">
                        <div className="h-full w-full rounded-full bg-void-900 border-4 border-void-pure overflow-hidden">
                            <Image src="https://placehold.co/200x200/1a1a1a/06b6d4?text=ADM" alt="Profile" width={200} height={200} className="object-cover" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-heading font-bold text-white uppercase">{user.name}</h1>
                        <div className="flex gap-4 mt-2 font-mono text-sm">
                            <span className="bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded border border-cyber-purple/30">
                                RANK: {user.rank}
                            </span>
                            <span className="bg-glass-light text-gray-400 px-2 py-1 rounded border border-white/10">
                                THEME: {user.theme}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* RAM Balance */}
                    <BentoCard className="bg-glass-medium">
                        <div className="flex justify-between items-start mb-4">
                            <Zap className="text-cyber-yellow" />
                            <span className="text-xs text-gray-500">CURRENT RAM</span>
                        </div>
                        <div className="text-4xl font-bold font-mono text-cyber-yellow">{user.ram} MB</div>
                        <div className="mt-2 text-xs text-gray-400">Available for Bounties</div>
                    </BentoCard>

                    {/* Lifetime RAM */}
                    <BentoCard className="bg-glass-medium">
                        <div className="flex justify-between items-start mb-4">
                            <Activity className="text-cyber-green" />
                            <span className="text-xs text-gray-500">LIFETIME EARNED</span>
                        </div>
                        <div className="text-4xl font-bold font-mono text-white">{user.totalRam} MB</div>
                        <div className="w-full bg-void-pure h-2 rounded-full mt-4 overflow-hidden">
                            <div className="bg-cyber-green h-full w-[80%]" />
                        </div>
                        <div className="mt-2 text-xs text-gray-400 flex justify-between">
                            <span>Progress to Oracle</span>
                            <span>80%</span>
                        </div>
                    </BentoCard>

                    {/* Contributions */}
                    <BentoCard className="bg-glass-medium">
                        <div className="flex justify-between items-start mb-4">
                            <Edit3 className="text-cyber-cyan" />
                            <span className="text-xs text-gray-500">CONTRIBUTIONS</span>
                        </div>
                        <div className="text-4xl font-bold font-mono text-white">{user.edits}</div>
                        <div className="mt-2 text-xs text-gray-400">
                            Edits & Theories planted
                        </div>
                    </BentoCard>
                </div>

                {/* Recent Activity (Mock) */}
                <BentoCard title="Recent Activity" span="3x2">
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-cyber-cyan/20 rounded text-cyber-cyan">
                                        <Hash size={16} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white font-bold">Edited "Sung Jin-Woo" Stats</div>
                                        <div className="text-xs text-gray-500">2 hours ago</div>
                                    </div>
                                </div>
                                <span className="text-cyber-yellow font-mono text-xs">+20 RAM</span>
                            </div>
                        ))}
                    </div>
                </BentoCard>
            </div>
        </main>
    );
}
