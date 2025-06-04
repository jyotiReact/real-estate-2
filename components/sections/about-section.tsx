"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[600px] w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/home2.jpg"
                alt="Luxury modern mansion"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-600 to-amber-800 p-10 text-white rounded-xl shadow-2xl lg:block hidden">
              <p className=" text-5xl font-extrabold tracking-tight">
                200+
              </p>
              <p className="mt-2 text-xs  uppercase tracking-[0.3em] font-medium">
                Luxury Properties
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-md   uppercase tracking-[0.3em] text-amber-700 font-bold">
              About Luxe Estates
            </h2>
            <h3 className="mt-6  text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Redefining Luxury Living
            </h3>
            <div className="mt-6 h-1 w-24 bg-amber-600"></div>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Since 2005, Luxe Estates has been the premier curator of
              exceptional properties worldwide. We don't just sell homes—we
              deliver lifestyles. Our portfolio showcases the most exquisite
              residences, from penthouse sanctuaries to private island retreats.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our elite team of property specialists combines market expertise
              with discreet, personalized service to connect discerning clients
              with their perfect residence. Every property in our collection
              meets uncompromising standards of quality, location, and
              architectural distinction.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600/10 text-amber-700">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Prime Locations
                  </h4>
                  <p className="mt-1 text-gray-600">
                    Only the most exclusive addresses worldwide
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600/10 text-amber-700">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Vetted Properties
                  </h4>
                  <p className="mt-1 text-gray-600">
                    Rigorous selection process for quality assurance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600/10 text-amber-700">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Discretion
                  </h4>
                  <p className="mt-1 text-gray-600">
                    Complete confidentiality for our clients
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-600/10 text-amber-700">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Global Network
                  </h4>
                  <p className="mt-1 text-gray-600">
                    Access to off-market opportunities worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex space-x-6">
              <button className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium uppercase tracking-wider rounded-md transition duration-300 shadow-lg hover:shadow-xl">
                View Portfolio
              </button>
           
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
