const Footer = () => {
  return (
    <footer className="border-t border-gray-400 mx-[10%] py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} BiteDelite. All Rights Reserved.
        </p>
        <p className="text-sm md:text-base text-gray-600 text-center md:text-right">
          Your Partner in Crunch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
