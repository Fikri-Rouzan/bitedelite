import { images } from "../assets/assets";

const Header = () => {
  return (
    <header
      id="header"
      className="py-10 mt-16 h-[65vh] md:h-[50vh] bg-cover"
      style={{
        backgroundImage: `url(${images.background})`,
      }}
    >
      <div className="container mx-auto text-center">
        <img
          src={images.logo}
          alt="BiteDelite Logo"
          className="h-52 w-52 mx-auto mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-red-500">
          Bite<span className="text-orange-300">Delite</span>
        </h1>
        <p className="text-xl font-medium md:text-2xl mt-4 text-white">
          Your Partner in Crunch
        </p>
      </div>
    </header>
  );
};

export default Header;
