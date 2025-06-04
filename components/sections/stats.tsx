"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { value: 120, label: 'Projects Completed' },
  { value: 15, label: 'Years of Experience' },
  { value: 40, label: 'Expert Team Members' },
  { value: 35, label: 'Awards Won' },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (inView && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [inView, hasPlayed]);

  return (
    <section ref={ref} className="bg-primary py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-playfair text-5xl font-bold md:text-6xl">
                {hasPlayed ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  0
                )}
                <span>+</span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}