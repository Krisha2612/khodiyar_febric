import React from 'react';
import { Link } from 'react-router-dom';
import { Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center py-6 border-b border-neutral-200 animate-fade-in">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 flex-shrink-0">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.imageSrc} 
            alt={product.imageAlt}
            className="w-full h-full object-cover rounded"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-grow px-4 text-center sm:text-left">
        <h3 className="text-lg font-medium">
          <Link to={`/products/${product.id}`} className="text-neutral-800 hover:text-primary-600">
            {product.name}
          </Link>
        </h3>
        <p className="text-neutral-600 text-sm">{product.fabricType}</p>
        <p className="text-neutral-600 text-sm">${product.price.toFixed(2)}/yard</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center space-x-1 mt-4 sm:mt-0">
        <button 
          onClick={handleDecrease}
          className="p-1 rounded-md hover:bg-neutral-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="w-12 h-8 text-center border border-neutral-300 rounded-md"
          value={quantity}
          readOnly
        />
        <button 
          onClick={handleIncrease}
          className="p-1 rounded-md hover:bg-neutral-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Item Total */}
      <div className="w-24 text-right mt-4 sm:mt-0 ml-4">
        <p className="font-medium">${(product.price * quantity).toFixed(2)}</p>
      </div>
      
      {/* Remove Button */}
      <div className="ml-4 mt-4 sm:mt-0">
        <button 
          onClick={handleRemove}
          className="p-1 text-neutral-500 hover:text-red-600 transition-colors"
          aria-label="Remove item"
        >
          <Trash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;