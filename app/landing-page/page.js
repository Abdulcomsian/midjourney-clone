"use client"

import { ArrowRight, ChevronLeft, ChevronRight, ImagePlus, Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const LandingPage = ({ handleShow, handleRegisterShow }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showcaseItems = [
        {
            prompt: "A cyberpunk cityscape at sunset",
            description: "Create stunning futuristic cityscapes with neon lights",
        },
        {
            prompt: "A magical forest with glowing butterflies",
            description: "Generate enchanting natural scenes with fantasy elements",
        },
        {
            prompt: "An astronaut riding a horse on Mars",
            description: "Blend different concepts into unique compositions",
        },
        {
            prompt: "A steampunk train station",
            description: "Design alternative historical scenes with intricate details",
        },
        {
            prompt: "A dragon made of crystal in a cave",
            description: "Create mythical creatures with unique materials",
        },
        {
            prompt: "Northern lights over a mountain range",
            description: "Generate breathtaking natural phenomena",
        },
        {
            prompt: "A floating island with waterfalls",
            description: "Design impossible landscapes that defy reality",
        },
        {
            prompt: "A robot tending to a zen garden",
            description: "Mix contemporary and traditional elements",
        }
    ];

    // Auto-scroll function
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === showcaseItems.length - 3 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [showcaseItems.length]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? showcaseItems.length - 3 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === showcaseItems.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navigation */}
            <nav className="border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <ImagePlus className="h-8 w-8 text-orange-500" />
                            <span className="ml-2 text-xl font-bold">ImageAI</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition" onClick={handleShow}>
                                Sign In
                            </button>
                            <button className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition" onClick={handleRegisterShow}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
                            Transform Your
                            <span className="text-orange-500"> Words</span> Into
                            <span className="text-orange-500"> Art</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Create stunning images from text descriptions using advanced AI.
                            Turn your imagination into reality with just a few words.
                        </p>
                        <div className="flex justify-center">
                            <button className="px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 transition flex items-center text-lg font-medium">
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Showcase Slider */}
            <div className="bg-gray-800 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Endless <span className="text-orange-500">Possibilities</span>
                    </h2>

                    <div className="relative">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 p-2 rounded-full bg-gray-900/80 hover:bg-gray-900 transition"
                        >
                            <ChevronLeft className="h-6 w-6 text-white" />
                        </button>

                        {/* Slider Container */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                            >
                                {showcaseItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-1/3 flex-shrink-0 px-4"
                                    >
                                        <div className="group relative overflow-hidden rounded-lg">
                                            <img
                                                src={`/api/placeholder/600/400`}
                                                alt={item.prompt}
                                                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-80" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <p className="text-sm text-gray-300 mb-2">
                                                    Prompt:
                                                </p>
                                                <p className="font-medium">
                                                    "{item.prompt}"
                                                </p>
                                                <p className="text-sm text-gray-300 mt-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 p-2 rounded-full bg-gray-900/80 hover:bg-gray-900 transition"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    {/* Slider Progress Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: showcaseItems.length - 2 }, (_, i) => (
                            <button
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-orange-500' : 'bg-gray-600'
                                    }`}
                                onClick={() => setCurrentIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional Features */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-900 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <Sparkles className="h-6 w-6 text-orange-500 mr-2" />
                                Advanced Style Control
                            </h3>
                            <p className="text-gray-300">
                                Fine-tune your generations with detailed style parameters. Control artistic style,
                                lighting, composition, and more with our advanced prompting system.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 flex items-center">
                                <ImagePlus className="h-6 w-6 text-orange-500 mr-2" />
                                Batch Generation
                            </h3>
                            <p className="text-gray-300">
                                Generate multiple variations of your concept in one go. Perfect for
                                exploring different interpretations of your creative vision.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <ImagePlus className="h-6 w-6 text-orange-500" />
                            <span className="ml-2 text-lg font-bold">ImageAI</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-gray-300 hover:text-white transition">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;