import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <section className="mb-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Stay in the Loop</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Subscribe to our newsletter for exclusive offers and updates</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          type="submit"
        >
          Subscribe
        </motion.button>
      </form>
    </section>
  );
};

export default Newsletter;