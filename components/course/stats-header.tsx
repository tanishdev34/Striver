"use client";

import { memo } from "react";
import { BookOpen, Layers, Target, Zap, TrendingUp, Flame } from "lucide-react";

interface StatsHeaderProps {
    stats: {
        totalSteps: number;
        totalSubSteps: number;
        totalTopics: number;
        easyCount: number;
        mediumCount: number;
        hardCount: number;
    };
}

function StatsHeaderComponent({ stats }: StatsHeaderProps) {
    return (
        <div className="mb-8">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-purple-500/10 p-8 mb-6">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>

                <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/25">
                            <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-violet-300 uppercase tracking-wider">
                            Complete DSA Roadmap
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        Strover&apos;s A2Z DSA Course
                    </h1>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Master Data Structures and Algorithms with this comprehensive sheet covering everything from basics to advanced topics.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <Layers className="h-4 w-4 text-violet-400" />
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Steps</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.totalSteps}</p>
                </div>


                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-indigo-400" />
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Sections</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.totalSubSteps}</p>
                </div>


                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-purple-400" />
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Problems</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.totalTopics}</p>
                </div>


                <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4 backdrop-blur-sm hover:bg-emerald-500/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs text-emerald-400/70 uppercase tracking-wider">Easy</span>
                    </div>
                    <p className="text-2xl font-bold text-emerald-400">{stats.easyCount}</p>
                </div>


                <div className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-4 backdrop-blur-sm hover:bg-amber-500/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-amber-400" />
                        <span className="text-xs text-amber-400/70 uppercase tracking-wider">Medium</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-400">{stats.mediumCount}</p>
                </div>


                <div className="rounded-2xl border border-rose-500/10 bg-rose-500/5 p-4 backdrop-blur-sm hover:bg-rose-500/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <Flame className="h-4 w-4 text-rose-400" />
                        <span className="text-xs text-rose-400/70 uppercase tracking-wider">Hard</span>
                    </div>
                    <p className="text-2xl font-bold text-rose-400">{stats.hardCount}</p>
                </div>
            </div>
        </div>
    );
}

export const StatsHeader = memo(StatsHeaderComponent);
