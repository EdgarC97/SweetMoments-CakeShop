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
  size: string;
  ingredients: string;
}

