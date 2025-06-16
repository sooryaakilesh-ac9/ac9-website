
import { Brain, Zap, Shield, BarChart3, Cloud, Cpu, Settings, CheckCircle, Target, Eye } from 'lucide-react';
import type { ElementType } from 'react';

export interface Feature {
  icon: ElementType;
  title: string;
  description: string;
  color: string;
}

export interface Service {
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  number: string;
  label: string;
}

export interface Leadership {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface AboutData {
  stats: Stat[];
  benefits: string[];
  leadership: Leadership[];
}

const features: Feature[] = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Cutting-edge machine learning algorithms that evolve with your business needs.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data and generate insights at unprecedented speeds with optimized performance.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols to keep your sensitive data protected at all times.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Make informed decisions with comprehensive analytics and predictive insights.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Scalable cloud infrastructure that grows with your business requirements.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Automate complex workflows and reduce manual tasks with intelligent systems.",
    color: "bg-amber-100 text-amber-600"
  }
];

const services: Service[] = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Comprehensive AI roadmap development tailored to your business objectives and industry requirements.",
    features: ["Strategic Planning", "ROI Analysis", "Implementation Roadmap"]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline operations and eliminate repetitive tasks.",
    features: ["Workflow Optimization", "Smart Automation", "Performance Monitoring"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Advanced analytics and machine learning models that transform data into actionable insights.",
    features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"]
  },
  {
    icon: Shield,
    title: "AI Security Solutions",
    description: "Enterprise-grade security frameworks designed specifically for AI-powered applications.",
    features: ["Security Audits", "Compliance Management", "Risk Assessment"]
  },
  {
    icon: Cloud,
    title: "Cloud AI Integration",
    description: "Seamless integration of AI capabilities into your existing cloud infrastructure.",
    features: ["Cloud Migration", "API Integration", "Scalable Architecture"]
  },
  {
    icon: Settings,
    title: "Custom AI Development",
    description: "Bespoke AI solutions built from the ground up to meet your unique business challenges.",
    features: ["Custom Models", "API Development", "Ongoing Support"]
  }
];

const aboutData: AboutData = {
  stats: [
    { number: "500+", label: "Companies Transformed" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "24/7", label: "Expert Support" },
    { number: "150%", label: "Average ROI Increase" }
  ],
  benefits: [
    "Reduce operational costs by up to 40%",
    "Increase productivity with smart automation",
    "Make data-driven decisions faster",
    "Scale your business without limits"
  ],
  leadership: [
    {
      name: "Amit Singh",
      role: "Chairman",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRxDRrudIbQ988kG-M_49vP-uU6d5tG6wDw&s",
      bio: "Visionary leader with 20+ years in technology and business transformation. Former executive at Google, Oracle, and Palo Alto Networks."
    },
    {
      name: "Sudhagar Chinnasamy",
      role: "Founder",
      image: "https://avatars.githubusercontent.com/u/3543343?v=4",
      bio: "AI expert and strategic innovator driving our mission to transform businesses. Former technical lead at Meta, WhatsApp, and Ericsson."
    }
  ]
};

const simulateFetch = <T>(data: T, delay = 30): Promise<T> => 
  new Promise(resolve => setTimeout(() => resolve(data), delay));

export const fetchFeatures = (): Promise<Feature[]> => simulateFetch(features);
export const fetchServices = (): Promise<Service[]> => simulateFetch(services);
export const fetchAboutData = (): Promise<AboutData> => simulateFetch(aboutData);
