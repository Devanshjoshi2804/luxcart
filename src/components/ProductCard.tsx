import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '../types/types';
import { StarIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CartContext } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative pb-2/3">
          <Image 
            src={product.image} 
            alt={product.name} 
            layout="fill"
            objectFit="cover"
          />
          {product.discount && product.discount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm font-bold m-2 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 cursor-pointer">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.category}</p>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating || 0)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            ({product.reviews || 0})
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
              ${((product.price * (100 - (product.discount || 0))) / 100).toFixed(2)}
            </span>
            {product.discount && product.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              <HeartIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
              onClick={handleAddToCart}
            >
              <ShoppingCartIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
