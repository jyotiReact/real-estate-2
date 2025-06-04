"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'The Future of Sustainable Architecture',
    excerpt: 'Exploring innovative approaches to creating environmentally friendly buildings that minimize energy consumption.',
    date: 'May 15, 2023',
    author: 'Richard Wilson',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Architecture',
  },
  {
    id: 2,
    title: 'Minimalist Interior Design Trends for 2023',
    excerpt: 'Discover the latest minimalist design trends that are transforming modern homes and workspaces.',
    date: 'June 22, 2023',
    author: 'Jennifer Lee',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Interior Design',
  },
  {
    id: 3,
    title: 'Urban Renewal: Transforming City Spaces',
    excerpt: 'How urban planning can revitalize neglected areas and create vibrant, community-focused environments.',
    date: 'July 8, 2023',
    author: 'David Rodriguez',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Urban Planning',
  },
];

export default function LatestNews() {
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
            Blog & News
          </h2>
          <h3 className="mt-4 font-playfair text-4xl font-bold md:text-5xl">
            Latest Articles
          </h3>
          <div className="mx-auto mt-6 h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
            Stay updated with the latest trends, insights, and news from the world of architecture and interior design.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {newsItems.map((item) => (
            <motion.article 
              key={item.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-sm font-medium text-white">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {item.author}
                  </div>
                </div>
                <h4 className="mb-3 font-playfair text-xl font-bold transition-colors group-hover:text-primary">
                  <Link href={`/blog/${item.id}`}>{item.title}</Link>
                </h4>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {item.excerpt}
                </p>
                <Link 
                  href={`/blog/${item.id}`}
                  className="inline-flex items-center text-primary transition-colors hover:text-primary/80"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button className="bg-primary text-white hover:bg-primary/90">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}