"use client";

export function LoadingSkeleton() {
    return (
        <div className="animate-pulse space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <div className="h-6 w-48 bg-white/10 rounded-lg mb-4"></div>
                <div className="h-10 w-80 bg-white/10 rounded-lg mb-2"></div>
                <div className="h-5 w-96 bg-white/5 rounded-lg"></div>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                    >
                        <div className="h-4 w-16 bg-white/10 rounded mb-2"></div>
                        <div className="h-8 w-12 bg-white/10 rounded"></div>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-white/10 rounded-xl"></div>
                            <div className="flex-1">
                                <div className="h-4 w-24 bg-white/10 rounded mb-2"></div>
                                <div className="h-6 w-64 bg-white/10 rounded"></div>
                            </div>
                            <div className="h-6 w-24 bg-white/5 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
