"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
    <section
      ref={ref}
      id="contact"
      className="py-32 bg-gradient-to-b from-white to-amber-600/5"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-amber-600 font-medium">
            Connect With Us
          </h2>
          <h3 className="mt-5 font-serif text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Let's Create Together
          </h3>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 h-1 w-32 bg-amber-600 origin-center"
          />
          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-700">
            Ready to bring your vision to life? Contact us to discuss your
            project and explore our bespoke design solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid gap-16 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-10">
              {[
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: "Visit Us",
                  content:
                    "123 Architecture Avenue, Design District, New York, NY 10001",
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: "Call Us",
                  content: "+1 (555) 123-4567",
                },
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: "Email Us",
                  content: "info@archipix.com",
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "Working Hours",
                  content:
                    "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By appointment",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start group"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-amber-600/10 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-serif font-extrabold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-base text-gray-600 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-10 shadow-xl border border-amber-600/10"
            >
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-sans font-semibold uppercase tracking-[0.1em] text-gray-700"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-amber-600/20 focus:border-amber-600 focus:ring-amber-600 bg-gray-50 text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-sans font-semibold uppercase tracking-[0.1em] text-gray-700"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-amber-600/20 focus:border-amber-600 focus:ring-amber-600 bg-gray-50 text-base"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-sans font-semibold uppercase tracking-[0.1em] text-gray-700"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-amber-600/20 focus:border-amber-600 focus:ring-amber-600 bg-gray-50 text-base"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-sans font-semibold uppercase tracking-[0.1em] text-gray-700"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="border-amber-600/20 focus:border-amber-600 focus:ring-amber-600 bg-gray-50 text-base"
                />
              </div>

              <Button className="relative w-full px-10 py-4 bg-amber-600 text-white font-sans text-sm font-semibold uppercase tracking-[0.2em] rounded-md shadow-xl hover:bg-amber-700 hover:shadow-2xl transition-all duration-300">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
