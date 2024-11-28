import React from 'react';
import { 
  ClipboardDocumentListIcon, 
  CakeIcon, 
  CheckCircleIcon, 
  TruckIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface StatisticsProps {
  statistics: {
    pendingOrders: number;
    inProgressOrders: number;
    readyOrders: number;
    deliveredOrders: number;
    urgentOrders: number;
    lateOrders: number;
  };
}

export default function Statistics({ statistics }: StatisticsProps) {
  const stats = [
    { 
      name: 'Pedidos Pendientes', 
      value: statistics.pendingOrders, 
      icon: ClipboardDocumentListIcon,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      iconColor: 'text-amber-600 dark:text-amber-400'
    },
    { 
      name: 'En Preparación', 
      value: statistics.inProgressOrders, 
      icon: CakeIcon,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    { 
      name: 'Listos', 
      value: statistics.readyOrders, 
      icon: CheckCircleIcon,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    },
    { 
      name: 'Entregados', 
      value: statistics.deliveredOrders, 
      icon: TruckIcon,
      color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
      iconColor: 'text-violet-600 dark:text-violet-400'
    },
    { 
      name: 'Urgentes', 
      value: statistics.urgentOrders, 
      icon: ExclamationTriangleIcon,
      color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
      iconColor: 'text-rose-600 dark:text-rose-400'
    },
    { 
      name: 'Atrasados', 
      value: statistics.lateOrders, 
      icon: ClockIcon,
      color: 'bg-red-500/10 text-red-600 dark:text-red-400',
      iconColor: 'text-red-600 dark:text-red-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <div 
          key={stat.name} 
          className={`
            ${stat.color}
            p-4 rounded-xl
            transition-all duration-200
            hover:scale-105
            border border-gray-200 dark:border-gray-700
          `}
        >
          <div className="flex items-center justify-between">
            <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
            <span className="text-2xl font-bold">{stat.value}</span>
          </div>
          <div className="mt-2 text-sm font-medium">{stat.name}</div>
        </div>
      ))}
    </div>
  );
}

