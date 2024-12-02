import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Order } from '@/types';

interface OrdersIndexProps {
  orders: Order[];
}

const Index: React.FC<OrdersIndexProps> = ({ orders }) => {
  return (
    <DashboardLayout>
      <Head title="Órdenes - Sweet Moments" />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Lista de Órdenes</h1>
          <Link
            href={route('orders.index')} // Changed from 'orders.create' to 'orders.index'
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Crear Orden
          </Link>
        </div>
        {orders && orders.length > 0 ? (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {orders.map((order) => (
                <li key={order.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        Orden #{order.id} - {order.client.name}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <Link
                          href={route('orders.index', { id: order.id })} // Changed from 'orders.show' to 'orders.index'
                          className="mr-2 text-blue-600 hover:text-blue-900"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </Link>
                        <Link
                          href={route('orders.index', { id: order.id })} // Changed from 'orders.edit' to 'orders.index'
                          className="mr-2 text-indigo-600 hover:text-indigo-900"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Link>
                        <Link
                          href={route('orders.index', { id: order.id })} // Changed from 'orders.destroy' to 'orders.index'
                          method="delete"
                          as="button"
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          Fecha: {new Date(order.order_date).toLocaleDateString()}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          Estado: {order.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">No hay órdenes disponibles.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Index;

