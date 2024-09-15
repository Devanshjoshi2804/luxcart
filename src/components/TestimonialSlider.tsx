import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    text: "I love the quality and style of the shoes I bought from this store. Highly recommended!"
  },
  // Add more testimonials if needed

// ... rest of the component code
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Professional Athlete',
    content: 'As a pro athlete, I need shoes that can keep up with my intense training. SoleStyle delivers every time.',
    avatar: '/images/testimonials/michael.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Fashion Blogger',
    content: 'I love how SoleStyle combines style and comfort. Their shoes are always on-trend and Instagram-worthy!',
    avatar: '/images/testimonials/emily.jpg',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
            >
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full mx-auto mb-6"
              />
              <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">"{testimonials[currentIndex].content}"</p>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;