'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // For navigation to another page

export default function Survey() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    const router = useRouter(); // Initialize router for navigation

    const questions = [
        {
            id: 1,
            question: 'Dietary Habits',
            options: [
                {
                    text: 'Rarely includes fresh fruits, vegetables, lean proteins, and whole grains in meals, and frequently consumes high-sodium or sugary foods',
                    score: 0,
                },
                {
                    text: 'Occasionally includes fresh fruits, vegetables, lean proteins, and whole grains in meals, while limiting high-sodium or sugary foods',
                    score: 1,
                },
                {
                    text: 'Regularly includes fresh fruits, vegetables, lean proteins, and whole grains in meals, and avoids high-sodium or sugary foods',
                    score: 2,
                },
            ],
        },
        {
            id: 2,
            question: 'Physical Activity',
            options: [
                {
                    text: 'Rarely engages in physical activity',
                    score: 0,
                },
                {
                    text: 'Occasionally engages in moderate or vigorous activity, but not consistently meeting guidelines (150 minutes of moderate or 75 minutes of vigorous activity weekly)',
                    score: 1,
                },
                {
                    text: 'Regularly meets or exceeds activity guidelines',
                    score: 2,
                },
            ],
        },
        {
            id: 3,
            question: 'Smoking Habits',
            options: [
                { text: 'Currently smokes', score: 0 },
                { text: 'Quit smoking within the past year', score: 1 },
                { text: 'Never smoked or quit smoking more than a year ago', score: 2 },
            ],
        },
        {
            id: 4,
            question: 'Alcohol Consumption',
            options: [
                { text: 'Drinks four or more alcoholic beverages weekly', score: 0 },
                { text: 'Drinks 2-3 alcoholic beverages weekly', score: 1 },
                { text: 'Drinks 0-1 alcoholic beverages weekly', score: 2 },
            ],
        },
        {
            id: 5,
            question: 'Stress Management',
            options: [
                {
                    text: 'Frequently experiences stress that disrupts daily life and lacks strategies to manage it',
                    score: 0,
                },
                {
                    text: 'Occasionally experiences stress that impacts functioning but has some management strategies',
                    score: 1,
                },
                {
                    text: 'Effectively manages stress with minimal impact on daily life',
                    score: 2,
                },
            ],
        },
        {
            id: 6,
            question: 'Social Connections',
            options: [
                {
                    text: 'Rarely interacts with friends or has close personal connections outside of family',
                    score: 0,
                },
                {
                    text: 'Occasionally spends time with close friends or has some meaningful connections outside of family',
                    score: 1,
                },
                {
                    text: 'Regularly maintains close friendships and has meaningful support networks',
                    score: 2,
                },
            ],
        },
        {
            id: 7,
            question: 'Sense of Purpose',
            options: [
                { text: 'Frequently feels life lacks meaning or purpose', score: 0 },
                {
                    text: 'Occasionally struggles with purpose but has some meaningful activities or goals',
                    score: 1,
                },
                { text: 'Consistently feels life has meaning and purpose', score: 2 },
            ],
        },
        {
            id: 8,
            question: 'Sleep Habits',
            options: [
                {
                    text: 'Consistently sleeps less than 7 hours per night or has untreated sleep disturbances',
                    score: 0,
                },
                {
                    text: 'Occasionally gets 7-8 hours of sleep or manages sleep disturbances inconsistently',
                    score: 1,
                },
                {
                    text: 'Regularly gets 7-8 hours of restful sleep and addresses any disturbances effectively',
                    score: 2,
                },
            ],
        },
        {
            id: 9,
            question: 'Weight Management',
            options: [
                {
                    text: 'Frequently experiences significant weight fluctuations or finds it challenging to maintain a healthy weight range',
                    score: 0,
                },
                {
                    text: 'Maintains a stable weight but occasionally struggles with diet or physical activity',
                    score: 1,
                },
                {
                    text: 'Maintains a healthy weight consistently through balanced diet and exercise',
                    score: 2,
                },
            ],
        },
        {
            id: 10,
            question: 'Healthy Choices',
            options: [
                {
                    text: 'Rarely chooses healthy options when dining out or grocery shopping',
                    score: 0,
                },
                {
                    text: 'Occasionally makes healthy choices, such as opting for lower-sodium or sugar-free options',
                    score: 1,
                },
                {
                    text: 'Regularly makes conscious decisions to prioritize healthy choices in meals and snacks',
                    score: 2,
                },
            ],
        },
    ];

    const handleAnswer = (score: number) => {
        setAnswers({ ...answers, [currentQuestion]: score });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
        console.log('Survey answers:', answers);
        console.log('Total Score:', totalScore);

        // Navigate to the photo upload page after submitting the survey
        router.push('/photo');
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-between p-8 pb-20 font-[family-name:var(--font-geist-sans)]"
            style={{ backgroundColor: '#85bf4b' }} // Branding background color
        >
            <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col gap-8 justify-center">
                {/* Header */}
                <div className="flex w-full justify-between items-center text-white">
                    <Link href="/" className="text-lg hover:underline hover:underline-offset-4">
                        ← Back to Home
                    </Link>
                    <span className="text-lg">
            Question {currentQuestion + 1} of {questions.length}
          </span>
                </div>

                {/* Question Card */}
                <div
                    className="w-full rounded-lg border border-[#76A646] p-8"
                    style={{
                        color: '#000',
                        backgroundColor: 'rgba(223,242,182,0.68)',
                    }}
                >
                    <h2 className="text-3xl font-semibold mb-8">{questions[currentQuestion].question}</h2>
                    <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.score)}
                                className="w-full text-left p-6 rounded-lg border border-[#76A646] bg-[#EAF2CE] hover:bg-[#86BF4A] transition-colors"
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>

                    {/* Submit Button */}
                    {currentQuestion === questions.length - 1 && Object.keys(answers).length === questions.length && (
                        <button
                            onClick={handleSubmit}
                            className="mt-8 rounded-full border border-solid
                            border-transparent transition-colors flex items-center justify-center
                            bg-[#467B12] text-white gap-2 hover:bg-[#5E9440] text-lg h-14 px-8 w-full"
                        >
                            Next Step to See Your Future Self
                        </button>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-[#EAF2CE] rounded-lg border border-[#76A646] p-4">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                            className="bg-[#000000] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full max-w-4xl mx-auto mt-8 flex gap-6 flex-wrap items-center justify-center text-lg text-white">
                <div className="flex gap-4">
                    <a href="/privacy" className="hover:underline hover:underline-offset-4">
                        Privacy Policy
                    </a>
                    <span>•</span>
                    <a href="/terms" className="hover:underline hover:underline-offset-4">
                        Terms of Use
                    </a>
                </div>
            </footer>
        </div>
    );
}