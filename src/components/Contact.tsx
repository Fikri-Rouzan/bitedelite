import { Phone } from "lucide-react";
import { SiInstagram, SiShopee } from "react-icons/si";

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
    <section id="contact" className="py-10 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Hubungi Kami</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
          Punya pertanyaan atau mau langsung pesan? Jangan ragu untuk
          menghubungi kami melalui platform di bawah ini.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            <Phone size={24} />
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
