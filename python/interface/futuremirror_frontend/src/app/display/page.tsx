'use client';

import React from 'react';
import Image from "next/image";
// Adjust the import path to be relative to your current file location
import logo from "../components/futureself.png";  // Update this path based on your file structure

export default function DisplayPage() {

    // get images from local storage
    const images = JSON.parse(localStorage.getItem("images") || "");

    let healthy_image = ""
    let negative_image = ""
    let current_image = ""

    for (let i = 0; i < images.length; i++) {
        if (images[i].prompt_type = "healthy_prompt") {
            healthy_image = images[i].image_path
        } else if (images[i].prompt_type = "unhealthy_prompt") {
            negative_image = images[i].image_path
        } else {
            current_image = images[i].image_path
        }
    }

    const imageData = [
        {
            id: 1,
            url: healthy_image,  // Place these images in your public folder
            title: 'Healthier Future You',
            description: 'How your future self could look with positive lifestyle changes.',
            bgColor: 'bg-[#DFF2B6]',
        },
        {
            id: 2,
            url: current_image,
            title: 'Current You',
            description: 'Your current state based on your uploaded photo.',
            bgColor: 'bg-[#EAF2CE]',
        },
        {
            id: 3,
            url: negative_image,
            title: 'Decline in Wellness',
            description: 'The potential impact of negative lifestyle changes.',
            bgColor: 'bg-[#F8E8E8]',
        },
    ];

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-8"
            style={{ backgroundColor: '#85BF4B' }} // Set background color directly
        >
            {/* Main container */}
            <div className="w-full max-w-7xl">
                {/* Logo */}
                <div className="flex justify-center mb-12">
                    <Image
                        src={logo}
                        alt="Future Mirror Logo"
                        width={200}
                        height={50}
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Header */}
                <div className="text-center mb-16"
                     style={{paddingBottom:"10x"}}>
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
        </div>
    );
}