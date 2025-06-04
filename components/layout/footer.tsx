"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      ref={ref}
      className="bg-gradient-to-t from-gray-950 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={` text-3xl text-amber-600 font-extrabold tracking-tight transition-colors duration-300 `}
            >
              IVY
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-sm tracking-widest text-white font-semibold transition-colors duration-300 `}
            >
              REAL ESTATES
            </motion.div>{" "}
            <p className="mt-6 text-gray-300 text-base leading-relaxed">
              Crafting extraordinary spaces that redefine luxury, blending
              timeless elegance with innovative design.
            </p>
            {/* <div className="mt-8 flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: '#' },
                { icon: <Twitter className="h-5 w-5" />, href: '#' },
                { icon: <Instagram className="h-5 w-5" />, href: '#' },
                { icon: <Linkedin className="h-5 w-5" />, href: '#' },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={social.href}
                    className="rounded-full bg-gray-800 p-3 text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-extrabold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="text-gray-300 text-base transition-colors duration-300 hover:text-amber-600"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className=" text-2xl font-extrabold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-amber-600 mt-1" />
                <span className="text-gray-300 text-base">
                  7/50 Aitken Street Gisborne VIC 3427{" "}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-4 h-6 w-6 text-amber-600" />
                <span className="text-gray-300 text-base">1800 013 013</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-4 h-6 w-6 text-amber-600" />
                <span className="text-gray-300 text-base">
                  admin@harwoodgroup.au
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 border-t border-amber-600/20 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Harwood warragul. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
