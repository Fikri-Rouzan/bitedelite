import { motion } from "motion/react";
import { productsData } from "../assets/assets";
import ProductCard from "./cards/ProductCard";

export default function Products() {
  return (
    <motion.section
      id="products"
      className="py-10 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Produk Kami
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {productsData.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
