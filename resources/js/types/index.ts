export interface Order {
  id: number;
  client_id: number;
  order_date: string;
  delivery_date: string;
  status: string;
  notes: string;
  client: {
    name: string;
  };
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string | null;
  ingredients: string | null;
  category: string;
  stock: number;
}

export interface Client {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PageProps {
  auth: {
      user: User;
  };
  ziggy: {
      location: string;
  };
}
