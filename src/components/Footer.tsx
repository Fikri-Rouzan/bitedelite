import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-gray-400 mx-[10%] py-6 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.p
          className="text-sm md:text-base text-gray-600 text-center md:text-left"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} BiteDelite. All Rights Reserved.
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-gray-600 text-center md:text-right"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Your Partner in Crunch
        </motion.p>
      </div>
    </motion.footer>
  );
}
