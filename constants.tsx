
import { Product, Category, ContactInfo } from './types';

export const COLORS = {
  primary: '#1E3A8A',
  secondary: '#F97316',
  accent: '#10B981',
  neutral: '#6B7280',
};

export const GST_NUMBER = '20CKLPS7146C1Z8';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/anandprintek',
  facebook: 'https://www.facebook.com/anandprintek',
  youtube: 'https://www.YouTube.com/@anandprintek',
  whatsapp_primary: 'https://wa.me/919973727063',
  whatsapp_secondary: 'https://wa.me/919113418419'
};

export const BRANCHES = [
  {
    name: 'Main HQ - Dhanbad',
    address: 'CO Gyan Prakash Jha, H. No. 202A, Kenduapul Jharia Road, Near Durga Mandir, Dhanbad, Jharkhand - 826001',
    landmark: 'Shakti Decorator Godown',
    phone: '+91 9973727063'
  },
  {
    name: 'Govindpur Branch',
    manager: 'Shashank Abhishek',
    address: 'So Sri Gyan Prakash Jha, Bankali Road, Govindpur, BANKALI VATiKA DREAMLINE PUBLIC SCHOOL, GOBINDPUR, JHARKHAND 828109',
    phone: '+91 8130985250'
  }
];

export const CONTACTS: ContactInfo[] = [
  { label: 'Primary WhatsApp', number: '+91 9973727063', icon: 'phone' },
  { label: 'Govindpur Branch', number: '+91 8130985250', icon: 'phone' },
  { label: 'Admin Support', number: '+91 9113418419', icon: 'phone' },
  { label: 'Staff Support', number: '+91 7982718343', icon: 'phone' },
  { label: 'Enterprise Owner', number: '+91 6203663244', icon: 'phone' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'printing',
    name: 'Printing Services',
    icon: 'Printer',
    description: 'Complete high-volume institutional printing solutions.',
    subcategories: ['Offset Printing', 'Flex & Vinyl', 'ID Cards', 'Annual Magazines', 'Admission Kits']
  },
  {
    id: 'stem',
    name: 'STEM & Robotics',
    icon: 'Zap',
    description: 'Cutting-edge educational technology and robotics kits.',
    subcategories: ['Arduino Kits', 'STEM Construction', 'Coding Tools', 'Scientific Models']
  },
  {
    id: 'furniture',
    name: 'School Furniture',
    icon: 'Layout',
    description: 'Ergonomic and durable furniture for modern classrooms.',
    subcategories: ['Student Desks', 'Teacher Tables', 'Library Racks', 'Lab Benches']
  },
  {
    id: 'it',
    name: 'Digital Infrastructure',
    icon: 'Monitor',
    description: 'IT hardware and smart classroom digital systems.',
    subcategories: ['Interactive Panels', 'CCTV Systems', 'Laptops', 'Network Solutions']
  },
  {
    id: 'textiles',
    name: 'Textiles & Sports',
    icon: 'Shirt',
    description: 'High-quality uniforms and professional sports equipment.',
    subcategories: ['School Uniforms', 'Sports Gear', 'House Blazers', 'Band Uniforms']
  },
  {
    id: 'stationery',
    name: 'Bulk Stationery',
    icon: 'PenTool',
    description: 'Institutional grade office and classroom supplies.',
    subcategories: ['Exercise Books', 'Office Files', 'Art Supplies', 'Exam Sheets']
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'STEM-001',
    name: 'Advanced Robotics Discovery Kit',
    category: 'stem',
    subcategory: 'Arduino Kits',
    price: 8450,
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive Arduino-based robotics kit including 20+ sensors and programmable logic.',
    features: ['Python Compatible', 'Wireless Control', 'Project Guide Included'],
    gstRate: 18,
    hsnCode: '9023',
    isFeatured: true,
    stockStatus: 'In Stock',
    tags: ['Best Seller', 'New Arrival']
  },
  {
    id: 'FURN-102',
    name: 'ErgoDual Classroom Desk Set',
    category: 'furniture',
    subcategory: 'Student Desks',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy-duty steel frame dual student desk with height adjustment and storage compartments.',
    features: ['Scratch Resistant', 'Adjustable Height', 'Padded Seating'],
    gstRate: 18,
    hsnCode: '9403',
    isFeatured: true,
    stockStatus: 'In Stock'
  },
  {
    id: 'PRNT-201',
    name: 'Premium School Prospectus (1000 Pack)',
    category: 'printing',
    subcategory: 'Admission Kits',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    description: 'Full-color high-gloss school prospectus with custom design and high-quality paper.',
    features: ['A4 Size', 'Gloss Lamination', 'Premium Art Paper'],
    gstRate: 12,
    hsnCode: '4901',
    isFeatured: true,
    stockStatus: 'In Stock'
  },
  {
    id: 'IT-505',
    name: '4K Ultra-HD Interactive Panel 86"',
    category: 'it',
    subcategory: 'Interactive Panels',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    description: 'Next-generation smart teaching board with 20-point multi-touch and built-in Android OS.',
    features: ['Anti-Glare Glass', 'Wireless Casting', 'Teaching Software Suite'],
    gstRate: 18,
    hsnCode: '8528',
    isFeatured: true,
    stockStatus: 'Low Stock'
  },
  {
    id: 'TXT-901',
    name: 'Secondary School Blazer (Pack of 50)',
    category: 'textiles',
    subcategory: 'House Blazers',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    description: 'Wool-blend premium school blazers with custom embroidered crest.',
    features: ['Anti-Wrinkle', 'Color Fastness', 'Tailored Fit'],
    gstRate: 5,
    hsnCode: '6203',
    stockStatus: 'In Stock'
  }
];

export const STATS = [
  { label: 'Active Institutions', value: '1,250+' },
  { label: 'Products Cataloged', value: '2,500+' },
  { label: 'States Served', value: '22+' },
  { label: 'Satisfied Clients', value: '10k+' }
];
