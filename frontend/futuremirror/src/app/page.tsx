// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-8 pb-20
      font-[family-name:var(--font-geist-sans)] bg-black"
        >
            <main className="flex flex-col gap-8 items-center w-full max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 text-white">Future Mirror</h1>

                <div className="text-center max-w-lg">
                    <p className="text-xl mb-8 text-gray-300">
                        Help us shape the future by participating in our research survey.
                        Your insights matter!
                    </p>
                </div>

                <div className="flex gap-6 items-center flex-col sm:flex-row">
                    <Link
                        href="/survey"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-white text-black gap-2 hover:bg-gray-200 text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10"
                    >
                        Start Survey
                    </Link>
                    <a
                        className="rounded-full border border-solid border-gray-500 transition-colors flex items-center justify-center hover:bg-gray-800 hover:border-transparent text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-10 text-white"
                        href="#learn-more"
                    >
                        Learn More
                    </a>
                </div>

                <div className="mt-10 p-8 rounded-lg border border-solid border-gray-700 max-w-lg bg-gray-900 text-white">
                    <h2 className="text-2xl font-semibold mb-6">What to expect:</h2>
                    <ol className="list-inside list-decimal text-lg space-y-4">
                        <li>Short 5-minute questionnaire</li>
                        <li>Questions about future technology</li>
                        <li>Anonymous and confidential</li>
                    </ol>
                </div>
            </main>
        </div>
    );
}
