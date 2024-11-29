import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Product } from '@/types';

interface ProductsIndexProps {
  products: Product[];
}

const ProductsIndex: React.FC<ProductsIndexProps> = ({ products }) => {
  console.log('Products received:', products);

  const formatPrice = (price: number | string | null): string => {
    if (typeof price === 'number') {
      return price.toFixed(2);
    } else if (typeof price === 'string') {
      const numPrice = parseFloat(price);
      return isNaN(numPrice) ? 'N/A' : numPrice.toFixed(2);
    }
    return 'N/A';
  };

  return (
    <DashboardLayout>
      <Head title="Products - Sweet Moments" />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Lista de Productos</h1>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-purple-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-700">
                    ${formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-500">{product.size || 'N/A'}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Ingredientes: {product.ingredients || 'No especificados'}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No hay productos disponibles.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProductsIndex;

