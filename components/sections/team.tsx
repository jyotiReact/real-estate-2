"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Richard Wilson',
    role: 'Principal Architect',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: '15+ years of experience in modern architectural design with award-winning projects.',
  },
  {
    name: 'Jennifer Lee',
    role: 'Interior Designer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: 'Specialist in creating harmonious interior spaces that blend beauty and functionality.',
  },
  {
    name: 'David Rodriguez',
    role: 'Urban Planner',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: 'Passionate about sustainable urban development and community-focused design solutions.',
  },
  {
    name: 'Sarah Chen',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bio: 'Expert in coordinating complex architectural projects with precision and efficiency.',
  },
];

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Meet Our Team
          </h2>
          <h3 className="mt-4 font-playfair text-4xl font-bold md:text-5xl">
            Expert Professionals
          </h3>
          <div className="mx-auto mt-6 h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
            Our team of experienced architects and designers are passionate about creating exceptional spaces that transform lives.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 pb-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a href="#" className="rounded-full bg-white p-2 text-gray-800 transition-colors hover:bg-primary hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-white p-2 text-gray-800 transition-colors hover:bg-primary hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="rounded-full bg-white p-2 text-gray-800 transition-colors hover:bg-primary hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-playfair text-xl font-bold">{member.name}</h4>
                <p className="mt-1 text-sm uppercase tracking-wider text-primary">{member.role}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}