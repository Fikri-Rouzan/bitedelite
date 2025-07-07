import { motion } from "motion/react";
import { SiWhatsapp, SiInstagram, SiShopee } from "react-icons/si";

const Contact = () => {
  const whatsappNumber = "6285591136077";
  const whatsappMessage =
    "Hai BiteDelite! Saya tertarik nih sama produknya. Boleh minta info atau langsung order ya?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const instagramUrl =
    "https://www.instagram.com/bitedelite_?igsh=MWxtM3Ztd3V4eHJ3NQ==";
  const shopeeUrl = "https://id.shp.ee/mGg5fNt";

  return (
    <motion.section
      id="contact"
      className="py-10 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hubungi Kami
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Punya pertanyaan atau mau langsung pesan? Jangan ragu untuk
          menghubungi kami melalui platform di bawah ini.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            <SiWhatsapp size={24} />
            <span>WhatsApp</span>
          </a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-80 hover:scale-105 transition-all duration-300"
          >
            <SiInstagram size={24} />
            <span>Instagram</span>
          </a>

          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 hover:scale-105 transition-all duration-300"
          >
            <SiShopee size={24} />
            <span>Shopee</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
