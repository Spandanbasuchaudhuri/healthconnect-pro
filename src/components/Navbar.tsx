
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-medical-500 animate-heartbeat mr-2" />
          <span className="text-2xl font-bold gradient-text">MediCall AI</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-medical-500 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-medical-500 transition-colors">
            How It Works
          </a>
          <a href="#contact" className="text-gray-700 hover:text-medical-500 transition-colors">
            Contact
          </a>
        </nav>
        <button className="bg-medical-500 hover:bg-medical-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
