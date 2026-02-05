import Link from "next/link";
import { BentoCard } from "@/components/bento/BentoCard";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen p-8 flex items-center justify-center bg-void-pure">
            <BentoCard className="max-w-md w-full text-center space-y-6 bg-glass-medium border-cyber-yellow/20">

                <div className="flex justify-center">
                    <div className="p-4 bg-cyber-yellow/10 rounded-full text-cyber-yellow">
                        <FileQuestion size={48} />
                    </div>
                </div>

                <h2 className="text-4xl font-heading font-bold text-white uppercase">
                    404: Lost Data
                </h2>

                <p className="font-mono text-sm text-gray-400">
                    The artifact you are looking for has been purged or does not exist in this timeline.
                </p>

                <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-yellow text-black rounded-full font-bold hover:bg-yellow-400 transition-colors">
                    <Home size={18} /> Return to Grid
                </Link>

            </BentoCard>
        </main>
    );
}
