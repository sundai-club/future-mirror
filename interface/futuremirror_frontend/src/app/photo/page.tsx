"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import router for navigation
import { useState } from 'react';
import axios from 'axios';

export default function PhotoUploadPage() {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const router = useRouter(); // Initialize router

    const BACKEND_URL = "https://future-mirror-199983032721.us-central1.run.app/"


    const handleSubmit = async () => {
        if (uploadedFile) {
          try {
            // Create the file data
            const formData = new FormData();
            formData.append('file', uploadedFile);
      
            // Send a POST request to the server to validate the file
            const response = await axios.post(BACKEND_URL + '/upload_image', formData);
      
            // Navigate to the /display page on successful response
            if (response.status === 200) {
              const router = useRouter();
              router.push('/display');
            } else {
              alert('Failed to upload file. Please try again.');
            }
          } catch (error) {
            console.error('Error sending request:', error);
            alert('Failed to upload file. Please try again.');
          }
        } else {
          alert('Please upload a photo before proceeding.');
        }

        // get the answers from local storage
        const answers = localStorage.getItem("answers") || "" + localStorage.getItem("totalScore") || "0";

        try {
        const response = await axios.post(BACKEND_URL + "/get_images", {
            answers,
        });
        console.log("Survey submitted successfully:", response.data);

        // Navigate to the photo upload page after submitting the survey
        const router = useRouter();
        router.push("/photo");
        } catch (error) {
        console.error("Error submitting survey:", error);
        }
    };

    const handleFileUpload = async (files: FileList | null) => {
        if (files && files.length > 0) {
            setUploadedFile(files[0]);
            setUploadSuccess(true);
        }
        
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        handleFileUpload(e.dataTransfer.files);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-8 pb-20
      font-[family-name:var(--font-geist-sans)]"
            style={{ backgroundColor: '#85BF4B' }} // Branding background color
        >
            <main className="flex flex-col gap-8 items-center w-full max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-white">Upload Your Photo</h1>
                    <p className="text-xl mb-8 text-[#EAF2CE]">
                        Help us create a personalized visualization of your future self by uploading your current photo.
                    </p>
                </div>

                {/* Drag-and-Drop Area */}
                {!uploadSuccess && (
                    <div
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="w-full h-64 rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center transition-colors bg-[#DFF2B6] relative"
                    >
                        <p className="text-lg text-gray-700">Drag and drop your photo here</p>
                        <p className="text-sm text-gray-500 mt-2">or click to upload</p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e.target.files)}
                            className="absolute w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                )}

                {/* Upload Success Message */}
                {uploadSuccess && (
                    <div className="flex items-center gap-4 bg-[#EAF2CE] py-4 px-6 rounded-md shadow-lg w-full max-w-lg">
                        <div className="w-12 h-12 bg-[#76A646] text-white rounded-full flex items-center justify-center">
                            <svg
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            >
                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-[#76A646] text-xl font-medium">Upload Successful</span>
                    </div>
                )}

                {/* Display Uploaded Image */}
                {uploadedFile && (
                    <div className="mt-6">
                        <p className="text-lg text-white mb-4">Uploaded Photo:</p>
                        <img
                            src={URL.createObjectURL(uploadedFile)}
                            alt="Uploaded Preview"
                            className="rounded-md max-w-full max-h-96 shadow-md"
                        />
                    </div>
                )}

                {/* Call to Action */}
                {uploadSuccess && (
                    <button
                        className="mt-8 rounded-full bg-[#76A646] text-white px-8 py-4 text-lg font-semibold hover:bg-[#5E9440] transition-all"
                        onClick={handleSubmit}

                    >
                        Generate Future Self
                    </button>
                )}

                {/* Back Link */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="text-lg text-white underline hover:text-[#DFF2B6]"        >
                        ← Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
}