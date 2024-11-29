import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, Head, useForm } from '@inertiajs/inertia-react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    price: '',
    size: '',
    ingredients: '',
    category: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('products.store'));
  };

  return (
    <DashboardLayout>
      <Head title="Crear Producto - Sweet Moments" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Crear Nuevo Producto</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && <div className="text-red-500 text-xs italic">{errors.name}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.description && <div className="text-red-500 text-xs italic">{errors.description}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                    Precio
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={data.price}
                    onChange={e => setData('price', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.price && <div className="text-red-500 text-xs italic">{errors.price}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="size" className="block text-gray-700 text-sm font-bold mb-2">
                    Tamaño
                  </label>
                  <input
                    type="text"
                    id="size"
                    value={data.size}
                    onChange={e => setData('size', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.size && <div className="text-red-500 text-xs italic">{errors.size}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">
                    Ingredientes
                  </label>
                  <textarea
                    id="ingredients"
                    value={data.ingredients}
                    onChange={e => setData('ingredients', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.ingredients && <div className="text-red-500 text-xs italic">{errors.ingredients}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                    Categoría
                  </label>
                  <input
                    type="text"
                    id="category"
                    value={data.category}
                    onChange={e => setData('category', e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.category && <div className="text-red-500 text-xs italic">{errors.category}</div>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={processing}
                  >
                    Crear Producto
                  </button>
                  <InertiaLink
                    href={route('products.index')}
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  >
                    Cancelar
                  </InertiaLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

