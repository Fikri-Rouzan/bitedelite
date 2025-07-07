import { motion } from "motion/react";
import { productsData } from "../assets/assets";

const Products = () => {
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
              <div
                key={product.name}
                className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out relative max-w-sm mx-auto cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />

                <div className="p-6 text-left">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                    <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {product.price}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-justify">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
