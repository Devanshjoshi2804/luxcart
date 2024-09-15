import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg" },
  { name: "New Balance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg" },
  { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Reebok_logo.svg" },
  { name: "Converse", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg" },
  { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Vans-logo.svg" },
  { name: "Asics", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Asics_Logo.svg" },
];

// ... rest of the component code

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Our Featured Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                objectFit="contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;