export type ViewType = 'home' | 'about' | 'services' | 'features' | 'academy' | 'contact' | 'privacy' | 'terms';

export interface ContactFormData {
  request_type: 'more_info' | 'quotation' | 'demo' | 'trial';
  name: string;
  email: string;
  company: string;
  phone?: string;
  company_size?: string;
  industry?: string;
  jurisdictions?: string;
  expected_users?: string;
  message: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: 'core' | 'advanced' | 'security';
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CourseItem {
  level: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
}
