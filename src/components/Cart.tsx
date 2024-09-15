import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="bg-white w-full max-w-md h-full shadow-xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <FiX size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center mb-6">
                    <div className="w-20 h-20 relative mr-4">
                      <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="p-6 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={clearCart}
                className="w-full bg-red-500 text-white py-3 rounded-lg mb-4 hover:bg-red-600 transition-colors duration-300"
              >
                Clear Cart
              </button>
              <button className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors duration-300">
                Checkout
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;