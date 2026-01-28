import { CourseViewer } from "@/components/course/course-viewer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-indigo-950/20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent pointer-events-none"></div>

      <main className="relative z-10 container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <CourseViewer />
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8 mt-12">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          
        </div>
      </footer>
    </div>
  );
}
