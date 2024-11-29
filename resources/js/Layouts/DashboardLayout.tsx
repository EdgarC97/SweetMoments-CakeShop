import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import {
  ChartPieIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  CakeIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Sidebar with updated design */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 w-64 
          bg-gradient-to-b from-purple-950 to-indigo-950
          transition duration-300 transform 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0
          border-r border-indigo-900/50
        `}
      >
        <div className="flex items-center justify-center h-20 bg-purple-900/50">
          <h1 className="text-2xl font-montserrat text-white text-center">Sweet Moments</h1>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            <Link
              className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-indigo-800/50 transition-colors group"
              href={route('dashboard')}
            >
              <ChartPieIcon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span className="font-medium group-hover:text-white text-center">Dashboard</span>
            </Link>

            <Link
              className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-indigo-800/50 transition-colors group"
              href={route('orders.index')}
              onClick={() => console.log('Redirigiendo a:', route('clients.index'))}
            >
              <ClipboardDocumentListIcon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span className="font-medium group-hover:text-white text-center">Orders</span>
            </Link>

            <Link
              className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-indigo-800/50 transition-colors group"
              href={route('clients.index')}
            >
              <UserGroupIcon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span className="font-medium group-hover:text-white text-center">Clients</span>
            </Link>

            <Link
              className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-indigo-800/50 transition-colors group"
              href={route('products.index')}
            >
              <CakeIcon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span className="font-medium group-hover:text-white text-center">Products</span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm border-b border-indigo-800/50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg text-gray-400 hover:bg-indigo-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <div className="text-lg font-montserrat text-white text-center w-full">
            Order Management System
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}

