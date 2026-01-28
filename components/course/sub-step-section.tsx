"use client";

import { memo, useState } from "react";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TopicCard } from "./topic-card";
import type { SubStep } from "@/lib/types";

interface SubStepSectionProps {
    subStep: SubStep;
    stepNo: number;
}

function SubStepSectionComponent({ subStep, stepNo }: SubStepSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const topicCount = subStep.topics.length;

    const easyCount = subStep.topics.filter((t) => t.difficulty === 0).length;
    const mediumCount = subStep.topics.filter((t) => t.difficulty === 1).length;
    const hardCount = subStep.topics.filter((t) => t.difficulty === 2).length;

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/sub">
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-left transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04]">
                <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5 transition-colors group-hover/sub:bg-white/10">
                        {isOpen ? (
                            <ChevronDown className="h-4 w-4 text-zinc-400" />
                        ) : (
                            <ChevronRight className="h-4 w-4 text-zinc-400" />
                        )}
                    </div>

                    <span className="text-xs font-medium text-zinc-500">
                        {stepNo}.{subStep.sub_step_no}
                    </span>
                    <span className="text-sm font-medium text-zinc-200">
                        {subStep.sub_step_title.replace(/\n\s+/g, " ").trim()}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1.5">
                        {easyCount > 0 && (
                            <span className="text-xs text-emerald-400">{easyCount}E</span>
                        )}
                        {mediumCount > 0 && (
                            <span className="text-xs text-amber-400">{mediumCount}M</span>
                        )}
                        {hardCount > 0 && (
                            <span className="text-xs text-rose-400">{hardCount}H</span>
                        )}
                    </div>

                    <Badge
                        variant="outline"
                        className="border-white/10 bg-white/5 text-zinc-400"
                    >
                        {topicCount} {topicCount === 1 ? "topic" : "topics"}
                    </Badge>
                </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-2 space-y-2 pl-4 sm:pl-8">
                {subStep.topics.map((topic, idx) => (
                    <TopicCard key={topic.id} topic={topic} index={idx} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
}

export const SubStepSection = memo(SubStepSectionComponent);
