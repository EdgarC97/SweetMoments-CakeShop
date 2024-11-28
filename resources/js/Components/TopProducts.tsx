import React from 'react';
import { CakeIcon } from '@heroicons/react/24/outline';

interface TopProduct {
  name: string;
  quantity: number;
  percentage: number;
}

interface TopProductsProps {
  products: TopProduct[];
}

export default function TopProducts({ products }: TopProductsProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Productos Más Vendidos
      </h2>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div 
            key={product.name}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50"
          >
            <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
              <CakeIcon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {product.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.quantity} pedidos
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-rose-500 dark:bg-rose-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${product.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

