import React from 'react';
import { Order } from '@/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface PriorityOrdersProps {
  orders: Order[];
}

export default function PriorityOrders({ orders }: PriorityOrdersProps) {
  // Filtrar y ordenar pedidos prioritarios
  const priorityOrders = orders
    .filter(order => order.status === 'pending' || order.status === 'in progress')
    .sort((a, b) => new Date(a.delivery_date).getTime() - new Date(b.delivery_date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Prioritary orders
      </h2>
      
      <div className="space-y-4">
        {priorityOrders.map((order) => (
          <div 
            key={order.id}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-gray-600"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${order.status === 'pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'}
                `}>
                  {order.status === 'pending' ? 'Pendiente' : 'En Preparación'}
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {order.client.name}
                </span>
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {order.notes}
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Entrega:
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {format(new Date(order.delivery_date), "d 'de' MMMM", { locale: es })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

