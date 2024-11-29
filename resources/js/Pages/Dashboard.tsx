import React from 'react';
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Statistics from '@/Components/Statistics';
import OrderCalendar from '@/Components/OrderCalendar';
import PriorityOrders from '@/Components/PriorityOrders';
import TopProducts from '@/Components/TopProducts';
import ClientPreferences from '@/Components/ClientPreferences';
import { Order } from '@/types';

interface DashboardProps {
  orders: Order[];
}

export default function Dashboard({ orders }: DashboardProps) {
  const statistics = {
    pendingOrders: orders.filter(order => order.status === 'pending').length,
    inProgressOrders: orders.filter(order => order.status === 'in progress').length,
    readyOrders: orders.filter(order => order.status === 'ready').length,
    deliveredOrders: orders.filter(order => order.status === 'delivered').length,
    urgentOrders: orders.filter(order => {
      const deliveryDate = new Date(order.delivery_date);
      const today = new Date();
      return deliveryDate.getTime() - today.getTime() <= 2 * 24 * 60 * 60 * 1000;
    }).length,
    lateOrders: orders.filter(order => new Date(order.delivery_date) < new Date() && order.status !== 'delivered').length,
  };

  // Sample client preferences data
  const clientPreferences = [
    {
      id: 1,
      clientName: "Maria González",
      favoriteProducts: ["Chocolate Cake", "Red Velvet Cupcakes"],
      specialInstructions: "Prefers less sweet frosting",
      lastOrderDate: "2023-11-20"
    },
    {
      id: 2,
      clientName: "Carlos Rodríguez",
      favoriteProducts: ["Carrot Cake", "Cheesecake"],
      specialInstructions: "Allergic to nuts",
      lastOrderDate: "2023-11-25"
    }
  ];

  return (
    <DashboardLayout>
      <Head title="Dashboard - Sweet Moments" />
      
      <div className="p-6 space-y-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-montserrat text-center text-gray-800 dark:text-gray-200 mb-6">
            Dashboard
          </h1>

          {/* Statistics */}
          <div className="mb-6">
            <Statistics statistics={statistics} />
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar and Top Products */}
            <div className="space-y-6">
              <OrderCalendar orders={orders} />
              <TopProducts products={[
                { name: 'Chocolate Cake', quantity: 25, percentage: 100 },
                { name: 'Vanilla Cupcakes', quantity: 20, percentage: 80 },
                { name: 'Carrot Cake', quantity: 15, percentage: 60 },
                { name: 'Decorated Cookies', quantity: 12, percentage: 48 },
              ]} />
            </div>

            {/* Priority Orders */}
            <div>
              <PriorityOrders orders={orders} />
            </div>

            {/* Client Preferences */}
            <div>
              <ClientPreferences preferences={clientPreferences} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

