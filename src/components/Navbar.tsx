import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "header", label: "Home" },
    { to: "about", label: "Tentang Kami" },
    { to: "products", label: "Produk" },
    { to: "contact", label: "Kontak" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-2xl md:text-3xl font-bold text-red-600 cursor-pointer"
              aria-label="Kembali ke atas"
            >
              Bite
              <span className="text-orange-300">Delite</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10 px-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-orange-300 font-semibold cursor-pointer transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <HiMenuAlt3 className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-40 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <HiX className="h-6 w-6 mr-2 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col items-start ml-8 space-y-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
