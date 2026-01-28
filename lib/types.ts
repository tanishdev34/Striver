export interface Topic {
    id: string;
    step_no: number;
    sub_step_no: number;
    sl_no: number;
    step_title: string;
    sub_step_title: string;
    question_title: string;
    post_link: string | null;
    yt_link: string | null;
    plus_link: string | null;
    editorial_link: string | null;
    lc_link: string | null;
    company_tags: string | null;
    difficulty: number;
    ques_topic: string;
}

export interface SubStep {
    sub_step_no: number;
    sub_step_title: string;
    topics: Topic[];
}

export interface Step {
    step_no: number;
    step_title: string;
    sub_steps: SubStep[];
}

export type CourseData = Step[];

export const DIFFICULTY_LABELS: Record<number, string> = {
    0: "Easy",
    1: "Medium",
    2: "Hard",
};

export const DIFFICULTY_COLORS: Record<number, { bg: string; text: string; border: string }> = {
    0: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20",
    },
    1: {
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        border: "border-amber-500/20",
    },
    2: {
        bg: "bg-rose-500/10",
        text: "text-rose-400",
        border: "border-rose-500/20",
    },
};
