import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    title: "Step into Style",
    subtitle: "Discover our latest collection of premium footwear",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&h=900&fit=crop&crop=focalpoint",
    cta: "Shop Now",
    link: "/products"
  },
  {
    id: 2,
    title: "Run Further",
    subtitle: "Engineered for performance and comfort",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=1600&h=900&fit=crop&crop=focalpoint",
    cta: "Explore Running Shoes",
    link: "/category/running"
  },
  {
    id: 3,
    title: "Sustainable Steps",
    subtitle: "Eco-friendly shoes for a better tomorrow",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1600&h=900&fit=crop&crop=focalpoint",
    cta: "Shop Eco Collection",
    link: "/category/eco-friendly"
  }
];

// ... rest of the component code

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href={heroSlides[currentSlide].link} legacyBehavior>
              <a className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
                {heroSlides[currentSlide].cta}
              </a>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;