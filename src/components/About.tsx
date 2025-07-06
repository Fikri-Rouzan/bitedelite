import { images } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className="py-10 mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Tentang Kami
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-auto flex-shrink-0">
            <img
              src={images.poster}
              alt="BiteDelite Poster"
              className="w-96 h-96 mx-auto object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="w-full md:max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Renyahnya Setiap Gigitan!
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              BiteDelite adalah camilan renyah yang menghadirkan sensasi gurih
              pedas khas di setiap gigitan. Menyajikan produk seperti basreng
              dan keripik kaca, BiteDelite cocok untuk pecinta camilan yang suka
              rasa kuat dan nagih. Nama “BiteDelite” sendiri berarti gigitan
              yang penuh kelezatan, sejalan dengan misi kami menyajikan camilan
              nikmat dengan harga terjangkau dan kemasan menarik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
