"use client";

import { memo } from "react";
import { ExternalLink, Youtube, FileText, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Topic } from "@/lib/types";
import { DIFFICULTY_LABELS, DIFFICULTY_COLORS } from "@/lib/types";

interface TopicCardProps {
    topic: Topic;
    index: number;
}

function TopicCardComponent({ topic, index }: TopicCardProps) {
    const difficultyConfig = DIFFICULTY_COLORS[topic.difficulty] || DIFFICULTY_COLORS[0];
    const difficultyLabel = DIFFICULTY_LABELS[topic.difficulty] || "Easy";

    return (
        <div className="group relative flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
            <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sm font-medium text-zinc-400">
                    {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-medium text-zinc-100 group-hover:text-white transition-colors">
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
    );
}
export const TopicCard = memo(TopicCardComponent);
