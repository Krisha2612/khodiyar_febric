import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, itemCount, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-12">
        <div className="container-padded">
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-neutral-400" />
            </div>
            <h1 className="text-3xl font-heading mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any fabrics to your cart yet. Explore our collection to find the perfect materials for your project.
            </p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container-padded">
        <h1 className="text-3xl font-heading mb-2">Shopping Cart</h1>
        <p className="text-neutral-600 mb-8">
          {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Cart Items</h2>
                <button 
                  onClick={clearCart}
                  className="text-sm text-neutral-600 hover:text-red-600 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
              
              <div className="divide-y divide-neutral-200">
                {cart.map(item => (
                  <CartItem 
                    key={item.product.id} 
                    product={item.product} 
                    quantity={item.quantity} 
                  />
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
                <Link 
                  to="/products" 
                  className="text-primary-600 hover:text-primary-700 font-medium mb-4 sm:mb-0"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;