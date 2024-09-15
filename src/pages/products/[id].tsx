// src/pages/products/[id].tsx

import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import Link from 'next/link';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, sizes: [selectedSize] });
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{product.name} - SoleStyle</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <motion.div 
            className="flex flex-col-reverse"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image: string) => (
                  <div key={image} className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50">
                    <Image src={image} alt={product.name} layout="fill" objectFit="contain" />
                    <span className="sr-only">View {product.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full aspect-w-1 aspect-h-1">
              <Image
                src={product.images[0]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div 
            className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900 dark:text-gray-100">${product.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 dark:text-gray-300 space-y-6">{product.description}</div>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <h4 className="text-sm text-gray-900 dark:text-gray-100 font-medium">Color</h4>
                <div className="ml-4 border-2 border-gray-300 rounded-full p-1" style={{ backgroundColor: product.color }}>
                  <span className="sr-only">{product.color}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <h4 className="text-sm text-gray-900 dark:text-gray-100 font-medium">Size</h4>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 mt-4">
                  {product.sizes.map((size: number) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ${
                        selectedSize === size
                          ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                          : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span>{size}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex sm:flex-col1">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full ${
                  !selectedSize && 'opacity-50 cursor-not-allowed'
                }`}
              >
                Add to cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Link href="/products" className="text-blue-500 hover:underline">
        Back to Products
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  
  // Fetch product data from API
  // This is a placeholder, replace with actual API call
  const product: Product = {
    id,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 99.99,
    category: 'Sample Category',
    brand: 'Sample Brand',
    inStock: true,
    images: ['/images/sample-product.jpg'],
    color: '#000000',
    sizes: [7, 8, 9, 10],
  };

  return {
    props: {
      product,
    },
  };
};