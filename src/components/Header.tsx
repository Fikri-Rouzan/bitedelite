import { motion } from "motion/react";
import { images } from "../assets/assets";

export default function Header() {
  return (
    <motion.header
      id="header"
      className="py-10 mt-16 h-[65vh] md:h-[75vh] bg-cover bg-center text-center flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${images.background})`,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="container mx-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <img
          src={images.logo}
          alt="BiteDelite Logo"
          className="h-48 w-48 sm:h-52 sm:w-52 mx-auto mb-6"
        />
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-bold text-red-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Bite<span className="text-orange-300">Delite</span>
      </motion.h1>

      <motion.p
        className="text-xl font-medium md:text-2xl mt-4 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Your Partner in Crunch
      </motion.p>
    </motion.header>
  );
}
