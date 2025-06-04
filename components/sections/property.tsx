"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function LuxuryProperty() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smoother parallax with easing
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"], {
    clamp: false,
  });
  
  // Separate parallax effect for content with different speed
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "10%"], {
    clamp: false,
  });

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-white to-amber-600/5"
    >
      {/* Parallax Background Image with smoother transition */}
      <motion.div 
        style={{ 
          y: yBg,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }} 
        className="absolute inset-0 z-0"
      >
        <div className="h-full w-full bg-[url('/images/home.jpg')] bg-cover bg-center') "/>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
      </motion.div>

      {/* Content with separate parallax effect */}
      <motion.div
        style={{ y: yText }}
        className="container relative z-10 mx-auto flex h-full items-center px-6 lg:px-12"
      >
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2, 
              ease: [0.16, 1, 0.3, 1] // Custom easing for smoother animation
            }}
            className="text-sm  uppercase tracking-[0.3em] text-amber-600 font-medium"
          >
            Signature Estate
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-4  text-5xl lg:text-7xl font-extrabold leading-tight text-white"
          >
            The Coastal Serenity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-6 text-lg lg:text-xl text-gray-200 max-w-2xl"
          >
            An architectural masterpiece nestled along 3 acres of pristine
            Malibu coastline, offering unparalleled ocean vistas and timeless
            luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-10 flex flex-wrap gap-8"
          >
            <div className="flex items-center text-white">
              <span className=" text-4xl font-extrabold">7</span>
              <span className="ml-3 text-sm  uppercase tracking-[0.2em] text-amber-600">
                Bedrooms
              </span>
            </div>
            <div className="flex items-center text-white">
              <span className=" text-4xl font-extrabold">8.5</span>
              <span className="ml-3 text-sm  uppercase tracking-[0.2em] text-amber-600">
                Bathrooms
              </span>
            </div>
            <div className="flex items-center text-white">
              <span className=" text-4xl font-extrabold">12,500</span>
              <span className="ml-3 text-sm  uppercase tracking-[0.2em] text-amber-600">
                Sq Ft
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <Button className="relative px-10 py-4 bg-amber-600 text-white  text-sm font-semibold uppercase tracking-[0.2em] rounded-md shadow-xl hover:bg-amber-700 hover:shadow-2xl transition-all duration-300">
              <span className="relative z-10">Schedule Viewing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
            </Button>
            <Button
              variant="outline"
              className="relative px-10 py-4 border-2 border-amber-600 text-amber-600  text-sm font-semibold uppercase tracking-[0.2em] rounded-md shadow-md hover:bg-amber-600 hover:text-white hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">View Details</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}