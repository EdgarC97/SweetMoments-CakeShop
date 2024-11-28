import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/DashboardLayout';

export default function ProductsIndex() {
  return (
    <Layout>
      <Head title="Products - Dulces Momentos" />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-serif text-gray-800 dark:text-gray-200 mb-6">
            Products
          </h1>

          <div className="bg-white dark:bg-navy-800 rounded-xl shadow-lg">
            <div className="p-6">
              <p className="text-gray-500 dark:text-gray-400">
                Products list coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

