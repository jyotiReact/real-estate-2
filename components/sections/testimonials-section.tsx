"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor & James Whitmore',
    title: 'Homeowners, Coastal Serenity Estate',
    quote: 'Archipix transformed our vision into a breathtaking reality. Their meticulous attention to detail and unparalleled craftsmanship made our Malibu estate a true masterpiece.',
    rating: 5,
  },
  {
    name: 'Dr. Sophia Langston',
    title: 'Investor, Urban Office Complex',
    quote: 'Working with Archipix was an extraordinary experience. Their innovative designs and seamless project management delivered a commercial property that exceeds expectations.',
    rating: 5,
  },
  {
    name: 'Marcus Vaughn',
    title: 'Resident, Modern Residence',
    quote: 'From concept to completion, Archipix crafted a home that embodies elegance and functionality. Their team’s dedication to excellence is unmatched.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-amber-600/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-amber-600 font-medium">
            Client Stories
          </h2>
          <h3 className="mt-5 font-serif text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Voices of Satisfaction
          </h3>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-6 h-1 w-32 bg-amber-600 origin-center"
          />
          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-700">
            Discover the experiences of our esteemed clients who entrusted us to bring their dream properties to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl border border-amber-600/10 transition-all duration-500"
            >
              {/* Subtle gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"
              />
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-600 fill-amber-600" />
                ))}
              </div>
              <blockquote className="text-base text-gray-600 italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6">
                <h4 className="font-serif text-xl font-extrabold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm font-sans uppercase tracking-[0.2em] text-amber-600 mt-1">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-20 text-center"
        >
          <Button className="relative inline-block px-10 py-4 bg-amber-600 text-white font-sans text-sm font-semibold uppercase tracking-[0.2em] rounded-md shadow-xl hover:bg-amber-700 hover:shadow-2xl transition-all duration-300">
            <span className="relative z-10">Share Your Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}