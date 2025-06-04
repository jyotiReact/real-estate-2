"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Properties", href: "properties" },
  { name: "Services", href: "services" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 py-3 shadow-lg backdrop-blur-md border-b border-gray-100"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10 flex flex-col leading-none">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={` text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-amber-600" : "text-amber-400"
              }`}
            >
              IVY
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-sm tracking-widest font-semibold transition-colors duration-300 ${
                isScrolled ? "text-navy-900" : "text-white"
              }`}
            >
              REAL ESTATES
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-10 lg:flex">
            {navigationItems.map((item, index) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={`cursor-pointer  text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  isScrolled
                    ? "text-navy-800 hover:text-amber-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {item.name}
                </motion.span>
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? "text-navy-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white">
              <div className="flex items-center justify-between py-6 px-4 border-b border-gray-100">
                <span className="text-2xl font-extrabold text-navy-900">
                  IVY <div>REAL ESTATES</div>
                </span>
                <SheetTrigger asChild>
                  <button className="p-2 rounded-lg text-navy-900 hover:bg-gray-100 transition-colors duration-300">
                    <X className="h-7 w-7" />
                    <span className="sr-only">Close menu</span>
                  </button>
                </SheetTrigger>
              </div>
              <nav className="mt-6 flex flex-col px-4">
                <AnimatePresence>
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={800}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-4 text-lg  font-medium text-navy-800 hover:text-amber-600 transition-colors duration-300"
                      >
                        {item.name}
                      </ScrollLink>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
