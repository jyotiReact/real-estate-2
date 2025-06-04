"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const floorplans = [
  {
    id: "ground",
    title: "Ground Floor",
    subtitle: "Grand Reception & Entertaining Spaces",
    image: "/images/Ivy Floorplan.jpg",
    specs: {
      area: "3,500 sq ft",
      rooms: [
        "Grand Foyer with Double Staircase",
        "Formal Living Room with Fireplace",
        "Gourmet Kitchen with Quartz Countertops",
        "Expansive Dining Hall for 16 Guests",
        "Executive Guest Suite with Ensuite",
        "Library with Custom Wood Paneling",
      ],
      features: [
        "12' Ceilings with Coffered Details",
        "Floor-to-Ceiling Panoramic Windows",
        "Smart Home Automation System",
        "Temperature-Controlled Wine Display",
        "Chef's Pantry with Second Dishwasher",
        "Hand-scraped European Oak Flooring",
      ],
    },
  },
];

export default function Floorplan() {
  const [activeTab, setActiveTab] = useState("ground");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activePlan = floorplans.find((plan) => plan.id === activeTab);

  return (
    <section
      ref={ref}
      className="pb-32 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-md  uppercase font-bold tracking-[0.3em] text-amber-600"
          >
            Architectural Masterpiece
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6  text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Exquisite Floor Plans
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-gray-600"
          >
            Each level meticulously designed to offer unparalleled luxury living
            with bespoke details and premium amenities.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-inner">
              {floorplans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActiveTab(plan.id)}
                  className={`px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all rounded-full ${
                    activeTab === plan.id
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-amber-700"
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl"
            >
              <Image
                src={activePlan?.image || "/images/home.jpg"} // Fallback image
                alt={activePlan?.title || "Default plan"}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 rounded-lg shadow-xl">
                  <span className="font-medium text-white text-lg">
                    {activePlan?.specs.area}
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8">
                <h4 className=" text-3xl font-bold text-gray-900">
                  {activePlan?.title}
                </h4>
                <p className="mt-2 text-lg text-amber-700">
                  {activePlan?.subtitle}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h5 className="flex items-center  text-sm font-medium uppercase tracking-wider text-amber-700 mb-4">
                    <span className="mr-3 h-1 w-8 bg-amber-600" />
                    Included Rooms
                  </h5>
                  <ul className="space-y-3">
                    {activePlan?.specs?.rooms.map((room, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-amber-600 mt-1 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{room}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="flex items-center  text-sm font-medium uppercase tracking-wider text-amber-700 mb-4">
                    <span className="mr-3 h-1 w-8 bg-amber-600" />
                    Premium Features
                  </h5>
                  <ul className="space-y-3">
                    {activePlan?.specs?.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-amber-600 mt-1 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 uppercase tracking-wider font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  Download Detailed Floor Plan
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-700 px-10 py-5 uppercase tracking-wider font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Schedule Private Viewing
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
