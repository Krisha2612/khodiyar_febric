import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      {/* Product Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-heading font-medium text-neutral-900 mb-2">{product.name}</h1>
        <div className="flex flex-wrap gap-2 items-center mb-4">
          <span className="text-2xl font-medium text-neutral-900">${product.price.toFixed(2)}/yard</span>
          {product.inStock ? (
            <span className="badge badge-primary">In Stock</span>
          ) : (
            <span className="badge bg-red-100 text-red-800">Out of Stock</span>
          )}
          {product.newArrival && <span className="badge badge-accent">New Arrival</span>}
        </div>
      </div>
      
      {/* Product Description */}
      <div className="mb-8">
        <p className="text-neutral-700">{product.description}</p>
      </div>
      
      {/* Product Specifications */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between border-b border-neutral-200 py-2">
            <span className="text-neutral-600">Fabric Type</span>
            <span className="font-medium">{product.fabricType}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-200 py-2">
            <span className="text-neutral-600">Weight</span>
            <span className="font-medium">{product.weight}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-200 py-2">
            <span className="text-neutral-600">Width</span>
            <span className="font-medium">{product.width}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-200 py-2">
            <span className="text-neutral-600">Colors</span>
            <span className="font-medium">{product.colors.join(', ')}</span>
          </div>
          <div className="flex justify-between border-b border-neutral-200 py-2">
            <span className="text-neutral-600">Patterns</span>
            <span className="font-medium">{product.patterns.join(', ')}</span>
          </div>
        </div>
      </div>
      
      {/* Quantity and Add to Cart */}
      <div className="mt-8">
        <div className="mb-6">
          <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
            Quantity (yards)
          </label>
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              disabled={!product.inStock}
              className="p-2 border border-neutral-300 rounded-l-md bg-neutral-50 text-neutral-600 hover:bg-neutral-100 disabled:opacity-50"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              disabled={!product.inStock}
              className="w-16 text-center border-y border-neutral-300 py-2 focus:ring-0 focus:outline-none"
            />
            <button
              onClick={handleIncrease}
              disabled={!product.inStock}
              className="p-2 border border-neutral-300 rounded-r-md bg-neutral-50 text-neutral-600 hover:bg-neutral-100 disabled:opacity-50"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="btn btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={20} />
          <span>Add to Cart</span>
        </button>
        
        {!product.inStock && (
          <p className="text-red-600 text-sm mt-2">This product is currently out of stock.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;