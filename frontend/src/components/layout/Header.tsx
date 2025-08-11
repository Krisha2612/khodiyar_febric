import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-95'
      }`}
    >
      <div className="container-padded py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-semibold text-primary-700">Khodiyar Fabric</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-800 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-neutral-800 hover:text-primary-600 font-medium">
              Shop All
            </Link>
            <div className="relative group">
              <button className="flex items-center text-neutral-800 hover:text-primary-600 font-medium">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50 py-1">
                <Link to="/products?category=cotton" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                  Cotton
                </Link>
                <Link to="/products?category=silk" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                  Silk
                </Link>
                <Link to="/products?category=linen" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                  Linen
                </Link>
                <Link to="/products?category=wool" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                  Wool
                </Link>
                <Link to="/products?category=denim" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                  Denim
                </Link>
                <Link to="/products?category=specialty" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700">
                  Specialty
                </Link>
              </div>
            </div>
          </nav>

          {/* Search, Cart, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="text-neutral-800 hover:text-primary-600 transition-colors">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="relative text-neutral-800 hover:text-primary-600 transition-colors">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-neutral-800 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container-padded py-4">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-2xl font-heading font-semibold text-primary-700">
            Khodiyar Fabric
            </Link>
            <button 
              className="text-neutral-800 hover:text-primary-600"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl font-medium text-neutral-800 hover:text-primary-600">
              Home
            </Link>
            <Link to="/products" className="text-xl font-medium text-neutral-800 hover:text-primary-600">
              Shop All
            </Link>
            <p className="text-xl font-medium text-neutral-800">Categories</p>
            <div className="ml-4 flex flex-col space-y-4">
              <Link to="/products?category=cotton" className="text-lg text-neutral-700 hover:text-primary-600">
                Cotton
              </Link>
              <Link to="/products?category=silk" className="text-lg text-neutral-700 hover:text-primary-600">
                Silk
              </Link>
              <Link to="/products?category=linen" className="text-lg text-neutral-700 hover:text-primary-600">
                Linen
              </Link>
              <Link to="/products?category=wool" className="text-lg text-neutral-700 hover:text-primary-600">
                Wool
              </Link>
              <Link to="/products?category=denim" className="text-lg text-neutral-700 hover:text-primary-600">
                Denim
              </Link>
              <Link to="/products?category=specialty" className="text-lg text-neutral-700 hover:text-primary-600">
                Specialty
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;