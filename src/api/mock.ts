
import { Brain, Zap, Shield, BarChart3, Cloud, Cpu, Settings, CheckCircle, Target, Eye } from 'lucide-react';

const features = [
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
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Automate complex workflows and reduce manual tasks with intelligent systems.",
    color: "bg-amber-100 text-amber-600"
  }
];

const services = [
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

const projects = [
    {
      title: "Healthcare AI Platform",
      category: "Healthcare",
      description: "Revolutionizing patient care with predictive analytics and automated diagnostic assistance.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      results: ["40% faster diagnosis", "95% accuracy rate", "50% cost reduction"]
    },
    {
      title: "Retail Optimization Suite",
      category: "Retail",
      description: "Advanced inventory management and customer behavior analysis for e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: ["30% inventory optimization", "25% sales increase", "60% better forecasting"]
    },
    {
      title: "Financial Risk Assessment",
      category: "Finance",
      description: "Real-time fraud detection and risk analysis system for banking institutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      results: ["99.8% fraud detection", "80% faster processing", "70% risk reduction"]
    },
    {
      title: "Manufacturing Automation",
      category: "Manufacturing",
      description: "Smart factory solutions with predictive maintenance and quality control systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      results: ["35% efficiency gain", "90% less downtime", "45% quality improvement"]
    }
];

const aboutData = {
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
      name: "John Smith",
      role: "Chairman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 20+ years in technology and business transformation."
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "AI expert and strategic innovator driving our mission to transform businesses."
    }
  ]
};

const simulateFetch = (data: any, delay = 50) => new Promise(resolve => setTimeout(() => resolve(data), delay));

export const fetchFeatures = () => simulateFetch(features);
export const fetchServices = () => simulateFetch(services);
export const fetchPortfolio = () => simulateFetch(projects);
export const fetchAboutData = () => simulateFetch(aboutData);
