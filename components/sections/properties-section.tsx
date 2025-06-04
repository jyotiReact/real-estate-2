"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Bed, Bath, Square, MapPin, Heart, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$5,900,000",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    featured: true
  },
  {
    id: 2,
    title: "Oceanfront Penthouse",
    location: "Miami Beach, FL",
    price: "$3,750,000",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    featured: true
  },
  {
    id: 3,
    title: "Contemporary City Loft",
    location: "New York, NY",
    price: "$2,100,000",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    featured: false
  }
];

export default function PropertiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="properties" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground",
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Explore our handpicked selection of premium properties in the most desirable locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, idx) => (
            <div 
              key={property.id}
              className={cn(
                "group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg transition-all duration-500",
                "hover:shadow-2xl hover:-translate-y-1",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
              )}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <button className="h-10 w-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                    <Heart className="h-5 w-5 text-rose-500" />
                  </button>
                </div>
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-blue-600">{property.price}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 dark:border-gray-700 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Bed className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{property.beds} Beds</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Bath className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{property.baths} Baths</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Square className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{property.sqft} sqft</p>
                  </div>
                </div>

                <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl py-3 font-medium transition-colors flex items-center justify-center group">
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "text-center mt-12",
          "transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center group">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}