
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-wide">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center">
            <span className="font-bold text-2xl text-romblad-800">Romblad</span>
            <span className="font-medium text-xl text-romblad-600 ml-1">CAD & BIM AB</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-romblad-600 font-medium">Tjänster</a>
            <a href="#about" className="text-gray-700 hover:text-romblad-600 font-medium">Om oss</a>
            <a href="#projects" className="text-gray-700 hover:text-romblad-600 font-medium">Projekt</a>
            <a href="#contact" className="text-gray-700 hover:text-romblad-600 font-medium">Kontakt</a>
            <Button variant="default" className="bg-romblad-700 hover:bg-romblad-800">
              Kontakta oss
            </Button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-romblad-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjänster
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-romblad-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </a>
              <a 
                href="#projects" 
                className="text-gray-700 hover:text-romblad-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projekt
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-romblad-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <Button 
                variant="default" 
                className="bg-romblad-700 hover:bg-romblad-800 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakta oss
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
