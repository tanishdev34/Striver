"use client";

import { memo, useState, useEffect } from "react";
import { BookOpen, Layers, Target, Zap, TrendingUp, Flame, CheckCircle2, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const STORAGE_KEY = "striver-completed-topics";

function getCompletedCount(): number {
    if (typeof window === "undefined") return 0;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored).length : 0;
    } catch {
        return 0;
    }
}

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
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        // Initialize from localStorage
        setCompletedCount(getCompletedCount());

        // Listen for changes from topic cards
        const handleChange = () => {
            setCompletedCount(getCompletedCount());
        };

        window.addEventListener("topics-completion-changed", handleChange);
        return () => {
            window.removeEventListener("topics-completion-changed", handleChange);
        };
    }, []);

    const remainingCount = stats.totalTopics - completedCount;
    const progressPercentage = stats.totalTopics > 0 ? (completedCount / stats.totalTopics) * 100 : 0;

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

            {/* Progress Tracker */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent p-6 mb-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl"></div>

                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider">Done</p>
                                <p className="text-2xl font-bold text-emerald-400">{completedCount}</p>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <Circle className="h-5 w-5 text-zinc-500" />
                            <div>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider">Left</p>
                                <p className="text-2xl font-bold text-zinc-300">{remainingCount}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-zinc-400">Progress</span>
                            <span className="text-sm font-semibold text-emerald-400">{progressPercentage.toFixed(1)}%</span>
                        </div>
                        <Progress value={progressPercentage} className="h-3" />
                    </div>
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
