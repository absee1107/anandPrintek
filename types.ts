
export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price?: number;
  image: string;
  description: string;
  features?: string[];
  isFeatured?: boolean;
  gstRate?: number;
  hsnCode?: string;
  specifications?: Record<string, string>;
  minQuantity?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  organization: string;
  phone: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  date: string;
  paymentStatus: 'Paid' | 'Unpaid';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
  description?: string;
}

export interface ContactInfo {
  label: string;
  number: string;
  icon: string;
}
