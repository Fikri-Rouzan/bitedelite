import { motion } from "motion/react";
import { images } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      id="about"
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
          Tentang Kami
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-auto flex-shrink-0">
            <motion.img
              src={images.poster}
              alt="BiteDelite Poster"
              className="w-96 h-96 mx-auto object-cover rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="w-full md:max-w-xl text-center md:text-left">
            <motion.h3
              className="text-3xl font-semibold text-gray-800 mb-6"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Renyahnya Setiap Gigitan!
            </motion.h3>
            <motion.p
              className="text-gray-600 leading-relaxed text-justify"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              BiteDelite adalah camilan renyah yang menghadirkan sensasi gurih
              pedas khas di setiap gigitan. Menyajikan produk seperti basreng
              dan keripik kaca, BiteDelite cocok untuk pecinta camilan yang suka
              rasa kuat dan nagih. Nama “BiteDelite” sendiri berarti gigitan
              yang penuh kelezatan, sejalan dengan misi kami menyajikan camilan
              nikmat dengan harga terjangkau dan kemasan menarik.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
