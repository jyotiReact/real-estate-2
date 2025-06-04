"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", name: "All" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "interior", name: "Interior Design" },
  { id: "hospitality", name: "Hospitality" },
];

const projectsData = [
  {
    id: 1,
    title: "Villa Serenity",
    category: "residential",
    image: "/images/home.jpg",
    size: "large",
    location: "Monaco",
  },
  {
    id: 2,
    title: "Corporate Plaza",
    category: "commercial",
    image: "/images/bathroom.jpg",
    size: "small",
    location: "New York",
  },
  {
    id: 3,
    title: "Penthouse Aurora",
    category: "interior",
    image: "/images/living.jpg",
    size: "small",
    location: "Dubai",
  },
  {
    id: 4,
    title: "Grand Hotel",
    category: "hospitality",
    image: "/images/bedroom.jpg",
    size: "large",
    location: "Paris",
  },
  {
    id: 5,
    title: "Cliffside Mansion",
    category: "residential",
    image: "/images/home.jpg",
    size: "small",
    location: "Malibu",
  },
  {
    id: 6,
    title: "Luxury Showroom",
    category: "commercial",
    image: "/images/home2.jpg",
    size: "large",
    location: "Milan",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-md  uppercase tracking-[0.3em] text-amber-600 font-bold">
            Our Masterpieces
          </h2>
          <h3 className="mt-5  text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Architectural Excellence
          </h3>
          <div className="mx-auto mt-6 h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600">
            Discover our portfolio of award-winning designs that redefine luxury
            and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full  text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-amber-700"
                  : "bg-transparent border border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 hover:shadow-md"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.15 }}
          className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 40, scale: 0.95 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.size === "large"
                  ? "lg:col-span-2 h-[600px]"
                  : "h-[450px]"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <h4 className=" text-2xl lg:text-3xl font-bold">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm  uppercase tracking-[0.2em] text-amber-400">
                    {project.category}
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white"
                >
                  <div className="text-center">
                    <h4 className=" text-3xl lg:text-4xl font-bold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm  uppercase tracking-[0.2em] text-amber-300 mb-1">
                      {project.category}
                    </p>
                    <p className="text-gray-200 mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {project.location}
                    </p>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm  font-semibold uppercase tracking-[0.2em] text-amber-600 shadow-lg hover:bg-amber-600 hover:text-white hover:shadow-xl transition-all duration-300 group"
                    >
                      Explore Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <Link href="/portfolio">
            <Button className="relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold uppercase tracking-[0.2em] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">View Full Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
