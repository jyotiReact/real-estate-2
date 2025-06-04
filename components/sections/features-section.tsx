"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Search, Shield, Key, MapPin, Clock, ThumbsUp,
  Home, DollarSign, Users
} from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-blue-500" />,
    title: "Smart Search",
    description: "Find your perfect home with our advanced property search filters."
  },
  {
    icon: <Shield className="h-6 w-6 text-teal-500" />,
    title: "Verified Listings",
    description: "All properties are thoroughly verified for your peace of mind."
  },
  {
    icon: <Key className="h-6 w-6 text-indigo-500" />,
    title: "Easy Process",
    description: "Streamlined buying and selling process with expert guidance."
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-500" />,
    title: "Prime Locations",
    description: "Access to properties in the most desirable neighborhoods."
  },
  {
    icon: <Clock className="h-6 w-6 text-teal-500" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your real estate needs."
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-indigo-500" />,
    title: "Best Deals",
    description: "Competitive prices and exclusive property deals for our clients."
  }
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Why Choose <span className="text-blue-600">Our Services</span>
          </h2>
          <p 
            className={cn(
              "text-lg text-muted-foreground",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            We provide comprehensive real estate services to make your property journey smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "p-6 rounded-xl transition-all duration-500",
                  "hover:bg-blue-50 hover:dark:bg-blue-950/20 group",
                  "border border-border/50 hover:border-blue-200 dark:hover:border-blue-800",
                  index % 2 === 0 ? "transform hover:-translate-y-1" : "transform hover:-translate-y-1 sm:hover:translate-y-1"
                )}
                style={{transitionDelay: `${100 * index}ms`}}
              >
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl inline-block group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Premium Services</h3>
            <p className="text-white/90 mb-8">
              Experience luxury real estate services tailored to your needs. Our premium package includes:
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Home className="h-5 w-5" />,
                  title: "Virtual Home Tours",
                  description: "Explore properties from anywhere"
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: "Dedicated Agent",
                  description: "Personal assistance throughout"
                },
                {
                  icon: <DollarSign className="h-5 w-5" />,
                  title: "Market Analysis",
                  description: "Detailed property valuations"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}