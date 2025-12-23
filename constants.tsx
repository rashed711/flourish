
import React from 'react';
import { 
  Palette, 
  Droplets, 
  Construction, 
  Shovel, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Award,
  Leaf,
  RefreshCw,
  Heart,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export const SERVICES = [
  { title: 'Landscape Design', icon: <Palette className="w-8 h-8 text-emerald-600" /> },
  { title: 'Irrigation Design', icon: <Droplets className="w-8 h-8 text-emerald-600" /> },
  { title: 'Landscape Construction', icon: <Construction className="w-8 h-8 text-emerald-600" /> },
  { title: 'Irrigation Construction', icon: <Shovel className="w-8 h-8 text-emerald-600" /> },
  { title: 'Landscape Maintenance', icon: <Settings className="w-8 h-8 text-emerald-600" /> },
  { title: 'Pest Control Services', icon: <ShieldCheck className="w-8 h-8 text-emerald-600" /> },
];

export const WHY_US = [
  { 
    title: 'Professionalism', 
    description: 'A dedicated team of experts delivering excellence in every interaction.',
    icon: <UserCheck className="w-12 h-12 text-emerald-700" /> 
  },
  { 
    title: 'Reliability', 
    description: 'Consistent, timely delivery and long-term commitment to your outdoor spaces.',
    icon: <Clock className="w-12 h-12 text-emerald-700" /> 
  },
  { 
    title: 'Quality', 
    description: 'Uncompromising standards using premium materials and innovative techniques.',
    icon: <Award className="w-12 h-12 text-emerald-700" /> 
  },
];

export const CORE_VALUES = [
  { title: 'Integrity', description: 'Honesty and transparency in all our business dealings and projects.', icon: <ShieldCheck /> },
  { title: 'Innovation', description: 'Embracing modern technology and creative design solutions.', icon: <Zap /> },
  { title: 'Passion', description: 'A deep-seated love for nature and the spaces we create.', icon: <Heart /> },
  { title: 'Growth', description: 'Continuous improvement for our team, clients, and environment.', icon: <TrendingUp /> },
  { title: 'Accountability', description: 'Taking full ownership of our results and service quality.', icon: <UserCheck /> },
];

export const PRINCIPLES = [
  { title: 'Nature First', description: 'Sustainable, eco-friendly solutions.', icon: <Leaf className="text-emerald-500" /> },
  { title: 'Quality Matters', description: 'Precision and excellence in every detail.', icon: <Award className="text-emerald-500" /> },
  { title: 'Continuous Care', description: 'Long-term beauty and functional integrity.', icon: <RefreshCw className="text-emerald-500" /> },
  { title: 'Protection & Balance', description: 'Healthy, pest-free environments.', icon: <ShieldCheck className="text-emerald-500" /> },
];

export const CLIENTS = [
  'Orascom Development', 'EMAAR Misr', 'Qatari Diar', 'West', 'RSST', 'Elsewedy Capital', 'Desert Rose'
];

export const PROJECTS = [
  { title: 'City Gate', description: 'Irrigation Execution', image: 'https://cbe-realestate-egypt.fsn1.your-objectstorage.com/properties-3984/571525.jpg' },
  { title: 'Coastal Road', description: 'Irrigation Design & Execution', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=800' },
  { title: 'O West', description: 'Irrigation Execution & Plants Supply', image: 'https://aqarsky.com/wp-content/uploads/2023/12/%D9%83%D9%85%D8%A8%D9%88%D9%86%D8%AF-%D8%A7%D9%88-%D9%88%D9%8A%D8%B3%D8%AA.webp' },
  { title: 'Sokhna Terminal Container', description: 'Landscape Supply & Installation', image: 'https://i.pinimg.com/736x/9a/60/5e/9a605e864d2290dc3144144b925dcb49.jpg' },
  { title: 'MIVIDA', description: 'Irrigation Execution (North 90th Square)', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/456847524.jpg?k=6ba576f49f9b84ea6dc00597aa4f02ce4662d65ec2da7d10702fbc6703c07e27&o=' },
  { title: 'Desert Rose Resort', description: 'Pest Control Consulting', image: 'https://i.pinimg.com/1200x/d6/85/d9/d685d9f55e6d83a1efcb1cefab862020.jpg' },
];
