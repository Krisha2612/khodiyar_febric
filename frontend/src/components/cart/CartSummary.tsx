import React from 'react';
import { useCart } from '../../context/CartContext';

const CartSummary: React.FC = () => {
  const { subtotal } = useCart();
  
  // Calculate shipping, estimated based on subtotal
  const getShippingCost = () => {
    if (subtotal >= 100) {
      return 0; // Free shipping over $100
    }
    return 12.95;
  };
  
  const shipping = getShippingCost();
  const tax = subtotal * 0.08; // Assuming 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-neutral-50 rounded-lg p-6 sticky top-28">
      <h2 className="text-2xl font-heading font-medium mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Tax (8%)</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-neutral-200 pt-4">
          <div className="flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {subtotal < 100 && (
        <div className="bg-primary-50 text-primary-800 p-3 rounded mb-6 text-sm">
          Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping!
        </div>
      )}
      
      <button className="btn btn-primary w-full mb-3">
        Proceed to Checkout
      </button>
      
      <div className="mt-6">
        <div className="flex items-center justify-center mb-3">
          <span className="text-sm text-neutral-500">We accept</span>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="text-neutral-600 text-xs">Visa</div>
          <div className="text-neutral-600 text-xs">Mastercard</div>
          <div className="text-neutral-600 text-xs">Amex</div>
          <div className="text-neutral-600 text-xs">PayPal</div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;