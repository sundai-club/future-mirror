'use client';

import Image from "next/image";
// Adjust the import path to be relative to your current file location
//import logo from "./components/futureself.png:";  // Update this path based on your file structure

export default function DisplayPage() {
    const imageData = [
        {
            id: 1,
            url: '/images/positive-image.jpg',  // Place these images in your public folder
            title: 'Healthier Future You',
            description: 'How your future self could look with positive lifestyle changes.',
            bgColor: 'bg-[#DFF2B6]',
        },
        {
            id: 2,
            url: '/images/uploaded-image.jpg',
            title: 'Current You',
            description: 'Your current state based on your uploaded photo.',
            bgColor: 'bg-[#EAF2CE]',
        },
        {
            id: 3,
            url: '/images/negative-image.jpg',
            title: 'Decline in Wellness',
            description: 'The potential impact of negative lifestyle changes.',
            bgColor: 'bg-[#F8E8E8]',
        },
    ];

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-8"
            style={{ backgroundColor: '#85BF4B' }} > // Set background color directly
            {/* Main container */}
            <div className="w-full max-w-7xl">
                {/* Logo
                <div className="flex justify-center mb-12">
                    <Image
                        src={logo}
                        alt="Future Mirror Logo"
                        width={400}
                        height={200}
                        priority
                        className="object-contain"
                    />*/}
                </div>

                {/* Header */}
                <div className="text-center mb-16"
                     style={{paddingBottom:"5%"}}>
                    <h1 className="text-4xl font-bold text-white">Your Lifestyle Projections</h1>
                    <p className="text-xl text-[#EAF2CE] mt-4">
                        See how your choices today could shape your tomorrow.
                    </p>
                </div>


                {/* Images row - centered */}
                <div className="flex flex-row justify-center gap-6">
                    {imageData.map((item) => (
                        <div
                            key={item.id}
                            className={`w-full max-w-sm ${item.bgColor} p-6 rounded-lg shadow-lg`}
                        >
                            <div className="aspect-[3/4] w-full overflow-hidden rounded-md mb-4 relative">
                                <Image
                                    src={item.url}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    placeholder="blur"
                                    blurDataURL="/placeholder-image.jpg" // Add a small placeholder image
                                />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-center"
                            style={{color:"#000000"}}>
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-700 text-center"
                               style={{color:"rgba(0,0,0,0.7)"}}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

    );
}