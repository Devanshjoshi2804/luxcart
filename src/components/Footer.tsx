import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">LuxCart is your one-stop shop for premium footwear. We offer a wide selection of high-quality shoes for every occasion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm">
              <li><Link href="/faq" className="hover:text-gray-300">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-gray-300">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-gray-300">Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-gray-300">Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-300">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 LuxCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;