import { Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img
              src="/LOGO.jpg"
              alt="Horas Honestas Logo"
              className="h-12 md:h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0094E8] transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-[#0094E8] transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-[#0094E8] transition-colors font-medium">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-[#0094E8] transition-colors font-medium">
              Projetos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-[#0094E8] transition-colors font-medium">
              Contacto
            </button>
            <a
              href="https:/www.instagram.com/horashonestas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#0094E8] text-white px-4 py-2 rounded-lg hover:bg-[#0080cc] transition-colors"
            >
              <Instagram size={20} />
              <span className="font-medium">Instagram</span>
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0094E8] transition-colors text-left font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-[#0094E8] transition-colors text-left font-medium">
                Serviços
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-[#0094E8] transition-colors text-left font-medium">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-[#0094E8] transition-colors text-left font-medium">
                Projetos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-[#0094E8] transition-colors text-left font-medium">
                Contacto
              </button>
              <a
                href="https:/www.instagram.com/horashonestas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#0094E8] text-white px-4 py-2 rounded-lg hover:bg-[#0080cc] transition-colors w-fit"
              >
                <Instagram size={20} />
                <span className="font-medium">Instagram</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
