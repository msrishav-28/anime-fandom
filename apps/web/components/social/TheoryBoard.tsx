"use client";

import React, { useState, useEffect } from 'react';
import { BentoCard } from '@/components/bento/BentoCard';
import { MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { getTheories, createTheory } from '@/lib/api';
import Image from "next/image";

interface Theory {
    _id: string;
    user: {
        name: string;
        rank: string;
        avatar: string;
    };
    content: string;
    upvotes: number;
    createdAt: string;
}

interface TheoryBoardProps {
    wikiSlug: string;
    artifactSlug: string;
}

export function TheoryBoard({ wikiSlug, artifactSlug }: TheoryBoardProps) {
    const [theories, setTheories] = useState<Theory[]>([]);
    const [newTheory, setNewTheory] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTheories(wikiSlug, artifactSlug).then(setTheories);

        // Socket.io Real-time updates
        // In a real app, we would join a room here
        // For MVP, we can just poll or rely on optimistic UI from posting
    }, [wikiSlug, artifactSlug]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTheory.trim()) return;

        setLoading(true);
        try {
            const theory = await createTheory(wikiSlug, artifactSlug, newTheory, 'admin@neuroarchive.com');
            setTheories([theory, ...theories]);
            setNewTheory('');
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <BentoCard title="Archives & Theories" span="3x2">
                <form onSubmit={handleSubmit} className="relative">
                    <textarea
                        value={newTheory}
                        onChange={(e) => setNewTheory(e.target.value)}
                        placeholder="PROPOSE A THEORY..."
                        className="w-full h-32 bg-void-900/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan transition-colors"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="absolute bottom-4 right-4 p-2 bg-cyber-cyan/20 rounded-full text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all disabled:opacity-50"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </BentoCard>

            <div className="grid grid-cols-1 gap-4">
                {theories.map((theory) => (
                    <div key={theory._id} className="p-6 bg-glass-medium border border-glass-border rounded-xl backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-4">
                            <Image src={theory.user.avatar} alt={theory.user.name} width={40} height={40} className="rounded-full border border-cyber-cyan" />
                            <div>
                                <div className="font-bold text-white text-sm">{theory.user.name}</div>
                                <div className="text-xs text-cyber-cyan font-mono">{theory.user.rank}</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{theory.content}</p>
                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                            <button className="flex items-center gap-2 hover:text-cyber-green transition-colors">
                                <ThumbsUp size={14} /> {theory.upvotes}
                            </button>
                            <span>{new Date(theory.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
