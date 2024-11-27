import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

// Definimos la estructura de los datos de los pedidos
interface Order {
  id: number;
  name: string;
  status: string;
}

interface DashboardProps {
  orders: Order[];
}

const Dashboard: React.FC<DashboardProps> = ({ orders }) => {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      
      <div className="py-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Pedidos Pendientes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.length === 0 ? (
            <p className="text-gray-500">No hay pedidos pendientes</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-700">{order.name}</h2>
                <p className="text-gray-500">Estado: {order.status}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
