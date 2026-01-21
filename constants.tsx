
import { Product, Category, ContactInfo } from './types';

export const COLORS = {
  primary: '#1E3A8A',
  secondary: '#F97316',
  accent: '#10B981',
  neutral: '#6B7280',
};

export const CONTACTS: ContactInfo[] = [
  { label: 'Supervisor', number: '+91 9973707263', icon: 'phone' },
  { label: 'Staff', number: '+91 7982718343', icon: 'phone' },
  { label: 'Admin', number: '+91 9113418419', icon: 'phone' },
  { label: 'Owner', number: '+91 6203663244', icon: 'phone' },
  { label: 'Technical Expert', number: '+91 8130985250', icon: 'phone' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'printing',
    name: 'Printing Services',
    icon: 'Printer',
    subcategories: ['Offset Printing', 'Flex & Vinyl', 'Custom Items', 'Specialty Printing']
  },
  {
    id: 'school',
    name: 'School Accessories',
    icon: 'BookOpen',
    subcategories: ['Educational Toys', 'AV Equipment', 'Laboratory Items', 'Sports Equipment', 'Music Instruments']
  },
  {
    id: 'textiles',
    name: 'Textiles & Uniforms',
    icon: 'Shirt',
    subcategories: ['School Uniforms', 'House T-Shirts', 'Sports Kits', 'Lab Coats']
  },
  {
    id: 'it',
    name: 'Computer & Electronics',
    icon: 'Monitor',
    subcategories: ['Hardware', 'PC Accessories', 'CCTV & Security', 'IT Services']
  },
  {
    id: 'stationery',
    name: 'Stationery',
    icon: 'PenTool',
    subcategories: ['Exercise Books', 'Art Supplies', 'Office Stationery', 'Charts']
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial STEM Robotics Kit',
    category: 'school',
    subcategory: 'Educational Toys',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced programmable robotics kit with 12 sensors and durable aluminum frame. Perfect for high school STEM labs.',
    features: ['Programmable', 'Durable Parts', 'Python Supported'],
    isFeatured: true
  },
  {
    id: '2',
    name: '75" 4K Smart Interactive Panel',
    category: 'school',
    subcategory: 'AV Equipment',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    description: 'Zero-bonding technology, 20-point touch, built-in Android 11 for seamless classroom interaction.',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Premium Wool-Blend Blazers',
    category: 'textiles',
    subcategory: 'School Uniforms',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    description: 'High-thread-count wool blend fabric with custom crest embroidery and anti-pilling finish.',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Precision Offset Press Service',
    category: 'printing',
    subcategory: 'Offset Printing',
    price: 500,
    image: 'https://images.unsplash.com/photo-1616462799793-9c871578e932?auto=format&fit=crop&q=80&w=800',
    description: 'High-speed 4-color offset printing for brochures, magazines, and business stationery.',
    isFeatured: true
  },
  {
    id: '5',
    name: 'Binocular Compound Microscope',
    category: 'school',
    subcategory: 'Laboratory Items',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&q=80&w=800',
    description: 'Professional 40X-2000X magnification with LED illumination and high-grade optics.',
    isFeatured: false
  },
  {
    id: '6',
    name: 'Large Format Flex Banner',
    category: 'printing',
    subcategory: 'Flex & Vinyl',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&q=80&w=800',
    description: 'Weatherproof high-resolution flex printing for banners and outdoor school signage.',
    isFeatured: false
  }
];

export const STATS = [
  { label: 'Years of Service', value: '15+' },
  { label: 'Schools Supplied', value: '500+' },
  { label: 'Products', value: '2000+' },
  { label: 'States Reached', value: '10+' }
];
