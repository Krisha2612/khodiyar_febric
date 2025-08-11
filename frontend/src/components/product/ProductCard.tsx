import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import clsx from 'clsx';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Product Badge */}
      {(product.featured || product.newArrival) && (
        <div className="absolute top-3 left-3 z-10 space-y-2">
          {product.newArrival && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="badge badge-accent inline-block"
            >
              New Arrival
            </motion.span>
          )}
          {product.featured && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="badge badge-secondary inline-block"
            >
              Featured
            </motion.span>
          )}
        </div>
      )}
      
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={product.imageSrc} 
            alt={product.imageAlt} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Quick Action Buttons */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex space-x-2"
            >
              <Link 
                to={`/products/${product.id}`} 
                className="bg-white p-2 rounded-full shadow hover:bg-primary-50 transition-colors"
                title="Quick View"
              >
                <Eye size={18} className="text-neutral-800" />
              </Link>
              <button 
                onClick={handleAddToCart}
                className={clsx(
                  "p-2 rounded-full shadow transition-colors",
                  product.inStock
                    ? "bg-primary-600 hover:bg-primary-700"
                    : "bg-neutral-400 cursor-not-allowed"
                )}
                title={product.inStock ? "Add to Cart" : "Out of Stock"}
                disabled={!product.inStock}
              >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </motion.div>
          </div>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium mb-1 truncate">
          <Link to={`/products/${product.id}`} className="text-neutral-800 hover:text-primary-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-neutral-600 text-sm mb-2">{product.fabricType}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-neutral-900">${product.price.toFixed(2)}/yard</span>
          {!product.inStock && (
            <span className="text-sm text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;