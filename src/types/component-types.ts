// Component-specific type definitions
import { ReactNode } from 'react';

export interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  items?: Array<{
    title: string;
    href: string;
  }>;
}

export interface NavItem {
  label: string; 
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface FormSection {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  isComplete?: boolean;
}

export interface FAQItem {
  id: string;
  icon: ReactNode;
  title: string;
  content: string;
}
