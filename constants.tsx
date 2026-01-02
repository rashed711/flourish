
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
  UserCheck,
  CheckCircle2,
  Cpu,
  Target,
  Sparkles,
  Search
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
  { 
    title: 'Integrity', 
    principles: [
      { title: 'Nature First', description: 'We prioritize sustainable and eco-friendly solutions.' },
      { title: 'Quality Matters', description: 'Every project is executed with precision and excellence.' },
      { title: 'Continuous Care', description: 'From construction to maintenance, we ensure long-lasting beauty and functionality.' },
      { title: 'Protection & Balance', description: 'Effective pest control and smart design keep spaces healthy and vibrant.' }
    ]
  },
  { 
    title: 'Innovation', 
    principles: [
      { title: 'Smart Irrigation', description: 'Utilizing water-saving technologies and automated systems.' },
      { title: 'Modern Design', description: 'Blending contemporary architecture with organic natural forms.' },
      { title: 'Advanced Supply', description: 'Sourcing the healthiest and most unique plant species globally.' },
      { title: 'Tech Integration', description: 'Using data-driven insights for plant health and garden longevity.' }
    ]
  },
  { 
    title: 'Passion', 
    principles: [
      { title: 'Artistic Vision', description: 'We treat every landscape as a unique piece of living art.' },
      { title: 'Detail Obsessed', description: 'Focused on the small details that create a big impact.' },
      { title: 'Client Centric', description: 'Driven by the desire to bring our clients\' outdoor dreams to life.' },
      { title: 'Love for Green', description: 'Deep respect and admiration for the natural beauty we cultivate.' }
    ]
  },
  { 
    title: 'Growth', 
    principles: [
      { title: 'Team Development', description: 'Investing in the continuous education and skill-set of our experts.' },
      { title: 'Eco Expansion', description: 'Constantly increasing our positive environmental footprint.' },
      { title: 'Evolving Methods', description: 'Refining our construction and maintenance techniques year after year.' },
      { title: 'Future Focused', description: 'Building landscapes that grow more beautiful with time.' }
    ]
  },
  { 
    title: 'Accountability', 
    principles: [
      { title: 'Result Guarantee', description: 'Taking full responsibility for the health and quality of our work.' },
      { title: 'Transparent Process', description: 'Clear communication and honesty from first sketch to final plant.' },
      { title: 'Safety Standards', description: 'Rigorous safety protocols in all our construction and supply operations.' },
      { title: 'Reliable Support', description: 'Always available to ensure your green spaces remain perfect.' }
    ]
  },
];

export const CLIENTS = [
  'https://b.top4top.io/p_365414pyb1.jpg',
  'https://c.top4top.io/p_365491ey82.jpg',
  'https://d.top4top.io/p_36548zbdj3.jpg',
  'https://e.top4top.io/p_3654djkbe4.jpg',
  'https://f.top4top.io/p_3654huywe5.jpg'
];
