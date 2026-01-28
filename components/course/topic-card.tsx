"use client";

import { memo, useState, useEffect } from "react";
import { ExternalLink, Youtube, FileText, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Topic } from "@/lib/types";
import { DIFFICULTY_LABELS, DIFFICULTY_COLORS } from "@/lib/types";

const STORAGE_KEY = "striver-completed-topics";

function getCompletedTopics(): Set<string> {
    if (typeof window === "undefined") return new Set();
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
        return new Set();
    }
}

function saveCompletedTopics(topics: Set<string>) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...topics]));
    } catch {
        // Silently fail if localStorage is not available
    }
}

interface TopicCardProps {
    topic: Topic;
    index: number;
}

function TopicCardComponent({ topic, index }: TopicCardProps) {
    const difficultyConfig = DIFFICULTY_COLORS[topic.difficulty] || DIFFICULTY_COLORS[0];
    const difficultyLabel = DIFFICULTY_LABELS[topic.difficulty] || "Easy";

    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const completed = getCompletedTopics();
        setIsCompleted(completed.has(topic.id));
    }, [topic.id]);

    const handleCheckboxChange = (checked: boolean) => {
        setIsCompleted(checked);
        const completed = getCompletedTopics();
        if (checked) {
            completed.add(topic.id);
        } else {
            completed.delete(topic.id);
        }
        saveCompletedTopics(completed);
        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent("topics-completion-changed"));
    };

    return (
        <div className={`group relative rounded-xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] ${isCompleted ? "opacity-60" : ""}`}>
            {/* Mobile Layout (vertical card) */}
            <div className="flex flex-col gap-3 sm:hidden">
                <div className="flex items-start gap-3">
                    <Checkbox
                        checked={isCompleted}
                        onCheckedChange={handleCheckboxChange}
                        className="mt-0.5"
                    />
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-medium text-zinc-400">
                        {index + 1}
                    </div>
                    <Badge
                        variant="outline"
                        className={`shrink-0 border ${difficultyConfig.border} ${difficultyConfig.bg} ${difficultyConfig.text} text-xs font-medium`}
                    >
                        {difficultyLabel}
                    </Badge>
                </div>
                <h4 className={`text-sm font-medium text-zinc-100 group-hover:text-white transition-colors ${isCompleted ? "line-through text-zinc-500" : ""}`}>
                    {topic.question_title}
                </h4>
                <div className="flex items-center gap-1 flex-wrap">
                    {topic.yt_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
                            asChild
                        >
                            <a href={topic.yt_link} target="_blank" rel="noopener noreferrer" title="YouTube">
                                <Youtube className="h-4 w-4" />
                            </a>
                        </Button>
                    )}

                    {topic.lc_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-orange-400 hover:bg-orange-500/10"
                            asChild
                        >
                            <a href={topic.lc_link} target="_blank" rel="noopener noreferrer" title="LeetCode">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    )}

                    {topic.post_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-blue-400 hover:bg-blue-500/10"
                            asChild
                        >
                            <a href={topic.post_link} target="_blank" rel="noopener noreferrer" title="Article">
                                <FileText className="h-4 w-4" />
                            </a>
                        </Button>
                    )}

                    {topic.editorial_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-purple-400 hover:bg-purple-500/10"
                            asChild
                        >
                            <a href={topic.editorial_link} target="_blank" rel="noopener noreferrer" title="Editorial">
                                <BookOpen className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>

            {/* Desktop Layout (horizontal) */}
            <div className="hidden sm:flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    <Checkbox
                        checked={isCompleted}
                        onCheckedChange={handleCheckboxChange}
                    />
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-medium text-zinc-400">
                        {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className={`truncate text-sm font-medium text-zinc-100 group-hover:text-white transition-colors ${isCompleted ? "line-through text-zinc-500" : ""}`}>
                            {topic.question_title}
                        </h4>
                    </div>
                    <Badge
                        variant="outline"
                        className={`shrink-0 border ${difficultyConfig.border} ${difficultyConfig.bg} ${difficultyConfig.text} text-xs font-medium`}
                    >
                        {difficultyLabel}
                    </Badge>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    {topic.yt_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
                            asChild
                        >
                            <a href={topic.yt_link} target="_blank" rel="noopener noreferrer" title="YouTube">
                                <Youtube className="h-4 w-4" />
                            </a>
                        </Button>
                    )}

                    {topic.lc_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-orange-400 hover:bg-orange-500/10"
                            asChild
                        >
                            <a href={topic.lc_link} target="_blank" rel="noopener noreferrer" title="LeetCode">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    )}

                    {topic.post_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-blue-400 hover:bg-blue-500/10"
                            asChild
                        >
                            <a href={topic.post_link} target="_blank" rel="noopener noreferrer" title="Article">
                                <FileText className="h-4 w-4" />
                            </a>
                        </Button>
                    )}

                    {topic.editorial_link && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-zinc-500 hover:text-purple-400 hover:bg-purple-500/10"
                            asChild
                        >
                            <a href={topic.editorial_link} target="_blank" rel="noopener noreferrer" title="Editorial">
                                <BookOpen className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
export const TopicCard = memo(TopicCardComponent);
