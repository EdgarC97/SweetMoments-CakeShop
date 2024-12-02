import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Product } from '@/types';
import { PencilIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import ViewProductModal from './Modals/ViewProductModal';
import EditProductModal from './Modals/EditProductModal';
import DeleteProductModal from './Modals/DeleteProductModal';

interface ProductsIndexProps {
  products: Product[];
}

const ProductsIndex: React.FC<ProductsIndexProps> = ({ products: initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { delete: destroy } = useForm();

  const formatPrice = (price: number | string | null): string => {
    if (typeof price === 'number') {
      return (price / 100).toFixed(2);
    } else if (typeof price === 'string') {
      const numPrice = parseFloat(price);
      return isNaN(numPrice) ? 'N/A' : (numPrice / 100).toFixed(2);
    }
    return 'N/A';
  };

  const handleView = (product: Product) => {
    setSelectedProduct(product);
    setViewModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  const handleSave = (updatedProduct: Product) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setEditModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      destroy(route('products.destroy', selectedProduct.id), {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          setProducts(products.filter(p => p.id !== selectedProduct.id));
          setDeleteModalOpen(false);
        },
      });
    }
  };

  return (
    <DashboardLayout>
      <Head title="Products - Sweet Moments" />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Lista de Productos</h1>
          <button
            onClick={() => handleEdit({ id: 0 } as Product)} // Passing an empty product for creation
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Agregar Producto
          </button>
        </div>
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
                <p className="mt-2 text-sm text-gray-500">
                  Categoría: {product.category}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Stock: {product.stock}
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleView(product)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors duration-200"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors duration-200"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(product)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-200"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No hay productos disponibles.</p>
        )}
      </div>

      {selectedProduct && (
        <>
          <ViewProductModal
            isOpen={viewModalOpen}
            onClose={() => setViewModalOpen(false)}
            product={selectedProduct}
          />
          <EditProductModal
            isOpen={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            product={selectedProduct}
            onSave={handleSave}
          />
          <DeleteProductModal
            isOpen={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            product={selectedProduct}
            onConfirm={handleConfirmDelete}
          />
        </>
      )}
    </DashboardLayout>
  );
};

export default ProductsIndex;
