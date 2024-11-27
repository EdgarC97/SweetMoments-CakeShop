import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

interface Order {
  id: number;
  client: { name: string };
  status: string;
}

interface OrdersIndexProps {
  orders: Order[];
}

const OrdersIndex: React.FC<OrdersIndexProps> = ({ orders }) => {
  return (
    <AuthenticatedLayout>
      <Head title="Pedidos" />
      <div className="py-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Lista de Pedidos</h1>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{order.client.name}</h2>
              <p>Estado: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default OrdersIndex;
