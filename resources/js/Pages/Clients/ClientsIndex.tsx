import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Client {
  id: number;
  name: string;
  email: string;
}

interface ClientsIndexProps {
  clients: Client[];
}

const ClientsIndex: React.FC<ClientsIndexProps> = ({ clients }) => {
  return (
    <AuthenticatedLayout>
      <Head title="Clientes" />
      <div className="py-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Lista de Clientes</h1>
        <div className="space-y-4">
          {clients.map((client) => (
            <div key={client.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{client.name}</h2>
              <p>{client.email}</p>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ClientsIndex;
