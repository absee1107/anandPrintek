
import { Product, Category, ContactInfo } from './types';

export const COLORS = {
  primary: '#1E3A8A',
  secondary: '#F97316',
  accent: '#10B981',
  neutral: '#6B7280',
};

export const CONTACTS: ContactInfo[] = [
  { label: 'Supervisor', number: '+91 9973707263', icon: 'phone' },
  { label: 'Staff Support', number: '+91 7982718343', icon: 'phone' },
  { label: 'Administration', number: '+91 9113418419', icon: 'phone' },
  { label: 'Enterprise Owner', number: '+91 6203663244', icon: 'phone' },
  { label: 'Technical Expert', number: '+91 8130985250', icon: 'phone' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'printing',
    name: 'Printing Services',
    icon: 'Printer',
    description: 'Complete printing, stationery and educational material supply.',
    subcategories: ['Offset Printing', 'Flex & Vinyl', 'ID Cards', 'Magazines', 'Corporate Stationery', 'Large Format Printing']
  },
  {
    id: 'lab',
    name: 'Lab & Science',
    icon: 'Beaker',
    description: 'Scientific equipment and kits for schools and universities.',
    subcategories: ['Physics Lab', 'Chemistry Kits', 'Biology Models', 'Microscopes', 'Anatomical Models']
  },
  {
    id: 'it',
    name: 'IT & Digital',
    icon: 'Monitor',
    description: 'Smart classroom solutions and hardware infrastructure.',
    subcategories: ['Interactive Panels', 'CCTV Systems', 'Laptops/PCs', 'Projectors', 'Language Lab Equipment']
  },
  {
    id: 'edu-services',
    name: 'Educational Services',
    icon: 'BookOpen',
    description: 'Complete educational material supply and printing services.',
    subcategories: ['Exam Papers', 'Academic Year Printing', 'Admission & Prospectus', 'Certificates']
  },
  {
    id: 'textiles',
    name: 'Uniforms & Textiles',
    icon: 'Shirt',
    description: 'Durable and customized school uniforms and sports gear.',
    subcategories: ['School Uniforms', 'Sports Kits', 'Blazers', 'House T-Shirts']
  },
  {
    id: 'university',
    name: 'University Supplies',
    icon: 'GraduationCap',
    description: 'Complete university and college specialized supplies.',
    subcategories: ['Research Materials', 'Seminar & Conference', 'Degree Certificates', 'Campus Signage']
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  // --- EDUCATIONAL SERVICES / EXAM PAPERS ---
  {
    id: 'EXAM-SEAS-001',
    name: 'Seasonal Exam Paper Printing (Secure)',
    category: 'edu-services',
    subcategory: 'Exam Papers',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800',
    description: 'Printing of seasonal exam papers with security features. Custom question paper design and secure packaging.',
    features: ['Confidential Printing', 'Security Watermarks', 'Sealed Envelopes'],
    gstRate: 18,
    hsnCode: '9988',
    isFeatured: true
  },
  {
    id: 'DIARY-SCH-001',
    name: 'Customized School Diary (Academic)',
    category: 'edu-services',
    subcategory: 'Academic Year Printing',
    price: 85,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    description: 'Personalized school diaries with timetable, rules, and daily notes sections. 70GSM white paper.',
    features: ['Hard Cover', 'Custom Branding', 'Daily Planner Layout'],
    gstRate: 12,
    hsnCode: '4820',
    isFeatured: true
  },

  // --- LAB & SCIENCE ---
  {
    id: 'SCI-SOLAR-001',
    name: '3D Solar System Educational Model',
    category: 'lab',
    subcategory: 'Biology Models',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&q=80&w=800',
    description: 'Realistic 3D solar system model with detailed planets. Perfect for science labs.',
    features: ['LED Lighting', 'Wooden Base', 'Detailed Scale'],
    gstRate: 12,
    hsnCode: '9023'
  },
  {
    id: 'UNI-MICRO-001',
    name: 'Research-Grade Digital Microscope',
    category: 'lab',
    subcategory: 'Microscopes',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&q=80&w=800',
    description: 'High-end microscope for university laboratories. Features 1000X magnification and digital capture.',
    features: ['Digital Interface', 'Achromatic Optics', 'High Resolution'],
    gstRate: 18,
    hsnCode: '9011',
    isFeatured: true
  },

  // --- IT & DIGITAL ---
  {
    id: 'IT-TOUCH-075',
    name: '75" 4K Interactive Smart Panel',
    category: 'it',
    subcategory: 'Interactive Panels',
    price: 115000,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    description: 'Complete interactive solution for smart classrooms. Supports Android & Windows dual OS.',
    features: ['20 Point Touch', '4K UHD Resolution', 'Teaching Software'],
    gstRate: 18,
    hsnCode: '8528',
    isFeatured: true
  },

  // --- PRINTING SERVICES ---
  {
    id: 'PR-HOARD-01',
    name: 'Institutional Large Format Hoarding',
    category: 'printing',
    subcategory: 'Large Format Printing',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1565689221354-d87f85d4aee2?auto=format&fit=crop&q=80&w=800',
    description: '10x20 ft high-quality flex hoarding for school announcements and branding.',
    features: ['Weatherproof', 'UV Protected Ink', 'Reinforced Grommets'],
    gstRate: 18,
    hsnCode: '4901'
  },

  // --- UNIVERSITY SUPPLIES ---
  {
    id: 'UNI-THESIS-001',
    name: 'Professional Thesis Binding Service',
    category: 'university',
    subcategory: 'Research Materials',
    price: 450,
    image: 'https://images.unsplash.com/photo-1531346688376-ab6275c4725e?auto=format&fit=crop&q=80&w=800',
    description: 'Gold-foiled hard binding for research papers and PhD dissertations.',
    features: ['Leatherette Finish', 'Gold/Silver Embossing', 'Archival Quality'],
    gstRate: 18,
    hsnCode: '9987',
    isFeatured: true
  },
  
  // --- TEXTILES ---
  {
    id: 'TX-UNI-B',
    name: 'Standard Secondary Uniform (Boys)',
    category: 'textiles',
    subcategory: 'School Uniforms',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    description: 'Comfortable cotton-poly blend shirt and trouser set. Durable for daily use.',
    features: ['Sweat Absorbent', 'Color Fastness', 'Tear Resistant'],
    gstRate: 5,
    hsnCode: '6203'
  }
];

export const STATS = [
  { label: 'Total Main Categories', value: '8' },
  { label: 'Active Products', value: '100+' },
  { label: 'Partner Schools', value: '500+' },
  { label: 'GST Compliance', value: '100%' }
];
