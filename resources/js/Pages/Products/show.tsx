import React from 'react';
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Product } from '@/types';

interface ShowProps {
  product: Product;
}

export default function Show({ product }: ShowProps) {
  return (
    <DashboardLayout>
      <Head title={`${product.name} - Sweet Moments`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">{product.name}</h1>
              <div className="mb-4">
                <strong className="text-gray-700">Descripción:</strong>
                <p className="mt-1">{product.description}</p>
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">Precio:</strong>
                <p className="mt-1">${product.price.toFixed(2)}</p>
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">Tamaño:</strong>
                <p className="mt-1">{product.size}</p>
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">Ingredientes:</strong>
                <p className="mt-1">{product.ingredients}</p>
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">Categoría:</strong>
                <p className="mt-1">{product.category}</p>
              </div>
              <div className="mt-6">
                <InertiaLink
                  href={route('products.edit', product.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                >
                  Editar
                </InertiaLink>
                <InertiaLink
                  href={route('products.index')}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Volver
                </InertiaLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

