import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-padded py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="text-primary-400" size={24} />
              <h3 className="text-xl font-heading font-semibold text-white">Khodiyar Fabric</h3>
            </div>
            <p className="mb-4">Premium fabrics for all your creative needs. Quality materials sourced from around the world.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-400 transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/products?featured=true" className="hover:text-primary-400 transition-colors">Featured Fabrics</Link>
              </li>
              <li>
                <Link to="/products?new=true" className="hover:text-primary-400 transition-colors">New Arrivals</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-heading font-medium text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=cotton" className="hover:text-primary-400 transition-colors">Cotton</Link>
              </li>
              <li>
                <Link to="/products?category=silk" className="hover:text-primary-400 transition-colors">Silk</Link>
              </li>
              <li>
                <Link to="/products?category=linen" className="hover:text-primary-400 transition-colors">Linen</Link>
              </li>
              <li>
                <Link to="/products?category=wool" className="hover:text-primary-400 transition-colors">Wool</Link>
              </li>
              <li>
                <Link to="/products?category=denim" className="hover:text-primary-400 transition-colors">Denim</Link>
              </li>
              <li>
                <Link to="/products?category=specialty" className="hover:text-primary-400 transition-colors">Specialty</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Fabric Street, Textile City, TC 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>(+91) 9913074477</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>rajeshmangukiya0281@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Khodiyar Fabric. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;