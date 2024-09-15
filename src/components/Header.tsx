import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  openCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ openCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const menuVariants = {
    closed: { opacity: 0, x: '-100%' },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const searchVariants = {
    closed: { opacity: 0, width: 0 },
    open: { opacity: 1, width: '100%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white bg-opacity-95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-gray-900/70 to-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-600">
              Lux
            </span>
            <span className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}>Cart</span>
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm uppercase tracking-wider font-medium ${
                  isScrolled ? &quot;text-gray-800&quot; : &quot;text-white&quot;
                } hover:text-teal-500 transition-colors duration-300 relative group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition-colors duration-300`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FiSearch size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition-colors duration-300 relative group`}
              onClick={openCart}
            >
              <FiShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/account" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition-colors duration-300`}>
                <FiUser size={20} />
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-teal-500 transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={searchVariants}
            className="absolute top-full left-0 w-full bg-white shadow-md py-4"
          >
            <div className="container mx-auto px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-teal-900 to-gray-900 bg-opacity-98 z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={item.path}
                    className="text-2xl text-white hover:text-teal-300 transition-colors duration-300 relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <div className="flex space-x-8 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-teal-300 transition-colors duration-300"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <FiSearch size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-teal-300 transition-colors duration-300 relative group"
                  onClick={() => {
                    openCart();
                    setIsMenuOpen(false);
                  }}
                >
                  <FiShoppingCart size={24} />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="/account" className="text-white hover:text-teal-300 transition-colors duration-300">
                    <FiUser size={24} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
