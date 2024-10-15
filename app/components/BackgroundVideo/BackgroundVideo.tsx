"use client";

import React, { useEffect, useState } from 'react';

const BackgroundVideo = () => {
  const [videoIndex, setVideoIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 5) + 1;
    console.log('Random video index:', randomIndex); // Log the random index
    setVideoIndex(randomIndex);
    setIsLoading(false); // Set loading to false after setting the video index
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-tight text-white">
            Data is <span className="text-green-600 dark:text-green-500">Loading</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-gray-500 dark:text-gray-400">
            Stay put. This could take a few seconds.
          </p>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <video
      key={videoIndex} // Add key to force re-render
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover -z-10"
    >
      <source src={`/${videoIndex}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;