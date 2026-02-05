import { BentoCard } from "@/components/bento/BentoCard";

export default function Loading() {
    return (
        <main className="min-h-screen p-8 pb-32 flex items-center justify-center">
            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">

                {/* Left Col Skeleton */}
                <div className="md:col-span-1 space-y-6">
                    <div className="h-[500px] w-full bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                    <div className="h-20 w-full bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                </div>

                {/* Right Col Skeleton */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-3 row-span-2 h-[200px] bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                    <div className="col-span-1 h-40 bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                    <div className="col-span-1 h-40 bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                    <div className="col-span-1 h-40 bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                    <div className="col-span-3 h-60 bg-void-800 rounded-3xl border border-glass-border opacity-50" />
                </div>

            </div>
        </main>
    );
}
