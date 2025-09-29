'use client';

import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartDebug() {
  const { state } = useCart();
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      setLocalStorageData(savedCart);
    }
  }, [state.items]);

  const clearCart = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
      setLocalStorageData(null);
    }
  };

  const refreshData = () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      setLocalStorageData(savedCart);
    }
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-yellow-100 border border-yellow-400 rounded-lg p-4 max-w-md z-50">
      <h3 className="font-bold text-yellow-800 mb-2">Cart Debug (Dev Only)</h3>
      
      <div className="space-y-2 text-sm">
        <div>
          <strong>Context State:</strong>
          <pre className="bg-white p-2 rounded text-xs overflow-auto">
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
        
        <div>
          <strong>localStorage Data:</strong>
          <pre className="bg-white p-2 rounded text-xs overflow-auto">
            {localStorageData || 'null'}
          </pre>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={refreshData}
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            Refresh
          </button>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          >
            Clear localStorage
          </button>
        </div>
      </div>
    </div>
  );
}
