
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-credmy-blue text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 md:w-12 md:h-12">
            <img 
              src="/lovable-uploads/716deff8-97dc-4a80-999d-7c5f672ea6d6.png" 
              alt="Credmy Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold">credmy</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-credmy-turquoise transition-colors">Home</Link>
          <Link to="/simulacao" className="hover:text-credmy-turquoise transition-colors">Simulação</Link>
          <Link to="/cadastro" className="hover:text-credmy-turquoise transition-colors">Cadastro</Link>
          <Link to="/login" className="bg-credmy-turquoise hover:bg-opacity-90 px-5 py-2 rounded-md transition-colors">Login</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-credmy-blue py-4 px-4 absolute top-full left-0 right-0 shadow-lg z-50">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="py-2 hover:bg-credmy-turquoise hover:bg-opacity-20 px-3 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/simulacao" 
              className="py-2 hover:bg-credmy-turquoise hover:bg-opacity-20 px-3 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Simulação
            </Link>
            <Link 
              to="/cadastro" 
              className="py-2 hover:bg-credmy-turquoise hover:bg-opacity-20 px-3 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cadastro
            </Link>
            <Link 
              to="/login" 
              className="py-2 bg-credmy-turquoise text-center rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
