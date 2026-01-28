"use client";

import { useState, useEffect, useMemo } from "react";
import type { CourseData, Step, Topic } from "./types";

interface UseCourseDataReturn {
    data: CourseData | null;
    isLoading: boolean;
    error: string | null;
    stats: {
        totalSteps: number;
        totalSubSteps: number;
        totalTopics: number;
        easyCount: number;
        mediumCount: number;
        hardCount: number;
    };
}

export function useCourseData(): UseCourseDataReturn {
    const [data, setData] = useState<CourseData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            try {
                const response = await fetch("/striver-a2z.json", {
                    cache: "force-cache",
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const jsonData: CourseData = await response.json();

                if (isMounted) {
                    setData(jsonData);
                    setIsLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An error occurred");
                    setIsLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);
    const stats = useMemo(() => {
        if (!data) {
            return {
                totalSteps: 0,
                totalSubSteps: 0,
                totalTopics: 0,
                easyCount: 0,
                mediumCount: 0,
                hardCount: 0,
            };
        }

        let totalSubSteps = 0;
        let totalTopics = 0;
        let easyCount = 0;
        let mediumCount = 0;
        let hardCount = 0;

        data.forEach((step: Step) => {
            totalSubSteps += step.sub_steps.length;
            step.sub_steps.forEach((subStep) => {
                totalTopics += subStep.topics.length;
                subStep.topics.forEach((topic: Topic) => {
                    if (topic.difficulty === 0) easyCount++;
                    else if (topic.difficulty === 1) mediumCount++;
                    else if (topic.difficulty === 2) hardCount++;
                });
            });
        });

        return {
            totalSteps: data.length,
            totalSubSteps,
            totalTopics,
            easyCount,
            mediumCount,
            hardCount,
        };
    }, [data]);

    return { data, isLoading, error, stats };
}
