import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { Order } from '@/types';

export interface OrderCalendarProps {
  orders: Order[];
}

export default function OrderCalendar({ orders }: OrderCalendarProps) {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get days with orders
  const daysWithOrders = days.map(day => ({
    date: day,
    orders: orders.filter(order => isSameDay(new Date(order.delivery_date), day))
  }));

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 dark:bg-navy-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Delivery Calendar
        </h2>
        
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div 
              key={day}
              className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2"
            >
              {day}
            </div>
          ))}
          
          {daysWithOrders.map(({ date, orders }) => {
            const hasOrders = orders.length > 0;
            const isToday = isSameDay(date, today);
            
            return (
              <div
                key={date.toISOString()}
                className={`
                  relative p-2 text-center rounded-lg transition-all
                  ${isToday ? 'bg-indigo-100 dark:bg-indigo-900/30' : ''}
                  ${hasOrders ? 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20' : ''}
                `}
              >
                <span className={`
                  text-sm font-medium
                  ${isToday ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}
                `}>
                  {format(date, 'd')}
                </span>
                
                {hasOrders && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

