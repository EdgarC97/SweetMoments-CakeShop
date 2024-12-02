import React from 'react';
import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Client } from '@/types';

interface ClientsIndexProps {
  clients: Client[];
}

const Index: React.FC<ClientsIndexProps> = ({ clients }) => {
  return (
    <DashboardLayout>
      <Head title="Clientes - Sweet Moments" />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Lista de Clientes</h1>
          <Link
            href={route('clients.index')} // Changed from 'clients.create' to 'clients.index'
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Agregar Cliente
          </Link>
        </div>
        {clients && clients.length > 0 ? (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {clients.map((client) => (
                <li key={client.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {client.name} {client.last_name}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <Link
                          href={route('clients.index', { id: client.id })} // Changed from 'clients.edit' to 'clients.index'
                          className="mr-2 text-indigo-600 hover:text-indigo-900"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Link>
                        <Link
                          href={route('clients.index', { id: client.id })} // Changed from 'clients.destroy' to 'clients.index'
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
                          {client.email}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          {client.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">No hay clientes disponibles.</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Index;

