"use client";

import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { SubStepSection } from "./sub-step-section";
import type { Step } from "@/lib/types";

// Step icons/emojis based on step number
const STEP_ICONS: Record<number, string> = {
    1: "🚀",
    2: "📊",
    3: "📚",
    4: "🔍",
    5: "🎯",
    6: "🌳",
    7: "⬅️",
    8: "🔗",
    9: "📈",
    10: "💡",
    11: "🧮",
    12: "🎨",
    13: "🔧",
};

interface StepAccordionProps {
    step: Step;
}

function StepAccordionComponent({ step }: StepAccordionProps) {
    const totalTopics = step.sub_steps.reduce(
        (acc, subStep) => acc + subStep.topics.length,
        0
    );

    const icon = STEP_ICONS[step.step_no] || "📘";

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem
                value={`step-${step.step_no}`}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent backdrop-blur-xl overflow-hidden"
            >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/[0.02] transition-colors [&[data-state=open]>div>.step-indicator]:bg-gradient-to-br [&[data-state=open]>div>.step-indicator]:from-violet-500/20 [&[data-state=open]>div>.step-indicator]:to-indigo-500/20">
                    <div className="flex items-center gap-4 text-left w-full">

                        <div className="step-indicator flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl transition-all duration-300">
                            {icon}
                        </div>


                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                                    Step {step.step_no}
                                </span>
                            </div>
                            <h2 className="text-lg font-semibold text-white truncate pr-4">
                                {step.step_title}
                            </h2>
                        </div>


                        <div className="hidden sm:flex items-center gap-4 shrink-0 pr-4">
                            <Badge variant="outline" className="border-white/10 bg-white/5 text-zinc-300">
                                {step.sub_steps.length} {step.sub_steps.length === 1 ? "section" : "sections"}
                            </Badge>
                            <Badge variant="outline" className="border-violet-500/20 bg-violet-500/10 text-violet-300">
                                {totalTopics} problems
                            </Badge>
                        </div>
                    </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6">
                    <div className="mt-2 space-y-3">
                        {step.sub_steps.map((subStep) => (
                            <SubStepSection
                                key={`${step.step_no}-${subStep.sub_step_no}`}
                                subStep={subStep}
                                stepNo={step.step_no}
                            />
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export const StepAccordion = memo(StepAccordionComponent);
