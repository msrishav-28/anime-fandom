import React from "react";
import { Settings, Share2, MessageSquare, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FloatingHUD } from "@/components/nav/FloatingHUD";
import { BentoCard } from "@/components/bento/BentoCard";
import { DecryptText } from "@/components/effects/DecryptText";
import { HoloCard } from "@/components/3d/HoloCard";
import { Scene3D } from "@/components/3d/Scene3D";
import { LiquidGrid } from "@/components/3d/LiquidGrid";
import { getArtifact } from "@/lib/api";
import { RamTracker } from "@/components/gamification/RamTracker";
import { TheoryBoard } from "@/components/social/TheoryBoard";

interface PageProps {
    params: Promise<{
        wiki_slug: string;
        slug: string;
    }>;
}

export default async function ArtifactPage({ params }: PageProps) {
    const { wiki_slug, slug } = await params;
    const artifact = await getArtifact(wiki_slug, slug);

    if (!artifact) {
        notFound();
    }

    const { title, subtitle, data, hero_image, ram_cost } = artifact;

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
                        imageUrl={hero_image || "https://placehold.co/600x800/1a1a1a/06b6d4/png?text=NO+IMG"}
                        name={title}
                        subtitle={subtitle}
                        className="h-[500px] w-full max-w-none"
                    />

                    <BentoCard className="flex justify-between items-center bg-glass-medium">
                        <div className="flex gap-4">
                            <button className="p-2 hover:text-cyber-cyan transition-colors"><Share2 size={20} /></button>
                            <button className="p-2 hover:text-cyber-cyan transition-colors"><MessageSquare size={20} /></button>
                        </div>
                        {ram_cost ? (
                            <div className="text-xs text-cyber-yellow flex items-center gap-1">
                                <AlertTriangle size={12} /> RAM COST: {ram_cost}
                            </div>
                        ) : null}
                        <button className="p-2 hover:text-cyber-cyan transition-colors"><Settings size={20} /></button>
                    </BentoCard>
                </div>

                {/* Right Col: Stats & Lore */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Header */}
                    <BentoCard span="3x2" className="flex flex-col justify-center min-h-[200px]">
                        <h1 className="font-heading text-6xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            <DecryptText text={title} speed={30} />
                        </h1>
                        {data?.level && (
                            <p className="font-mono text-cyber-cyan mt-2">
                                LEVEL <span className="text-white">{data.level}</span> | CLASS <span className="text-white">{data.class}</span>
                            </p>
                        )}
                    </BentoCard>

                    {/* Dynamic Stats Rendering */}
                    {data?.stats && (
                        <BentoCard title="Stats" className="space-y-4">
                            {Object.entries(data.stats).map(([key, value]) => (
                                <div key={key} className="flex justify-between font-mono text-sm capitalize">
                                    <span className="text-gray-400">{key}</span>
                                    <span className="text-cyber-cyan">{String(value)}</span>
                                </div>
                            ))}
                        </BentoCard>
                    )}

                    {data?.guild && (
                        <BentoCard title="Affiliation" className="space-y-2">
                            <div className="text-2xl font-bold">{data.guild}</div>
                            <div className="text-sm text-gray-400">Member</div>
                        </BentoCard>
                    )}

                    {/* Tags */}
                    {artifact.type === 'character' && (
                        <BentoCard title="Type" className="space-y-2">
                            <div className="text-3xl font-bold text-cyber-purple drop-shadow-lg uppercase">{artifact.type}</div>
                        </BentoCard>
                    )}

                    {/* Lore/Description Placeholder */}
                    <BentoCard span="3x2" title="Data Log">
                        <div className="prose prose-invert max-w-none prose-p:text-glass-text prose-headings:font-heading">
                            <p>
                                [Accessing Archives...]
                                No detailed biography found in this shard.
                            </p>
                        </div>
                    </BentoCard>

                </div>
            </div>

            {/* Social / Theories Section */}
            <div className="mx-auto max-w-3xl mt-12 mb-24">
                <TheoryBoard wikiSlug={wiki_slug} artifactSlug={slug} />
            </div>

            <RamTracker wikiSlug={wiki_slug} slug={slug} />
        </main>
    );
}
