"use client";

import { useCourseData } from "@/lib/use-course-data";
import { StatsHeader } from "./stats-header";
import { StepAccordion } from "./step-accordion";
import { LoadingSkeleton } from "./loading-skeleton";
import { AlertCircle } from "lucide-react";

export function CourseViewer() {
    const { data, isLoading, error, stats } = useCourseData();

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    if (error) {
        return (
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-8 text-center">
                <AlertCircle className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-rose-400 mb-2">
                    Failed to load course data
                </h2>
                <p className="text-zinc-400">{error}</p>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
                <p className="text-zinc-400">No course data available.</p>
            </div>
        );
    }

    return (
        <div>
            <StatsHeader stats={stats} />

            <div className="space-y-4">
                {data.map((step) => (
                    <StepAccordion key={step.step_no} step={step} />
                ))}
            </div>
        </div>
    );
}
