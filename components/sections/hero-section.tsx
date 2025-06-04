"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Search, MapPin, Home, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchType, setSearchType] = useState('buy');
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
          alt="Luxury home exterior"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className={cn(
            "transition-all duration-1000 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Find Your Dream Home
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Discover the perfect property from our curated selection of luxury homes, apartments, and exclusive estates.
            </p>
            
            {/* Search Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 mt-12">
              <div className="flex gap-4 mb-6">
                {['buy', 'rent', 'sell'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSearchType(type)}
                    className={cn(
                      "flex-1 py-3 px-6 rounded-xl font-medium transition-all",
                      searchType === type
                        ? "bg-white text-blue-600"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/30">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/30">
                      <option value="">Price Range</option>
                      <option value="0-500000">$0 - $500,000</option>
                      <option value="500000-1000000">$500,000 - $1M</option>
                      <option value="1000000-2000000">$1M - $2M</option>
                      <option value="2000000+">$2M+</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-medium transition-colors flex items-center justify-center group">
                <Search className="h-5 w-5 mr-2" />
                Search Properties
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20",
            "transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {[
              { value: "1,000+", label: "Properties" },
              { value: "500+", label: "Happy Clients" },
              { value: "50+", label: "Cities" },
              { value: "10+", label: "Years Experience" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}