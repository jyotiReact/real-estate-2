"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);

  const videos = [
    "https://videos.pexels.com/video-files/7578554/7578554-sd_640_360_30fps.mp4",
    // "https://videos.pexels.com/video-files/5898302/5898302-sd_640_360_30fps.mp4",
  ];

  // Using Framer Motion's scroll hooks for smoother parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects with different speeds for depth
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center w-20 h-20 left-1/2 top-28 -translate-x-1/2 -translate-y-1/2 ">
        <img
          src="/images/logo.webp"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Video Background with enhanced parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video
            key={videoIndex}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            autoPlay
            muted
            playsInline
            loop
            onCanPlayThrough={() => setIsPlaying(true)}
            className="h-full w-full object-cover"
            style={{
              y: videoY,
              scale: videoScale,
            }}
            poster="https://images.unsplash.com/photo-1613977257591-18e928538a42?auto=format&fit=crop&w=1920&q=80"
          >
            <source src={"/images/herovdo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"
          style={{ opacity }}
        />
      </div>

      {/* Hero Content with parallax */}
      <motion.div
        className="container relative z-20 mx-auto h-full px-6"
        style={{ y: contentY }}
      >
        <div className="flex h-full flex-col items-center justify-center text-center text-white pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-4  text-6xl font-extrabold leading-tight md:text-8xl"
            >
              Timeless Elegance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-6 text-lg text-gray-100 max-w-2xl mx-auto"
            >
              Designing extraordinary homes that blend sophistication with
              timeless luxury
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <Button
                size="lg"
                className="px-8 py-6 bg-transparent border-2 border-amber-600 text-amber-600  text-sm font-semibold uppercase tracking-widest rounded-md hover:bg-amber-600 hover:text-white hover:shadow-xl transition-all duration-300"
              >
                Explore Properties
              </Button>
              <Button
                size="lg"
                className="px-8 py-6 bg-amber-600 text-white  text-sm font-semibold uppercase tracking-widest rounded-md hover:bg-amber-700 hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
