import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Product } from '../types';
import HeroSection from '../components/HeroSection';
import FeaturedCollection from '../components/FeaturedCollection';
import CategoryShowcase from '../components/CategoryShowcase';
import BrandShowcase from '../components/BrandShowcase';
import TestimonialSlider from '../components/TestimonialSlider';
import Newsletter from '../components/Newsletter';
import { useInView } from 'react-intersection-observer';
import Cart from '../components/Cart';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCart } from '../context/CartContext';
import Header from '../components/Header'; // Import the Header component

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ref: scrollRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('/api/featured-products');
        const data = await response.json();
        setFeaturedProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setIsLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>LuxCart - Premium Footwear</title>
        <meta name="description" content="Discover our collection of premium footwear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header openCart={openCart} /> {/* Use the Header component here */}

      <main className="flex-grow"> {/* Add flex-grow to ensure content takes up available space */}
        <HeroSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Uncomment and import PromoBanner component when it's available */}
          {/* <PromoBanner /> */}
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <FeaturedCollection products={featuredProducts} isLoading={isLoading} openCart={openCart} />
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <CategoryShowcase />
        </motion.div>

        <BrandShowcase />

        <TestimonialSlider />

        <Newsletter />

        {/* You can add more sections here if needed */}
      </main>

      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
}
