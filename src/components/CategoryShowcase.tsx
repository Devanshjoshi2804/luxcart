import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { name: "Casual", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=300&fit=crop" },
  { name: "Running", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop" },
  { name: "Formal", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop" },
  { name: "Sports", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop" },
  { name: "Outdoor", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop" },
  { name: "Sneakers", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=300&fit=crop" },
];

// ... rest of the component code

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.name.toLowerCase()}`} legacyBehavior>
                <a className="block relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                     <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
     <h3 className="text-2xl font-bold text-white">{category.name}</h3>
   </div>
 </a>
</Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
};

export default CategoryShowcase;