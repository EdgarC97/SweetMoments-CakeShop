import React from 'react';
import { Order }  from '@/types';

interface OrderListProps {
  orders: Order[];
}

const orderStatuses: { [key: string]: string } = {
  pending: 'bg-secondary-200 text-secondary-800',
  'in progress': 'bg-primary-200 text-primary-800',
  ready: 'bg-green-200 text-green-800',
  delivered: 'bg-purple-200 text-purple-800',
};

export default function OrderList({ orders }: OrderListProps) {
  return (
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div className="p-6 bg-white border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pedidos Recientes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Pedido</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Entrega</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notas</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.client.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.order_date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.delivery_date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${orderStatuses[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

