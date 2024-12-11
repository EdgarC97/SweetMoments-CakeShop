import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { router } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { Product } from '@/types';

interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ isOpen, onClose, product }) => {
  const handleDelete = () => {
    router.delete(route('products.destroy', product.id), {
      preserveState: false,
      preserveScroll: false,
      onSuccess: () => {
        toast.success('Producto eliminado con éxito');
        onClose();
      },
      onError: (errors) => {
        toast.error('Hubo un error al eliminar el producto. Por favor, intente de nuevo.');
        console.error(errors);
      }
    });
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Eliminar Producto
              </Dialog.Title>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="mt-2">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mb-2" />
                <p className="text-sm text-gray-500">
                  ¿Estás seguro de que quieres eliminar el producto "{product.name}"? Esta acción no se puede deshacer.
                </p>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                  onClick={onClose}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={handleDelete}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteProductModal;