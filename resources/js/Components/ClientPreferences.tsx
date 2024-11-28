import React from 'react';
import { StarIcon, HeartIcon, ClockIcon } from '@heroicons/react/24/outline';

interface ClientPreference {
  id: number;
  clientName: string;
  favoriteProducts: string[];
  specialInstructions: string;
  lastOrderDate: string;
}

interface ClientPreferencesProps {
  preferences: ClientPreference[];
}

export default function ClientPreferences({ preferences }: ClientPreferencesProps) {
  return (
    <div className="bg-gray-800 dark:bg-navy-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-montserrat font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Client Preferences
      </h2>
      
      <div className="space-y-4">
        {preferences.map((preference) => (
          <div 
            key={preference.id}
            className="p-4 rounded-lg bg-gray-700 dark:bg-navy-700/50 border border-gray-500 dark:border-navy-600"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <StarIcon className="h-5 w-5 text-amber-500" />
                  {preference.clientName}
                </h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <HeartIcon className="h-4 w-4" />
                    <span>Favorite Products: {preference.favoriteProducts.join(', ')}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>Special Instructions: {preference.specialInstructions}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>Last Order: {preference.lastOrderDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

