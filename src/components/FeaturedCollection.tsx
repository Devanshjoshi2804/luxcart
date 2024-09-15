import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { Product } from '../types';
import { CartContext } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedCollectionProps {
  openCart: () => void;
}

const featuredProducts: Product[] = [
  { id: 2, name: "Sleek Running Sneakers", price: 129.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop&crop=faces", category: "Athletic" },
  { id: 3, name: "Classic Suede Loafers", price: 159.99, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&h=500&fit=crop&crop=faces", category: "Casual" },
  { id: 4, name: "Chic High Heels", price: 179.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop&crop=faces", category: "Formal" },
  { id: 6, name: "Durable Hiking Boots", price: 219.99, image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=500&h=500&fit=crop&crop=faces", category: "Outdoor" },
  { id: 7, name: "Stylish Ankle Boots", price: 169.99, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop&crop=faces", category: "Casual" },
  
  { id: 9, name: "Performance Basketball Shoes", price: 149.99, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&h=500&fit=crop&crop=faces", category: "Athletic" },
  
  { id: 11, name: "Trendy Platform Sneakers", price: 109.99, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop&crop=faces", category: "Casual" },
  { id: 12, name: "Waterproof Rain Boots", price: 89.99, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500&h=500&fit=crop&crop=faces", category: "Outdoor" },
  { id: 14, name: "Lightweight Trail Runners", price: 139.99, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop&crop=faces", category: "Athletic" },
 
  { id: 16, name: "Rugged Work Boots", price: 199.99, image: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=500&h=500&fit=crop&crop=faces", category: "Outdoor" },
  { id: 17, name: "Stylish Wedge Sandals", price: 129.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=500&fit=crop&crop=faces", category: "Casual" },
  { id: 18, name: "Professional Golf Shoes", price: 159.99, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&h=500&fit=crop&crop=faces", category: "Athletic" },
];


const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({ openCart }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  const filteredProducts = selectedCategory
    ? featuredProducts.filter(product => product.category === selectedCategory)
    : featuredProducts;

  const categories = Array.from(new Set(featuredProducts.map(product => product.category)));

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
    openCart();
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 relative">
          Featured Collection
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-teal-500"></span>
        </h2>
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          <button
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-teal-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-teal-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                <div className="relative pt-[100%] overflow-hidden group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="flex space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <button
                        className="p-3 bg-white rounded-full text-gray-800 hover:text-teal-500 transition-colors duration-300 transform hover:scale-110"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FiShoppingCart size={24} />
                      </button>
                      <button className="p-3 bg-white rounded-full text-gray-800 hover:text-teal-500 transition-colors duration-300 transform hover:scale-110">
                        <FiHeart size={24} />
                      </button>
                      <button className="p-3 bg-white rounded-full text-gray-800 hover:text-teal-500 transition-colors duration-300 transform hover:scale-110">
                        <FiEye size={24} />
                      </button>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-teal-600 font-bold text-lg">${product.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600 mt-2">{product.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Product added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCollection;