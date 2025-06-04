"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BuildingIcon, PencilRuler, HomeIcon, Clock } from 'lucide-react';

const services = [
  {
    icon: <BuildingIcon className="h-10 w-10" />,
    title: 'Architecture Design',
    description: 'Crafting visionary architectural masterpieces that harmonize aesthetics, functionality, and sustainability.',
  },
  {
    icon: <PencilRuler className="h-10 w-10" />,
    title: 'Interior Design',
    description: 'Curating bespoke interiors that embody elegance, comfort, and your unique style.',
  },
  {
    icon: <HomeIcon className="h-10 w-10" />,
    title: 'Urban Planning',
    description: 'Designing sustainable, vibrant communities that redefine urban living for generations.',
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: 'Project Management',
    description: 'Delivering seamless project execution with precision, ensuring timeliness and excellence.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-amber-600/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-md uppercase tracking-[0.3em] text-amber-600 font-bold">
            Our Signature Services
          </h2>
          <h3 className="mt-5 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Excellence in Design
          </h3>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 h-1 w-32 bg-amber-600 origin-center"
          />
          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-700">
            Tailored architectural solutions crafted with precision, sophistication, and an unwavering commitment to luxury.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-10 shadow-lg transition-all duration-500 hover:shadow-2xl border border-amber-600/10"
            >
              {/* Subtle amber gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"
              />
              
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-amber-600/10 text-amber-600 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white shadow-md">
                {service.icon}
              </div>
              <h4 className="mb-4 text-2xl font-extrabold text-gray-900">
                {service.title}
              </h4>
              <p className="mb-6 text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <Button 
                variant="link" 
                className="p-0 text-amber-600 hover:text-amber-800  text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
              >
                Discover More →
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <Button className="relative inline-block px-10 py-4 bg-amber-600 text-white font-sans text-sm font-semibold uppercase tracking-[0.2em] rounded-md shadow-xl hover:bg-amber-700 hover:shadow-2xl transition-all duration-300">
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}